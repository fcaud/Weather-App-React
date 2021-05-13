import React from "react";
import "./Forecast.css";
import ForecasDay from "./ForecastDay";

export default function Forecast() {
  return (
    <div className="row Forecast">
      <ForecasDay day="Mon" dayX={1} />
      <ForecasDay day="Tue" dayX={2} />
      <ForecasDay day="Wed" dayX={3} />
      <ForecasDay day="Thu" dayX={4} />
      <ForecasDay day="Fri" dayX={5} />
    </div>
  );
}
