// move axios to module

import React, { useState, useEffect } from "react";
import "./HeadlineStats.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function HeadlineStats(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function runAPI() {
    const apiKey = "a853abb2375faaf0d512fcc19dee1229";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(getWeather);
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

  if (ready) {
    return (
      <div className="HeadlineStats">
        <h2 className="city-header">{weatherData.city}</h2>
        <div className="headline-weather-icon icon">
          <FontAwesomeIcon icon={Icons.faCloudSun} />
        </div>
        <div className="headline-temperature">
          <span className="temp-num">{weatherData.temp}</span>°C
        </div>
        <div className="row extra-stats">
          <div className="col"></div>
          <div className="col">
            <p className="p-wind">
              Wind speed:
              <br />
              <span>{weatherData.wind}</span>kmh
            </p>
          </div>
          <div className="col">
            <p className="p-humidity">
              Humidity:
              <br />
              <span>{weatherData.humidity}</span>%
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
