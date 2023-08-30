import { ISettings, TypeTheme } from "@/types/Settings.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ISettings = {
    theme: 'system'
}

const settings = createSlice({
    name: 'localstorage',
    initialState,
    reducers: {
        changeTheme: (state, actions: PayloadAction<TypeTheme>) => {
            const newTheme = actions.payload
            state.theme = newTheme
        }
    }
})

export const {actions, reducer} = settings