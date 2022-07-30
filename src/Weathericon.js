import React from "react";
import "./App.css";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import { WiNightClear } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiNightAltCloudy } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiDayShowers } from "react-icons/wi";
import { WiNightAltShowers } from "react-icons/wi";
import { WiDayRain } from "react-icons/wi";
import { WiNightAltRain } from "react-icons/wi";
import { WiDayStormShowers } from "react-icons/wi";
import { WiNightSleetStorm } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiDayFog } from "react-icons/wi";
import { WiNightFog } from "react-icons/wi";

export default function Weathericon(props) {
  const iconMapping = {
    "01d": <WiDaySunny />,
    "01n": <WiNightClear />,
    "02d": <WiDayCloudy />,
    "02n": <WiNightAltCloudy />,
    "03d": <WiCloud />,
    "03n": <WiCloud />,
    "04d": <WiCloudy />,
    "04n": <WiCloudy />,
    "09d": <WiDayShowers />,
    "09n": <WiNightAltShowers />,
    "10d": <WiDayRain />,
    "10n": <WiNightAltRain />,
    "11d": <WiDayStormShowers />,
    "11n": <WiNightSleetStorm />,
    "13d": <WiSnow />,
    "13n": <WiSnow />,
    "50d": <WiDayFog />,
    "50n": <WiNightFog />,
  };
  return (
    <IconContext.Provider value={{ className: "weather-icon", color: "white" }}>
      <p>{iconMapping[props.code]}</p>
    </IconContext.Provider>
  );
}
