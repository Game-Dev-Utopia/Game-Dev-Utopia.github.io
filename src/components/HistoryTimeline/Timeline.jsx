"use client";
import TimelineCard from "./TimelineCard";
import { useEffect, useRef, useState } from "react";

const Timeline = ({ datas }) => {
  const ScrollRef = useRef(0);
  const [scrollCurrent, setScrollCurrent] = useState(ScrollRef.current);
  const [scrollLength, setLength] = useState(ScrollRef.current);

  const HandleScroll = () => {
    setScrollCurrent(ScrollRef.current);
    setLength(ScrollRef.current.scrollTop);
  };

  useEffect(() => {
    ScrollRef.current.addEventListener("scroll", HandleScroll);

    return () => {
      if (ScrollRef.current)
        ScrollRef.current.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  console.log(datas);

  return (
    <>
      <h1 className="text-[10vw] sm:text-[8vw] text-center">
        <b>History Timeline</b>
      </h1>
      <p className="text-center text-2xl my-20 mx-auto">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim
        labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem
        ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
        sint consectetur cupidatat.
      </p>
      <div
        ref={ScrollRef}
        className="Scroll no-scrollbar h-[90vh] overflow-y-scroll overflow-x-hidden transition-all rounded-[2rem] md:rounded-[5rem] border-2 mx-[0.5vw]"
      >
        <div className="Timeline">
          <br />
          <br />
          {datas &&
            datas.map((data, i) => (
              <TimelineCard
                key={i}
                data={data}
                index={i}
                scrollCurrent={scrollCurrent}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
