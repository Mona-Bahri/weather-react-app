import React, { useState } from "react";
import axios from "axios";
import Localtime from "./Localtime";

export default function Cityforcast(props) {
  const [forcastData, setForcastData] = useState({ ready: false });

  function fetchData(response) {
    setForcastData({
      ready: true,
      temp: response.data.main.temp,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (forcastData.ready) {
    return (
      <div className="container weatherForcast">
        <div>
          <Localtime date={forcastData.date} />
        </div>
        <div className="nav-bar">
          <form className="searchForm">
            <input
              id="searchBar"
              className="search"
              type="text"
              autoFocus="on"
              placeholder="Search for a city.."
            />
            <button type="submit" className="btn btn-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
        </div>
        <div className="container weatherForcast">
          <div className="city-name" id="cityName">
            {props.city}
          </div>
          <div className="weather-icon">
            <img src="#" alt="Weather icon" />
          </div>
          <div className="de-wrapper">
            <div id="temperature">
              {Math.round(forcastData.temp)}°<span>C</span>
            </div>
            <div id="weather-description">{forcastData.description}</div>
          </div>
          <div className="description-wrapper mt-5 ">
            <div id="humidity ">
              {" "}
              <span>humidity:</span> {forcastData.humidity}%
            </div>
            <div id="wind-speed">
              <span>Wind:</span> {Math.round(forcastData.windSpeed)} km/h
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f689afd608a64a3da1aad63660857454";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(fetchData);
    return "Loading...";
  }
}
