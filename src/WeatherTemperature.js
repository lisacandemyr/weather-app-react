import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      {Math.round(props.celsius)}
      <span className="unit">°C</span>
    </span>
  );
}
