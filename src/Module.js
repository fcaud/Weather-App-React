import React from "react";
import "./Module.css";
import Forecast from "./Forecast";
import HeadlineStats from "./HeadlineStats";
import Placeholder from "./Placeholder";
import Search from "./Search";

export default function Module(props) {
  let tempStatus = props.tempStatus;
  if (props.moduleID === "liveModule") {
    return (
      <section className={`Module ${tempStatus}`}>
        <Search tempStatus={tempStatus} />
        <HeadlineStats city={props.city} temp={props.temp} />
        <Forecast />
      </section>
    );
  } else {
    return (
      <section className="Module">
        <Search />
        <Placeholder />
      </section>
    );
  }
}
