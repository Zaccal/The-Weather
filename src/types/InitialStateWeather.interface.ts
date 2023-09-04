import { SerializedError } from "@reduxjs/toolkit";

export interface IInitialStateWeatherSlice<T = unknown> {
    isLoading: boolean,
    isSuccess: boolean,
    error: SerializedError | null,
    data: T,
}