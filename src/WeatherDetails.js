import React from "react";
import "./WeatherDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import FiveDayForecast from "./FiveDayForecast";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherDetails() {
  return (
    <div className="row mt-4">
      <div className="col-sm-6">
        <Form />
        <h1>Berlin</h1>
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="white"
          size={70}
          animate={true}
        />
        <h3> Sunny / 3°C</h3>
        <ul>
          <li>Humidity: 75%</li>
          <li>Wind: 5 km/h</li>
          <li>Real Feel: 0°C</li>
          <li>Last updated at 20h</li>
        </ul>
        <h6 className="Date">Thursday, 20 January, 2022</h6>
      </div>
      <div className="col-sm-6">
        <FiveDayForecast />
      </div>
    </div>
  );
}
