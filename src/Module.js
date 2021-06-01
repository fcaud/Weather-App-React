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
  const [city, setCity] = useState(props.city);
  const [tempUnit, setTempUnit] = useState("°C");
  const [windUnit, setWindUnit] = useState("kmh");

  function runAPI(city, unit) {
    if (city) {
      const apiKey = "a853abb2375faaf0d512fcc19dee1229";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

      axios.get(apiUrl).then(getWeather);

      if (unit === "metric") {
        setTempUnit("°C");
        setWindUnit("kmh");
      } else {
        setTempUnit("°F");
        setWindUnit("mph");
      }
    }
  }

  useEffect(() => {
    runAPI(props.city, "metric");
  }, []);

  function getWeather(response) {
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
          searchTrigger={(searchValue, isToggledValue) => {
            if (isToggledValue) {
              runAPI(searchValue, "imperial");
            } else {
              runAPI(searchValue, "metric");
            }
            setCity(searchValue);
          }}
          tempToggle={(isToggledValue) => {
            if (isToggledValue) {
              runAPI(city, "imperial");
            } else {
              runAPI(city, "metric");
            }
          }}
        />
        <HeadlineStats
          weatherData={weatherData}
          ready={ready}
          tempUnit={tempUnit}
          windUnit={windUnit}
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
