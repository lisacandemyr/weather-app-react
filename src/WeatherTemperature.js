import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature ms-2">
      {Math.round(props.celsius)}
      <span className="degree-symbol">°</span>
      <span className="unit">C</span>
    </span>
  );
}
