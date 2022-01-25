import React from "react";

export default function Date(props) {
  let months = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ];
  let month = months[props.dataTime.getMonth()];
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let date = props.dataTime.getDate();
  let day = days[props.dataTime.getDay()];
  let year = props.dataTime.getFullYear();
  return (
    <div className="Date">
      {day}, {date} of {month} {year}
    </div>
  );
}
