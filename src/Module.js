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

      axios.get(apiUrl).then((response) => {getWeather(response, unit)});

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

  function getWeather(response, unit) {
    const data = response.data;
    const timestamp = new Date(data.dt * 1000);

    console.log(unit)

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

    callForecastAPI(data.coord, unit);

    setReady(true);
    setCity(data.name)
  }

  function callForecastAPI(coordinates, unit) {
    const apiKey = "a853abb2375faaf0d512fcc19dee1229";
    const longitude = coordinates.lon;
    const latitude = coordinates.lat;

    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleForecastAPI);
  }

  function handleForecastAPI(response) {
    setForecastData({ dailyData: response.data.daily });
  }

  function getLocation(unit) {
    navigator.geolocation.getCurrentPosition(function (position) {
      searchCurrentLocation(position, unit);
    });
  }

  function searchCurrentLocation(position, unit) {
    let coords = position.coords;
    let latitude = coords.latitude;
    let longitude = coords.longitude;

    let weatherApiKey = `a853abb2375faaf0d512fcc19dee1229`;
    let weatherCoordsApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=${unit}`;

    axios.get(weatherCoordsApiUrl).then(function (response, unit) {
      getWeather(response, unit);
    }); 
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
          currentLocationButton={(isToggledValue) => {
            if (isToggledValue) {
              getLocation("imperial");
            } else {getLocation("metric")}
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
        <Forecast forecastData={forecastData} unit={unit} />
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
