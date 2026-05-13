import './WeatherCard.css'

const WeatherCard = ({ weather }) => {
  const { name, main, wind, weather: weatherInfo, sys } = weather
  const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`

  return (
    <div className="weather-card glassmorphism">
      <div className="weather-header">
        <h2>{name}, {sys.country}</h2>
        <img src={iconUrl} alt={weatherInfo[0].description} />
        <p className="description">{weatherInfo[0].description}</p>
      </div>
      <div className="weather-details">
        <div className="detail">
          <span className="label">Temperature:</span>
          <span className="value">{Math.round(main.temp)}°C</span>
        </div>
        <div className="detail">
          <span className="label">Feels like:</span>
          <span className="value">{Math.round(main.feels_like)}°C</span>
        </div>
        <div className="detail">
          <span className="label">Humidity:</span>
          <span className="value">{main.humidity}%</span>
        </div>
        <div className="detail">
          <span className="label">Wind Speed:</span>
          <span className="value">{wind.speed} m/s</span>
        </div>
        <div className="detail">
          <span className="label">Pressure:</span>
          <span className="value">{main.pressure} hPa</span>
        </div>
        <div className="detail">
          <span className="label">Visibility:</span>
          <span className="value">{weather.visibility / 1000} km</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard