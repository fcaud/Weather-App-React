import axios from "axios";
import React from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  console.log(props.forecastData);

  // pass data to each ForecastDay
  // work out how to pass current day to Forecast days
  return (
    <div className="row Forecast">
      <ForecastDay day="Mon" dayX={1} />
      <ForecastDay day="Tue" dayX={2} />
      <ForecastDay day="Wed" dayX={3} />
      <ForecastDay day="Thu" dayX={4} />
      <ForecastDay day="Fri" dayX={5} />
    </div>
  );
}
