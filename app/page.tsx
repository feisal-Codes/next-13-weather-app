'use client'
import Forecast from '@/components/Forecast'
import SunsetCard from '@/components/SunsetCard'
import { SingleSpinner, Skeleton } from '@/components/atoms/Spinner'
import SearchInput from '@/components/formComponents/SearchInput'
import WeatherDetailsCard from '@/components/weatherDetailsCard'
import { getLocationData, getWeatherData } from '@/utils/api/http'
import { formatData } from '@/utils/helpers/formatData'
import { useState, useEffect } from 'react'
import type { RootState } from '@/globalRedux/store'
import { useSelector, useDispatch } from 'react-redux'
import { storeCoordinates } from '@/globalRedux/features/coordinates/coordinatesSlice'
import { weatherData } from '@/globalRedux/features/weatherDataSlice'

export default function Home () {
  const [location, setLocation] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<any>({})
  const [error, setError] = useState<boolean>(false)

  function handleInputChange (event: React.ChangeEvent<HTMLInputElement>): void {
    setLocation(event.target.value)
  }

  const coordinates = useSelector(
    (state: RootState) => state?.coordinates?.location
  )

  const dispatch = useDispatch()

  async function handleClick (event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()
    if (!location) {
      setLocation('')
      return
    }
    try {
      setLoading(true)
     
      const exists: any = coordinates.find(
        (item: any) => item?.name?.toLowerCase() === location.toLowerCase()
      )
      if (!exists) {
        const res = await getLocationData(location)
        if (res?.length === 0 || !res) {
          setLoading(false)
          setError(true)
          return
        }
        dispatch(storeCoordinates(res))
        const { lat, lon } = res[0]
        const result = await getWeatherData(lat, lon)
        if (result) {
          dispatch(weatherData(result))

          setLoading(false)
          setLocation('')
        }
        console.log(result)
        setData(result)
      }
      if (exists) {
        const { lat, lon } = exists
        const result = await getWeatherData(lat, lon)

        setData(result)
        if (result) {
          dispatch(weatherData(result))

          setLoading(false)
          setLocation('')
        }
      }
    } catch (e) {
      setLoading(false)

      setError(true)
    }
  }

  const formatedData = formatData(data)

  return (
    <>
      <section className='bg-secondary-white p-10 flex-1 md:fixed  '>
        <div className='container  flex justify-center '>
          <SearchInput
            onChange={handleInputChange}
            value={location}
            name='search'
            type='text'
            handleClick={handleClick}
          />
        </div>
        {loading && (
          <div className='flex flex-1 h-4/5 xs:invisible mt-36 justify-center items-center'>
            <SingleSpinner />
          </div>
        )}

        {!loading && data && (
          <div className='h-4/6'>
            <WeatherDetailsCard />
            <SunsetCard />
          </div>
        )}
      </section>
      <section className=' md:bg-card-yellow md:bg-opacity-10     md:w-2/3 md:ml-96 '>
        {loading && (
          <div className='flex flex-1 h-3/4 justify-center items-center'>
            <SingleSpinner />
          </div>
        )}

        {error && !data && (
          <div className='mt-36 font-light text-2xl text-red-500 text-center'>
            <p>Oopps, failed to fetch</p>
            <p>Check your network connection and try again!</p>
          </div>
        )}

        <div className='md:p-10'>
          {!loading &&
            data &&
            formatedData
              .slice(1)
              .map((list: any, index: number) => (
                <Forecast key={index} data={list[Object.keys(list)[0]]} />
              ))}
        </div>
      </section>
    </>
  )
}
