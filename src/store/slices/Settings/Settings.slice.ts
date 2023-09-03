import { ISettings, TypeTheme } from "@/types/Settings.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ISettings = {
    theme: 'system',
    location: '',
}

const settings = createSlice({
    name: 'localstorage',
    initialState,
    reducers: {
        changeTheme: (state, actions: PayloadAction<TypeTheme>) => {
            const newTheme = actions.payload
            state.theme = newTheme
        },
        changeLocation: (state, actions: PayloadAction<string>) => {
            state.location = actions.payload
        }
    }
})

export const {actions, reducer} = settings