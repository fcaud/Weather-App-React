import React from "react";
import "./ForecastDay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function ForecastDay(props) {
  const timestamp = new Date(props.data.dt * 1000);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = timestamp.getDay();

  const lowTemp = Math.round(props.data.temp.min);
  const highTemp = Math.round(props.data.temp.max);

  if (props.unit === "imperial") {
    return (
      <div className="col day-{props.dayX}">
        <h3>{days[day]}</h3>
        <div className="day-weather-icon icon">
          <FontAwesomeIcon icon={Icons.faCloudSun} />
        </div>
        <p className="day-temperature">
          <span className="min-temp-num">{lowTemp}</span>°F /
          <strong>
            <span className="max-temp-num">{highTemp}</span>°F
          </strong>
        </p>
      </div>
    );
  } else {
    return (
      <div className="col day-{props.dayX}">
        <h3>{days[day]}</h3>
        <div className="day-weather-icon icon">
          <FontAwesomeIcon icon={Icons.faCloudSun} />
        </div>
        <p className="day-temperature">
          <span className="min-temp-num">{lowTemp}</span>°C /
          <strong>
            <span className="max-temp-num">{highTemp}</span>°C
          </strong>
        </p>
      </div>
    );
  }
}
