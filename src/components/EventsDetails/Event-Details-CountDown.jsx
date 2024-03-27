'use client';
import { useEffect, useState } from "react";

const toDate = (time) => {
    const year = parseInt(time.substring(0, 4));
    const month = parseInt(time.substring(5, 7));
    const day = parseInt(time.substring(8));
    
    // for some reason month is 0 indexed
    return new Date(year, month - 1, day).getTime();
}

const TimeElement = ({text, data}) => {
    return (
        <div className="flex flex-col p-10 my-4 border-l-4">
            <p>{data}</p>
            <p>{text}</p>
        </div>
    )
}

const CountDown = ({ deadLine, start, end }) => {
    const [distance, setDistance] = useState(toDate(end) - Date.now());

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    useEffect(() => {
        const interval = setInterval(() => {
            setDistance(toDate(end) - Date.now());
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="m-10 text-center">
                Registration Ends in {(new Date(toDate(deadLine))).toString()}
            </div>
            <div className="flex flex-auto justify-center border-4 mx-4 my-10 text-2xl text-center rounded-3xl">
                <div className="flex flex-col p-10 my-4">
                    <p>Starts</p>
                    <p>In</p>
                </div>
                <TimeElement text={"Days"} data={days} />
                <TimeElement text={"Hours"} data={hours} />
                <TimeElement text={"Minutes"} data={minutes} />
                <TimeElement text={"Seconds"} data={seconds} />
                <button className="bg-[#EFC95C] my-10 rounded-2xl p-2 text-black">Register</button>
            </div>
        </>
    )
}

export default CountDown;