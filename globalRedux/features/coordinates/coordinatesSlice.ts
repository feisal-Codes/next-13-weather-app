'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface CoordinateState {
  location: Object[]
}

const initialState: CoordinateState = {
  location: []
}

export const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {
    storeCoordinates: (state, action) => {
      console.log(action.payload)
      if (state.location.length === 0) {
        console.log(action.payload[0])
        state.location.push(action.payload[0])
        return
      }
      const exists = state.location.find(
        (item: any) => item?.name === action.payload[0].name
      )

      if (!exists) {
        state.location.push(action.payload[0])
      }
    }
  }
})

export const { storeCoordinates } = coordinatesSlice.actions
export default coordinatesSlice.reducer
