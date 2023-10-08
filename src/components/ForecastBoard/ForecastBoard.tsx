import { IForcecastWeather } from '@/types/Weather.interface'
import Board from '../ui/Board'
import ForecastCard from './ForecastCard'

const ForecastBoard = ({ current, forecast, location }: IForcecastWeather) => {
  return (
    <Board className="mt-6 w-full" title="today's forecast">
      {/* <div className="flex"> */}
      {forecast.forecastday[0].hour.map(dayHourData => {
        return <ForecastCard key={dayHourData.time} data={dayHourData} />
      })}
      {/* </div> */}
    </Board>
  )
}

export default ForecastBoard
