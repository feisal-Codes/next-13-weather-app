'use client'
import React, { useEffect, useState } from 'react'

function useFetch (url: string) {
  const [data, setData] = useState<Object[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    getLocationData()
  }, [url])

  async function getLocationData () {
    try {
      const response = await fetch(
        url + `&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      )

      const result = await response.json()
      setData(result)
      if (!response.ok) {
        setError(true)
        setLoading(false)
        throw new Error('Failed to fetch data')
      }
    } catch (e) {
      console.log(e)
      setError(true)
    }
  }
  return { data, error, loading }
}

export default useFetch
