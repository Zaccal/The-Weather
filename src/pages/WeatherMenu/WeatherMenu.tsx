import WeatherDisplay from "@/components/WeatherDisplay/WeatherDisplay"
import useActions from "@/hooks/useActions"
import useTypedSelector from "@/hooks/useTypedSelector"
import { useEffect } from "react"
import Error from "../Error/Error"

const WeatherMenu = () => {
    const {fetchWeatherForecast} = useActions()
    const {location} = useTypedSelector(state => state.settings)
    const {data, error, isLoading} = useTypedSelector(state => state.forecastWeatherData)

    useEffect(() => {
        fetchWeatherForecast(location)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    if (isLoading) return <p>Loading...</p>
    if (data === null) return <p>Data is not exist</p> 
    if (error) return <Error />

    return (
        <div className="grid grid-cols-content/bar gap-5">
            <div className="grid col-span-4">
                <WeatherDisplay {...data}/>
            </div>
            <div className="">

            </div>
        </div>
    )
}

export default WeatherMenu