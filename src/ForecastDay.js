import React from "react";
import "./ForecastDay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function ForecastDay(props) {
  const data = props.data;

  const timestamp = new Date(data.dt * 1000);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = timestamp.getDay();

  const lowTemp = Math.round(data.temp.min);
  const highTemp = Math.round(data.temp.max);

  const description = data.weather[0].main;
  const icon = {
    Clear: Icons.faSun,
    Clouds: Icons.faCloudSun,
    Drizzle: Icons.faCloudRain,
    Rain: Icons.faCloudShowersHeavy,
    Thunderstorm: Icons.faBolt,
    Snow: Icons.faSnowflake,
    Mist: Icons.faStream,
  };

  if (props.unit === "imperial") {
    return (
      <div className="col">
        <h3>{days[day]}</h3>
        <div className="day-weather-icon icon">
          <FontAwesomeIcon icon={icon[description] || Icons.faStream} title={description} />
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
      <div className="col">
        <h3>{days[day]}</h3>
        <div className="day-weather-icon icon">
          <FontAwesomeIcon icon={icon[description] || Icons.faStream} />
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
