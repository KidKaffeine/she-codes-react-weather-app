import React from "react";
import Icons from "./Icons";

export default function DailyForecastData(props) {
  function formatDay() {
    let date = new Date(props.data.dt * 1000);
    let days = [
      `Sunday`,
      `Monday`,
      `Tuesday`,
      `Wednesday`,
      `Thursday`,
      `Friday`,
      `Saturday`,
    ];
    let day = days[date.getDay()];
    return `${day}`;
  }

  function minTemp() {
    let minTemperature = Math.round(props.data.main.temp_min);
    return `${minTemperature}° C`;
  }

  function maxTemp() {
    let maxTemperature = Math.round(props.data.main.temp_max);
    return `${maxTemperature}° C`;
  }
  return (
    <div className="DailyForecastData">
      <div> {formatDay()} </div>
      <span className="MinTemperature">Min: {minTemp()} </span> |
      <span className="MaxTemperature"> Max: {maxTemp()}</span>
      <br />
      <Icons dataIcon={props.data.weather[0].icon} size={24} />
    </div>
  );
}
