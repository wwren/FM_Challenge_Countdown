import React from "react";
import "./DateTimeCard.css";

function DateTimeCard({ time, dateTime }) {
  return (
    <div className="card___wrapper">
      <div className="card" data-before-content={time}></div>
      <p className="text-description">{dateTime}</p>
    </div>
  );
}

export default DateTimeCard;
