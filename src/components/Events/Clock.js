import React, { useState, useEffect } from 'react';

const Clock = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    return {
      days: Math.floor(t / (1000 * 60 * 60 * 24)),
      hours: Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((t / 1000 / 60) % 60),
      seconds: Math.floor((t / 1000) % 60),
    };
  }

  return (
    <div className="clock">
      <div className="clock-item">
        <span className="clock-value font-bold md:text-lg text-md">{timeRemaining.days}</span>
        <span className="clock-label">Days</span>
      </div>
      <div className="clock-item ">
        <span className="clock-value font-bold md:text-lg text-md">{timeRemaining.hours}</span>
        <span className="clock-label">Hours</span>
      </div>
      <div className="clock-item ">
        <span className="clock-value font-bold md:text-lg text-md">{timeRemaining.minutes}</span>
        <span className="clock-label">Minutes</span>
      </div>
      <div className="clock-item ">
        <span className="clock-value font-bold md:text-lg text-md">{timeRemaining.seconds}</span>
        <span className="clock-label">Seconds</span>
      </div>
    </div>
  );
};

export default Clock;
