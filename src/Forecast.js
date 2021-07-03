import React from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let forecastData = props.forecastData.dailyData;

  if (forecastData) {
    return (
      <div className="row Forecast">
        {forecastData.slice(0, 5).map((data, index) => {
          return <ForecastDay data={data} unit={props.unit} key={index} />;
        })}
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
