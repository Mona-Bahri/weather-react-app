import React from "react";
import Weathericon from "./Weathericon";

export default function Forcastdata(props) {
  function maxTemperature() {
    let maxtemp = props.data.temp.max;
    let temp = Math.round(maxtemp);
    return temp;
  }
  function minTemperature() {
    let mintemp = props.data.temp.min;
    let temp = Math.round(mintemp);
    return temp;
  }
  function daysForcast() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return days[day];
  }
  return (
    <div className="mt-4 mb-2">
      <div className="days-card">
        <div className="title">{daysForcast()}</div>
        <div className="days-weather-icon">
          <Weathericon code={props.data.weather[0].icon} />
        </div>
        <div className="max-min">
          <span className="max-temp">{maxTemperature()}</span> |
          <span className="min-temp">{minTemperature()}</span>
        </div>
      </div>
    </div>
  );
}
