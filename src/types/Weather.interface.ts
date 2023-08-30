interface ICondition {
    text: string;
    icon: string;
    code: number;
}

type TypeLocationStringOptions = Record<'name' | 'region' | 'country' | 'tz_id' | 'localtime', string>;
type TypeLocationNumberOptions = Record<'lat' | 'lon' | 'localtime_epoch', number>;

type TypeLocation = TypeLocationStringOptions & TypeLocationNumberOptions;

type TypeCurrentNumberOptions = Record<
    | 'temp_c'
    | 'temp_f'
    | 'is_day'
    | 'wind_mph'
    | 'wind_kph'
    | 'feelslike_c'
    | 'feelslike_f'
    | 'humidity',
    number
>;

interface ICurrent extends TypeCurrentNumberOptions {
    wind_dir: string;
    condition: ICondition;
}

export interface ICurrentWeather {
    location: TypeLocation;
    current: ICurrent;
}

// --------------IForcecastWeather----------------

type TypeAstroStringOptions = Record<
    | 'sunrise'
    | 'sunset'
    | 'moonrise'
    | 'moonset'
    | 'moon_phase'
    | 'moon_illumination',
    string
>;

interface IAstro extends TypeAstroStringOptions {
    is_moon_up: number;
    is_sun_up: number;
}

type TypeDayNumberOptions = Record<
    | 'maxtemp_c'
    | 'mintemp_c'
    | 'maxtemp_f'
    | 'mintemp_f'
    | 'avgtemp_c'
    | 'avgtemp_f'
    | 'maxwind_mph'
    | 'maxwind_kph'
    | 'avgvis_km'
    | 'daily_will_it_rain'
    | 'daily_chance_of_rain'
    | 'uv',
    number
>;

interface IDay extends TypeDayNumberOptions {
    condition: ICondition;
}

interface IHour extends TypeCurrentNumberOptions {
    date_epoch: number;
    time: string;
    wind_dir: string;
    condition: ICondition;
}

interface IForecastday {
    date: string;
    date_epoch: number;
    astro: IAstro;
    day: IDay;
    hour: IHour[];
}

export interface IForcecastWeather extends ICurrentWeather {
    forecast: {
        forecastday: IForecastday[];
    };
}

// --------------ISearchWeather----------------

export interface ISearchWeather {
    id: number,
    name: string,
    region: string,
    country: string,
    lat: number,
    lon: number,
    url: string
}