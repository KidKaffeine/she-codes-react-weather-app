import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

export default function Form(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
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
      <div className="Form">
        <form onSubmit={handleEvent}>
          <input
            type="search"
            placeholder="Type a city"
            className="form-control"
            onChange={getCity}
          />
          <input type="submit" value="Search" />
        </form>
        <WeatherDisplay data={weatherData} />
      </div>
    );
  } else {
    runAPI();
    return `Loading`;
  }
}
