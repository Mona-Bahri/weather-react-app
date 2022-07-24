import React from "react";

export default function Localtime(props) {
  let day = props.date.getDay();
  return (
    <div className="local-time">
      <div>{day}</div>
      <div> 14:23</div>
    </div>
  );
}
