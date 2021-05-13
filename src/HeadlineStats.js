import React from "react";
import "./HeadlineStats.css";

export default function HeadlineStats(props) {
  return (
    <div className="HeadlineStats">
      <h2 className="city-header">{props.city}</h2>
      <div className="headline-weather-icon icon">
        <i className="fas fa-cloud-sun"></i>
      </div>
      <div className="headline-temperature">
        <span className="temp-num">{props.temp}</span>°C
      </div>
      <div className="row extra-stats">
        <div className="col"></div>
        <div className="col">
          <p className="p-wind">
            Wind speed:
            <br />
            <span>20</span>kmh
          </p>
        </div>
        <div className="col">
          <p className="p-humidity">
            Humidity:
            <br />
            <span>8</span>%
          </p>
        </div>
        <div className="col"></div>
      </div>
      <hr />
    </div>
  );
}
