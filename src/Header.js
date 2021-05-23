import React, { useState } from "react";
import "./Header.css";

export default function Header(props) {
  const [dateStamp, setDateStamp] = useState();

  function formatDate(unformattedDate) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = days[unformattedDate.getDay()];
    const month = months[unformattedDate.getMonth()];
    const date = unformattedDate.getDate();
    let hour = unformattedDate.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let min = unformattedDate.getMinutes();
    if (min < 10) {
      min = `0${min}`;
    }

    setDateStamp(`${day} ${date} ${month} ${hour}:${min} `);
  }

  if (!props.date) {
    return <div> loading...</div>;
  } else if (!dateStamp) {
    formatDate(props.date);
  }

  return (
    <header className="Header">
      <h1>Weather App</h1>
      <p id="date-stamp">{dateStamp}</p>
    </header>
  );
}
