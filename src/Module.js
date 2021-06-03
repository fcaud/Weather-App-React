import React, { useState, useEffect } from "react";
import "./Module.css";
import Forecast from "./Forecast";
import HeadlineStats from "./HeadlineStats";
import Placeholder from "./Placeholder";
import Search from "./Search";
import axios from "axios";

export default function Module(props) {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.city);
  const [tempUnit, setTempUnit] = useState("°C");
  const [windUnit, setWindUnit] = useState("kmh");
  const [unit, setUnit] = useState("metric");

  function runAPI(city, unit) {
    if (city) {
      const apiKey = "a853abb2375faaf0d512fcc19dee1229";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

      axios.get(apiUrl).then(getWeather);

      if (unit === "metric") {
        setTempUnit("°C");
        setWindUnit("kmh");
        setUnit("metric");
      } else {
        setTempUnit("°F");
        setWindUnit("mph");
        setUnit("imperial");
      }
    }
  }

  useEffect(() => {
    runAPI(props.city, "metric");
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      coordinates: data.coord,
    });
    props.updateDate(timestamp);

    callForecastAPI(data.coord);

    setReady(true);
  }

  function callForecastAPI(coordinates) {
    const apiKey = "a853abb2375faaf0d512fcc19dee1229";
    const longitude = coordinates.lon;
    const latitude = coordinates.lat;

    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleForecastAPI);
  }

  function handleForecastAPI(response) {
    setForecastData({ dailyData: response.data.daily });
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
        <Forecast forecastData={forecastData} />
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
