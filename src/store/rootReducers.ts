import { combineReducers } from "@reduxjs/toolkit";
import { reducer as settings } from './slices/Settings/Settings.slice'

export const rootReducers = combineReducers({
    settings
})