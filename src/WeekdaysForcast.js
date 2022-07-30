import axios from "axios";
import React, { useState, useEffect } from "react";
import Forcastdata from "./Forcastdata";

export default function WeekdaysForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcastData, setForcastData] = useState(null);
  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  function displayData(response) {
    setForcastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row">
        {forcastData.map(function (dailyForcast, index) {
          if (index < 4) {
            return (
              <div className="col" key={index}>
                <Forcastdata data={dailyForcast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    const apiKey = "2d0271702a5c12ccb610ae9f48878fd2";
    let latitude = props.data.coordinates.lat;
    let longitude = props.data.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayData);
    return null;
  }
}
