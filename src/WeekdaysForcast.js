import axios from "axios";
import React from "react";
import Weathericon from "./Weathericon";

export default function WeekdaysForcast(props) {
  function displayData(response) {
    console.log(response.data);
  }
  const apiKey = "2d0271702a5c12ccb610ae9f48878fd2";
  let latitude = props.data.coordinates.lat;
  let longitude = props.data.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayData);
  return (
    <div className="row">
      <div className="col">
        <div className="mt-4 mb-2">
          <div className="days-card">
            <div className="title">sunday</div>
            <div className="days-weather-icon">
              <Weathericon code="50d" />
            </div>
            <div className="max-min">
              <span className="max-temp">20</span> |
              <span className="min-temp">18</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
