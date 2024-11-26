import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from "../utils/weather"

interface ForecastCardProps {
  data: Array<{
    dt: number;
    main: {
      temp: number;
    };
    weather: Array<{
      description: string;
      icon: string;
    }>;
  }>;
}

export function ForecastCard({ data }: ForecastCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto mt-4">
      <CardHeader>
        <CardTitle>5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-2">
          {data.map((day, index) => (
            <div key={index} className="text-center">
              <p className="font-semibold">{formatDate(day.dt)}</p>
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
                width={50}
                height={50}
                className="mx-auto"
              />
              <p>{Math.round(day.main.temp)}°C</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}