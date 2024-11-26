'use client'

import { useState } from 'react'
import { WeatherCard } from './components/WeatherCard'
import { ForecastCard } from './components/ForecastCard'
import { getWeatherData, getForecastData } from './utils/weather'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Weather() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [error, setError] = useState('')

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const weather = await getWeatherData(city)
      setWeatherData(weather)
      const forecast = await getForecastData(city)
      setForecastData(forecast.list.filter((_: any, index: number) => index % 8 === 0))
      setError('')
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.')
      setWeatherData(null)
      setForecastData(null)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Weather App</h1>
      <form onSubmit={handleSearch} className="mb-4 flex gap-2">
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="flex-grow"
        />
        <Button type="submit">Search</Button>
      </form>
      {error && (
        <Card className="mb-4">
          <CardContent className="p-4">
            <p className="text-red-500">{error}</p>
          </CardContent>
        </Card>
      )}
      {weatherData && <WeatherCard data={weatherData} />}
      {forecastData && <ForecastCard data={forecastData} />}
    </div>
  )
}