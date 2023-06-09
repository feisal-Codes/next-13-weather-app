import React from 'react'
import { LuSunrise, LuSunset } from 'react-icons/lu'
import { format } from 'date-fns'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/globalRedux/store'

function SunsetCard () {
  const data = useSelector((state: RootState) => state?.weatherData?.data)
  return (
    <div className=' rounded-lg w-72 mx-auto text-card-yellow bg-card-yellow p-6 bg-opacity-10 flex justify-around shadow-sm mt-4'>
      <div className='flex  items-center'>
        <LuSunrise size={30} />
        <div className='text-card-blue-light font-bold text-xs ml-2'>
          <p>sunrise</p>
          {data?.city?.sunrise * 1000 ? (
            <p>{format(new Date(data?.city?.sunrise * 1000), ' h:mm a')}</p>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className='flex  items-center'>
        <LuSunset size={30} />
        <div className='text-card-blue-light font-bold text-xs ml-2'>
          <p>sunset</p>
          {data?.city?.sunset * 1000 ? (
            <p>{format(new Date(data?.city?.sunset * 1000), ' h:mm a')}</p>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default SunsetCard
