import React from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  if (props.forecastData.dailyData) {
    return (
      <div className="row Forecast">
        <ForecastDay data={props.forecastData.dailyData[0]} unit={props.unit} />
        <ForecastDay data={props.forecastData.dailyData[1]} unit={props.unit} />
        <ForecastDay data={props.forecastData.dailyData[2]} unit={props.unit} />
        <ForecastDay data={props.forecastData.dailyData[3]} unit={props.unit} />
        <ForecastDay data={props.forecastData.dailyData[4]} unit={props.unit} />
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
