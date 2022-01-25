import React from "react";
import "./WeatherDisplay.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Time from "./Time";
import Date from "./Date";
import Icons from "./Icons";
import UnitConversion from "./UnitConversion";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <h1>{props.data.city}</h1>
      <Icons dataIcon={props.data.icon} alt={props.data.overview} />
      <h3>{props.data.overview}</h3>{" "}
      <h4>
        <UnitConversion temperature={props.data.temperature} />
      </h4>{" "}
      <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)} km/h</li>
        <li>Real Feel: {Math.round(props.data.realFeel)}°C</li>
        <li>
          Last updated at <Time dataDate={props.data.date} />
        </li>
      </ul>
      <h6 className="Date">
        {" "}
        <Date dataTime={props.data.date} />
      </h6>
    </div>
  );
}
