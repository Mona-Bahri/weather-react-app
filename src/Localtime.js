import React from "react";

export default function Localtime(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursdays",
    "Fridays",
    "Saturdays",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="local-time">
      <div>{day}</div>
      <div>
        {hours}:{minutes}
      </div>
    </div>
  );
}
