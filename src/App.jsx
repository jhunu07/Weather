import { useState } from 'react'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async (city) => {
    setLoading(true)
    setError('')
    try {
      // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
      const apiKey = 'YOUR_API_KEY'
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      if (!response.ok) throw new Error('City not found')
      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <h1 className="title">Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App