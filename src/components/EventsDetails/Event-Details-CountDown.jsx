'use client';
import { useEffect, useState } from "react";

const toDate = (time) => {
    const year = parseInt(time.substring(0, 4));
    const month = parseInt(time.substring(5, 7));
    const day = parseInt(time.substring(8));

    // for some reason month is 0 indexed
    return new Date(year, month - 1, day).getTime();
}

const TimeElement = ({ text, data }) => {
    return (
        <div className="flex flex-col sm:w-[10vw] w-[30vw] py-[3%] px-[2%] border-l-2 first:border-l-0">
            <p>{data}</p>
            <p>{text}</p>
        </div>
    )
}

const CountDown = ({ deadLine, start, end, openRegisterPage }) => {
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
                Registration Ends on {(new Date(toDate(deadLine))).toString()}
            </div>
            <p className="text-center text-xl pb-[1%]">Event starts in</p>
            <div className="flex flex-auto justify-center border-2 border-cyan-500 w-[90%] mx-[5%] sm:text-2xl text-lg text-center rounded-tr-xl rounded-bl-xl rounded-tl-3xl rounded-br-3xl">
                <TimeElement text={"Days"} data={days} />
                <TimeElement text={"Hours"} data={hours} />
                <TimeElement text={"Minutes"} data={minutes} />
                <TimeElement text={"Seconds"} data={seconds} />
            </div>
            <button onClick={() => openRegisterPage()} className="bg-cyan-500 my-10 rounded-2xl p-2 text-black w-[90vw] mx-[5vw] sm:w-[90%] sm:mx-[5%] sm:text-2xl">Register Here</button>
        </>
    )
}

export default CountDown;
