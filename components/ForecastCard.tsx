'use client'
import { getLocalTime } from '@/utils/helpers/getLocalTime'
import React, { useState } from 'react'
import { GoLocation } from 'react-icons/go'
import { format } from 'date-fns'
import { getCelcius } from '@/utils/helpers/getCelcius'
import { imageUrl } from '@/utils/api/urls'

interface Props {
  data: any
}

function ForecastCard ({ data }: Props) {

  

  return (
    <div data-testid="weather-card"
      className=' xs: w-64 md:w-44  mx-auto bg-gradient-to-b  from-card-blue-light to-card-blue border
     border-card-blue rounded-md shadow
      my-2'
    >
      <div className='text-white flex-col text-center  '>
        <img
          className='mx-auto'
          src={imageUrl + data?.weather?.[0]?.icon + '.png'}
        />
        <p className='text-xs font-bold'>
            { data?.dt ? format(new Date(data?.dt * 1000), "dd-MMMM 'at' h:mm a"):""}
        </p>

        {getCelcius(data?.main?.temp) ? (
          <p className='text-3xl mt-1'>
            {getCelcius(data?.main?.temp)}

            <span>&#8451;</span>
          </p>
        ) : (
          ''
        )}
        <div className='text-xs '>
          <p>{data?.weather?.[0]?.main}</p>
          <div className='flex justify-between mx-2 xs:mx-0 mt-1'>
            <p>Humidity</p>
            <p>{data?.main?.humidity + ' %'}</p>
          </div>
          <div className='flex justify-between mx-2 xs:mx-0'>
            <p>Pressure</p>
            <p>{data?.main?.pressure + ' hPa'}</p>
          </div>
          <div className='flex justify-between  mx-2 xs:mx-0 xs:invisible'>
            <p>Wind Speed</p>
            <p>{data?.wind?.speed + ' m/s'} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForecastCard
