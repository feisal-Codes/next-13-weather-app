"use client";
import {configureStore} from "@reduxjs/toolkit"
import coordinatesReducer from "./features/coordinates/coordinatesSlice"
import weatherDataReducer from "./features/weatherDataSlice";

export const store= configureStore({
    reducer:{
        coordinates:coordinatesReducer,
        weatherData:weatherDataReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;