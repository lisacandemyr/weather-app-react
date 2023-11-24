import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row">
        <div className="col-6 temperature">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="big-icon me-3"
          />
          {Math.round(props.data.temperature)}
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul className="weather-information">
            <li className="text-capitalize">
              Condition: {props.data.description}
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
