import { combineReducers } from "@reduxjs/toolkit";
import { reducer as settings } from './slices/Settings/Settings.slice'
import { reducer as searchedWeatherData } from "./slices/Weather/WeatherSearch.slice";
import { reducer as forecastWeatherData } from "./slices/Weather/WeatherForecast.slice";

export const rootReducers = combineReducers({
    settings,
    searchedWeatherData,
    forecastWeatherData,
})