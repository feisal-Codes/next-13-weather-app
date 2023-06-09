"use client";
import { forecast, geocode } from '../api/urls'

//get weather data
export async function getWeatherData (lat: string, lon: string) {
  const res = await fetch(
    forecast + `lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  )
console.log(res)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

//get location coordinates
export async function getLocationData (location: string) {
  const res = await fetch(
    geocode + `q=${location}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  console.log("********************************************************************8")
  return res.json()
}
