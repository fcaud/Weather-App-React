import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  return (
    <div className="col day-{props.dayX}">
      <h3>{props.day}</h3>
      <div className="day-weather-icon icon">
        <i className="fas fa-cloud-sun"></i>
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
