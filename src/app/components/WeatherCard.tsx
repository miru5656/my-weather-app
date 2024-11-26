import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from "../utils/weather"

interface WeatherCardProps {
  data: {
    name: string;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather: Array<{
      description: string;
      icon: string;
    }>;
    dt: number;
  };
}

export function WeatherCard({ data }: WeatherCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{data.name} - Current Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-4xl font-bold">{Math.round(data.main.temp)}°C</p>
            <p className="text-xl">{data.weather[0].description}</p>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            width={100}
            height={100}
          />
        </div>
        <div className="mt-4">
          <p>Feels like: {Math.round(data.main.feels_like)}°C</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Date: {formatDate(data.dt)}</p>
        </div>
      </CardContent>
    </Card>
  )
}

