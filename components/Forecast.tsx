import React from 'react'
import ForecastCard from './ForecastCard'

function Forecast ({ data }: any) {
  return (
    <section className='flex justify-around flex-wrap '>
      {data.slice(0, 4).map((list: any) => {
        return <ForecastCard key={list.dt} data={list} />
      })}
    </section>
  )
}

export default Forecast
