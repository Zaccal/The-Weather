import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherSearch } from "./Weather.actions";
import { ISearchWeather } from "@/types/Weather.interface";
import { IInitialStateWeatherSlice } from "@/types/InitialStateWeather.interface";

const initialState: IInitialStateWeatherSlice<ISearchWeather[]> = {
    isLoading: false,
    isSuccess: false,
    data: [],
    error: null
}

export const {reducer, actions} = createSlice({
    name: 'weather/search',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder 
            .addCase(fetchWeatherSearch.pending, state => {
                state.isLoading = true
                state.isSuccess = false
            })
            .addCase(fetchWeatherSearch.fulfilled, (state, action) => {
                state.data = action.payload
                state.isLoading = false
                state.isSuccess = true                
            })
            .addCase(fetchWeatherSearch.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.data = []
                state.error = action.error
            })
    }
})