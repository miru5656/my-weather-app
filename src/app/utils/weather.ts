const API_KEY = '504d28c077e36c1cc96655dd770e19d3';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeatherData(city: string) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  if (!response.ok) throw new Error('Failed to fetch weather data');
  return response.json();
}

export async function getForecastData(city: string) {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  if (!response.ok) throw new Error('Failed to fetch forecast data');
  return response.json();
}

export function formatDate(date: number): string {
  return new Date(date * 1000).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}