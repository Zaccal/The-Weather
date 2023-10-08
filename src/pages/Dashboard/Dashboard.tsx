import WeatherDisplay from '@/components/WeatherDisplay/WeatherDisplay'
import useActions from '@/hooks/useActions'
import useTypedSelector from '@/hooks/useTypedSelector'
import { useEffect } from 'react'
import Error from '../Error/Error'
import Spiner from '@/components/ui/Spiner'
import ForecastBoard from '@/components/ForecastBoard/ForecastBoard'

const Dashboard = () => {
  const { fetchWeatherForecast } = useActions()
  const { location } = useTypedSelector(state => state.settings)
  const { data, error, isLoading } = useTypedSelector(state => state.forecastWeatherData)

  useEffect(() => {
    fetchWeatherForecast(location)
  }, [location])

  if (isLoading) return <Spiner className="mt-[10%]" />

  return (
    <div className="grid grid-cols-content/bar gap-5">
      <div className="col-span-4">
        <WeatherDisplay {...data} />
        <ForecastBoard {...data} />
      </div>
      <div className=""></div>
    </div>
  )
}

export default Dashboard
