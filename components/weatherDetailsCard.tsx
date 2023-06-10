'use client'
import { getLocalTime } from '@/utils/helpers/getLocalTime'
import React, { useState } from 'react'
import { GoLocation } from 'react-icons/go'
import { format } from 'date-fns'
import { getCelcius } from '@/utils/helpers/getCelcius'
import { imageUrl } from '@/utils/api/urls'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/globalRedux/store'



interface Props {
  data: any
}

function WeatherDetailsCard () {
  const data = useSelector(
    (state: RootState) => state?.weatherData?.data
  )

  return (
    <div 
      className='max-w-xs w-72 mx-auto bg-gradient-to-b  from-card-blue-light to-card-blue border
     border-card-blue rounded-xl shadow
     h-3/4 pb-4 mt-8'
    >
      <div  className='text-white  flex font-bold  items-center pt-4 pl-4 '>
        <GoLocation />
        <h2 className='ml-2'>
          {data?.city?.name ? data?.city?.name : 'Location'}
        </h2>
      </div>
      <div className='text-white flex-col text-center pt-3 '>
        {data?.list?.[0]?.weather?.[0]?.icon ? (
          <img
            className='mx-auto'
            src={imageUrl + data?.list?.[0]?.weather?.[0]?.icon + '@2x.png'}
          />
        ) : (
          <img className='mx-auto' src={imageUrl + '10d@2x.png'} />
        )}

        <p>{format(new Date(), 'dd MMMMMM yyyy')}</p>

        {getCelcius(data?.list?.[0]?.main?.temp) ? (
          <p className='text-5xl mt-3'>
            {getCelcius(data?.list?.[0]?.main?.temp)}

            <span>&#8451;</span>
          </p>
        ) : (
          <span className='text-5xl mt-4'>&#8451;</span>
        )}
        <div className='mt-4'>
          <p>{data?.list?.[0]?.weather?.[0]?.main}</p>
          <div className='flex justify-between mx-8 mt-3'>
            <p>Humidity</p>
            <p>
              {data?.list?.[0]?.main?.humidity
                ? data?.list?.[0]?.main?.humidity + ' %'
                : ''}
            </p>
          </div>
          <div className='flex justify-between mx-8'>
            <p>Pressure</p>
            <p>
              {data?.list?.[0]?.main?.pressure
                ? data?.list?.[0]?.main?.pressure + ' hPa'
                : ''}
            </p>
          </div>
          <div className='flex justify-between mx-8'>
            <p>Wind Speed</p>
            <p>
              {data?.list?.[0]?.wind?.speed
                ? data?.list?.[0]?.wind?.speed + ' m/s'
                : ''}{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDetailsCard
