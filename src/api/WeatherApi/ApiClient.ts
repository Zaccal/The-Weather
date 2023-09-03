import { ICurrentWeather, IForcecastWeather, ISearchWeather } from "@/types/Weather.interface";
import { ApiConfig } from "./ApiConfig";
import axios from "axios";

const axiosWeather = axios.create({
    baseURL: ApiConfig.baseUrl,
    headers: {
        "Content-Type": 'json/application',
        Accept: 'json/application',
        Authorization: ApiConfig.key,
    },
    params: {
        key: ApiConfig.key,
    },
})

export class ApiClient {
    static async getCurrentWeather(location: string): Promise<ICurrentWeather> {
        const respose = await axiosWeather.get(ApiConfig.currentUrl, {
            params: {
                q: location
            }
        })

        return respose.data
    }

    static async getForecastWeather(location: string, days: number = 7): Promise<IForcecastWeather> {
        const respose = await axiosWeather.get(ApiConfig.forecastUrl, {
            params: {
                q: location,
                days,
            }
        })

        return respose.data
    }

    static async getSearchWeather(searchLocation: string): Promise<ISearchWeather[]> {
        const respose = await axiosWeather.get(ApiConfig.searchUrl, {
            params: {
                q: searchLocation,
            }
        })

        return respose.data
    }
}