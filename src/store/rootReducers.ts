import { combineReducers } from "@reduxjs/toolkit";
import { reducer as settings } from './slices/Settings/Settings.slice'
import { reducer as searchedWeatherData } from "./slices/Weather/Weather.slice";

export const rootReducers = combineReducers({
    settings,
    searchedWeatherData,
})