import React from "react";
import Weathericon from "./Weathericon";

export default function Weatherinfo(props) {
  return (
    <div className="container weatherForcast">
      <div className="city-name" id="cityName">
        {props.data.cityName}
      </div>
      <div className="weather-icon">
        <Weathericon code={props.data.icon} />
      </div>
      <div className="de-wrapper">
        <div id="temperature">
          {Math.round(props.data.temp)}°<span>C</span>
        </div>
        <div id="weather-description">{props.data.description}</div>
      </div>
      <div className="description-wrapper mt-5 ">
        <div id="humidity ">
          {" "}
          <span>humidity:</span> {props.data.humidity}%
        </div>
        <div id="wind-speed">
          <span>Wind:</span> {Math.round(props.data.windSpeed)} km/h
        </div>
      </div>
    </div>
  );
}
