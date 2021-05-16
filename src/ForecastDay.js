import React from "react";
import "./ForecastDay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function ForecastDay(props) {
  return (
    <div className="col day-{props.dayX}">
      <h3>{props.day}</h3>
      <div className="day-weather-icon icon">
        <FontAwesomeIcon icon={Icons.faCloudSun} />
      </div>
      <p className="day-temperature">
        <span className="min-temp-num">5</span>°C /
        <strong>
          <span className="max-temp-num">10</span>°C
        </strong>
      </p>
    </div>
  );
}
