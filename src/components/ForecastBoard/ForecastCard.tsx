import { IHour } from '@/types/Weather.interface'

const ForecastCard = ({ data }: { data: IHour }) => {
  const { time, condition } = data
  return (
    <div className=" border-r-muted-foreground border-r px-7">
      <h4 className="text-center font-bold text-muted-foreground">{time.split(' ')[1]}</h4>
      <img className="w-10 h-10" src={condition.icon} alt={condition.text} />
    </div>
  )
}

export default ForecastCard
