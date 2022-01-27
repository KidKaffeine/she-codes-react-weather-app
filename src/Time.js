import React from "react";

export default function Time(props) {
  let hours = props.dataDate.getHours();
  if (hours < 10) hours = `0${hours}`;
  let minutes = props.dataDate.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  console.log();
  return (
    <div className="Time">
      {hours}:{minutes}H
    </div>
  );
}
