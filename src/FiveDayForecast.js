import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FiveDayForecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function FiveDayForecast() {
  return (
    <div className="FiveDayForecast">
      <div className="DayOne">
        <div className="WeekDay">Fri</div>
        <span className="MinTemperature">Min: 2°C </span> |
        <span className="MaxTemperature"> Max: 0°C </span>
        <br />
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="white"
          size={30}
          animate={true}
        />
      </div>
      <div className="DayTwo">
        <div className="WeekDay">Sat</div>
        <span className="MinTemperature">Min: 3°C </span> |
        <span className="MaxTemperature"> Max: 3°C </span>
        <br />
        <ReactAnimatedWeather
          icon="RAIN"
          color="white"
          size={30}
          animate={true}
        />
      </div>
      <div className="DayThree">
        <div className="WeekDay"> Sun</div>
        <span className="MinTemperature">Min: 5°C </span> |
        <span className="MaxTemperature"> Max: 4°C </span>
        <br />
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="white"
          size={30}
          animate={true}
        />
      </div>
      <div className="DayFour">
        <div className="WeekDay">Monday</div>
        <span className="MinTemperature">Min: 3°C </span> |
        <span className="MaxTemperature"> Max: 5°C </span>
        <br />
        <ReactAnimatedWeather
          icon="RAIN"
          color="white"
          size={30}
          animate={true}
        />
      </div>
      <div className="DayFive">
        <div className="WeekDay">Tue</div>
        <span className="MinTemperature">Min: 5°C </span> |
        <span className="MaxTemperature"> Max: 0°C </span>
        <br />
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="white"
          size={30}
          animate={true}
        />
      </div>
    </div>
