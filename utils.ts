import { ApiClient } from '@/api/WeatherApi/ApiClient'
import { SerializedError, createAsyncThunk } from '@reduxjs/toolkit'
import { isSerlizeError } from '@/utils/utils'
import { log } from 'console'

export const fetchWeatherSearch = createAsyncThunk('fetch/weather/search', async (searchLocation: string, thunkApi) => {
  try {
    const respose = await ApiClient.getSearchWeather(searchLocation)

    return respose
  } catch (error) {
    log()
    return thunkApi.rejectWithValue(error)
  }
})

export const fetchWeatherForecast = createAsyncThunk('fetch/weather/forecast', async (location: string, thunkApi) => {
  try {
    const respose = await ApiClient.getForecastWeather(location)

    return respose
  } catch (error) {
    return thunkApi.rejectWithValue(error)
  }
})
