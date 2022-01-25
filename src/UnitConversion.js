import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState(props.temperature);

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit(`fahrenheit`);
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit(props.temperature);
  }

  if (unit === props.temperature) {
    return (
      <div className="UnitConversion">
        {Math.round(props.temperature)}°C{" "}
        <a href="/" rel="noopener noreferrer" onClick={displayFahrenheit}>
          {" "}
          F °
        </a>{" "}
      </div>
    );
  } else {
    let fahrenheit = props.temperature * 1.8 + 32;
    return (
      <div className="UnitConversion">
        {Math.round(fahrenheit)}°F{" "}
        <a href="/" rel="noopener noreferrer" onClick={displayCelsius}>
          {" "}
          C
        </a>{" "}
      </div>
    );
  }
}
