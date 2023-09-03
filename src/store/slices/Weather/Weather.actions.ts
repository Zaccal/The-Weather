import { ApiClient } from "@/api/WeatherApi/ApiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeatherSearch = createAsyncThunk('fetch/weather/search', async (searchLocation: string, thunkApi) => {
    try {
        const respose = await ApiClient.getSearchWeather(searchLocation)
            
        return respose
    } 
    catch (error) {
        return thunkApi.rejectWithValue(error)        
    }
}) 