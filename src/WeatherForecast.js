import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="col">
        <div className="day">Thursday</div>
        <WeatherIcon code="01d" size={46} />
        <div className="temperatures">
          <span className="temperature-max">19°</span>{" "}
          <span className="temperature-min">10°</span>
        </div>
      </div>
    </div>
  );
}
