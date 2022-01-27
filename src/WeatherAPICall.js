import React, { useState, useEffect } from "react";
import "./WeatherAPICall.css";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import FiveDayForecast from "./FiveDayForecast";

export default function WeatherAPICall(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      coordinates: response.data.coord,
      loaded: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      overview: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      realFeel: response.data.main.feels_like,
    });
  }

  function runAPI() {
    const apiKey = `8b97fe043a9f1ebd3cb3718eebd8f06f`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleEvent(event) {
    event.preventDefault();
    runAPI();
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="WeatherAPICall">
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={handleEvent}>
              <input
                type="search"
                placeholder="Type a city"
                className="form-control input"
                onChange={getCity}
              />
              <button type="submit">Search</button>
            </form>
            <WeatherDisplay data={weatherData} />
          </div>
          <div className="col-sm-6">
            <FiveDayForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    runAPI();
    return <div className="WeatherAPICall"> Loading...</div>;
  }
}
