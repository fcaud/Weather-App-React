import React from "react";
import "./HeadlineStats.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function HeadlineStats(props) {
  if (props.ready) {
    return (
      <div className="HeadlineStats">
        <h2 className="city-header">{props.weatherData.city}</h2>
        <div className="headline-weather-icon icon">
          <FontAwesomeIcon icon={Icons.faCloudSun} />
        </div>
        <div className="headline-temperature">
          <span className="temp-num">{props.weatherData.temp}</span>°C
        </div>
        <div className="row extra-stats">
          <div className="col"></div>
          <div className="col">
            <p className="p-wind">
              Wind speed:
              <br />
              <span>{props.weatherData.wind}</span>kmh
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
