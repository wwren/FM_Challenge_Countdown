import React, { useEffect, useState } from "react";
import "./Clock.css";
import { timeLeft } from "./Timer";
import DateTimeCard from "./DateTimeCard";
function Clock() {
  const [time, settime] = useState(undefined);

  useEffect(() => {
    const intervalID = setInterval(() => {
      let distance = timeLeft();
      console.log("distance", distance);
      settime(distance);
      console.log("time", time);
    }, 1000);
    return () => clearInterval(intervalID);
  });

  return (
    <div className="clock__wrapper">
      <h3 className="text">we're launching soon</h3>
      <div className="dateTime__list">
        {time && (
          <>
            <DateTimeCard time={time.day} dateTime="days" />
            <DateTimeCard time={time.hours} dateTime="hours" />
            <DateTimeCard time={time.min} dateTime="minutes" />
            <DateTimeCard time={time.seconds} dateTime="seconds" />
          </>
        )}
      </div>
    </div>
  );
}

export default Clock;
