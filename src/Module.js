import React, { useState, useEffect } from "react";
import "./Module.css";
import Forecast from "./Forecast";
import HeadlineStats from "./HeadlineStats";
import Placeholder from "./Placeholder";
import Search from "./Search";
import axios from "axios";

export default function Module(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);

  function runAPI() {
    if (props.city) {
      const apiKey = "a853abb2375faaf0d512fcc19dee1229";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(getWeather);
    }
  }

  useEffect(() => {
    runAPI();
  }, []);

  function getWeather(response) {
    console.log(response.data);
    const data = response.data;
    const timestamp = new Date(data.dt * 1000);
    setWeatherData({
      city: data.name,
      temp: Math.round(data.main.temp),
      wind: Math.round(data.wind.speed),
      humidity: Math.round(data.main.humidity),
      description: data.weather[0].main,
      fullDescription: data.weather[0].description,
      timeStamp: timestamp,
    });
    props.updateDate(timestamp);

    setReady(true);
  }

  let tempStatus = props.tempStatus;
  if (props.moduleID === "liveModule") {
    return (
      <section className={`Module ${tempStatus}`}>
        <Search
          tempStatus={tempStatus}
          searchTrigger={(event, searchValue) => {
            event.preventDefault();
            console.log(event, searchValue);
          }}
        />
        <HeadlineStats
          city={props.city}
          temp={props.temp}
          weatherData={weatherData}
          ready={ready}
        />
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
