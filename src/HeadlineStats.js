import React from "react";
import "./HeadlineStats.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function HeadlineStats(props) {
  const description = props.weatherData.description;
  const icon = {
    Clear: Icons.faSun,
    Clouds: Icons.faCloudSun,
    Drizzle: Icons.faCloudRain,
    Rain: Icons.faCloudShowersHeavy,
    Thunderstorm: Icons.faBolt,
    Snow: Icons.faSnowflake,
    Mist: Icons.faStream,
  };

  if (props.ready) {
    return (
      <div className="HeadlineStats">
        <h2 className="city-header">{props.weatherData.city}</h2>
        <div className="headline-weather-icon icon">
          <FontAwesomeIcon
            icon={icon[description] || Icons.faStream}
            title={props.weatherData.description}
          />
        </div>
        <div className="headline-temperature">
          <span className="temp-num">{props.weatherData.temp}</span>
          {props.tempUnit}
        </div>
        <div className="row extra-stats">
          <div className="col"></div>
          <div className="col">
            <p className="p-wind">
              Wind speed:
              <br />
              <span>{props.weatherData.wind}</span>
              {props.windUnit}
            </p>
          </div>
          <div className="col">
            <p className="p-humidity">
              Humidity:
              <br />
              <span>{props.weatherData.humidity}</span>%
            </p>
          </div>
          <div className="col"></div>
        </div>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
}
