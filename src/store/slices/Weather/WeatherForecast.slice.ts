import { IInitialStateWeatherSlice } from "@/types/InitialStateWeather.interface";
import { IForcecastWeather } from "@/types/Weather.interface";
import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherForecast } from "./Weather.actions";

const initialState: IInitialStateWeatherSlice<IForcecastWeather | null> = {
    isLoading: false,
    isSuccess: false,
    data: null,
    error: null
}

export const {reducer, actions} = createSlice({
    name: 'weather/forecast',
    reducers: {},
    initialState,
    extraReducers(builder) {
        builder 
            .addCase(fetchWeatherForecast.pending, state => {
                state.isLoading = true
                state.isSuccess = false
            })
            .addCase(fetchWeatherForecast.fulfilled, (state, action) => {
                state.isLoading = false 
                state.isSuccess = true 
                state.data = action.payload
            })
            .addCase(fetchWeatherForecast.rejected, (state, action) => {
                state.isLoading = false 
                state.isSuccess = false 
                state.data = null
                state.error = action.error
            })
    },
})