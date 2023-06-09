'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface weatherDataState {
  data: any
}

const initialState: weatherDataState = {
  data: {}
}

export const weatherDataSlice = createSlice({
  name: 'weatherData',
  initialState,
  reducers: {
    weatherData: (state, action) => {
        console.log("hererere")
        console.log(action.payload)
      state.data = action.payload
    }
  }
})

export const { weatherData } = weatherDataSlice.actions
export default weatherDataSlice.reducer
