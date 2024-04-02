/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from 'react';

function Timer({ deadline }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = Date.now();
      const timeRemaining = deadline - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        clearInterval(timerId); // Stop timer if deadline has passed
      }
    }, 1000);

    return () => clearInterval(timerId); // Cleanup function to stop timer on unmount
  }, [deadline]);

  const getTimeString = (value, unit) => {
    return value.toString().padStart(2, '0') + unit;
  };

  return (
    <section className='flex md:gap-2 justify-center items-center my-6 bg-stone-800 bg-opacity-20 backdrop-blur font-bold px-8 min-w-fit mx-1 py-2 rounded-lg'>
        <img src="timer.svg" className='h-16 invert' alt="timer_design" />
      <span>
      <h1 className='text-center text-[#F1DC90] font-serif text-lg'>Remaining Time</h1>
      <div className='text-sm md:text-xl flex p-2'>
        {days > 0 && <span className='flex flex-col items-center p-2'>{getTimeString(days, ':')} <div className='text-xs md:text-sm text-gray-500'>Days</div></span>}
        {hours > 0 && <span className='flex flex-col items-center p-2'>{getTimeString(hours, ':')}  <div className='text-xs md:text-sm text-gray-500'>Hrs</div></span>}
        <span className='flex flex-col items-center p-2'>{getTimeString(minutes, ':')}  <div className='text-xs md:text-sm text-gray-500'>Min</div></span>
        <span className='flex flex-col items-center p-2'>{getTimeString(seconds, '')}  <div className='text-xs md:text-sm text-gray-500'>Sec</div></span>
      </div>
      </span>
        <img src="timer.svg" className='h-16 invert' alt="timer_design" />
    </section>
  );
}

export default Timer;
