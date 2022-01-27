import React from "react";

export default function Date(props) {
  let months = [
    `01`,
    `02`,
    `03`,
    `04`,
    `05`,
    `06`,
    `07`,
    `08`,
    `09`,
    `10`,
    `11`,
    `12`,
  ];
  let month = months[props.dataTime.getMonth()];

  let date = props.dataTime.getDate();
  let year = props.dataTime.getFullYear();
  return (
    <div className="Date">
      {date}/{month}/{year}
    </div>
  );
}
