import React, { useState } from "react";
import axios from "axios";
import Localtime from "./Localtime";
import Weatherinfo from "./Weatherinfo";

export default function Cityforcast(props) {
  const [forcastData, setForcastData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);
  function fetchData(response) {
    setForcastData({
      ready: true,
      temp: response.data.main.temp,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      cityName: response.data.name,
      iconUrl: response,
    });
  }
  function search() {
    let apiKey = "f689afd608a64a3da1aad63660857454";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(fetchData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handelValue(event) {
    setCity(event.target.value);
  }

  if (forcastData.ready) {
    return (
      <div className="container weatherForcast">
        <div>
          <Localtime date={forcastData.date} />
        </div>
        <div className="nav-bar">
          <form className="searchForm" onSubmit={handleSubmit}>
            <input
              id="searchBar"
              className="search"
              type="text"
              autoFocus="on"
              placeholder="Search for a city.."
              onChange={handelValue}
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
        <Weatherinfo data={forcastData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
