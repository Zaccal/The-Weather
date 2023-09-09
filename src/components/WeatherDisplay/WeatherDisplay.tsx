import { IForcecastWeather } from '@/types/Weather.interface'

const WeatherDisplay = ({ current, location, forecast }: IForcecastWeather) => {
  return (
    <div className="w-full pl-4 flex justify-between items-center">
      <div>
        <div>
          <h3 className="text-6xl font-bold">{location.region}</h3>
          <p className="text-gray-500 text-md mt-3">
            Chance of rain: {forecast.forecastday[current.is_day].day.daily_chance_of_rain}%
          </p>
        </div>
        <h2 className="text-5xl font-bold mt-11">{current.feelslike_c}°</h2>
      </div>
      <img src={current.condition.icon} alt={current.condition.text} className="max-w-[230px] w-full" />
    </div>
  )
}

export default WeatherDisplay
