"use client";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";
import Tag from "@/utilities/Icons/Tag.svg";
import { useState } from "react";

const DisplayRank = ({ rank }) => {
  let color = "";
  switch (rank) {
    case 1:
      color = "text-yellow-500";
      break;
    case 2:
      color = "text-gray-200";
      break;
    case 3:
      color = "text-orange-400";
      break;
  }

  return (
    <FaTrophy
      className={`absolute ${color} text-[400%] w-[6%] lg:w-[4%] h-auto z-20 absolute rounded-[10%] left-[10%] bottom-[44%] lg:bottom-[43%] -translate-x-1/2 translate-y-1/2`}
    />
  );
};

const AchievementImages = ({ data }) => {
  const [imageSrc, setImageSrc] = useState(
    `/images/achievements/${data.title}.jpg`
  );
  const handleImageError = () => {
    setImageSrc("/images/achievements/demo.jpg");
  };

  return (
    <div className="flex-col flex sm:flex-row items-center sm:justify-center p-5 w-full">
      <Image
        width={100}
        height={100}
        src={imageSrc}
        className="sm:mx-5 mx-auto rounded-md aspect-square m-3"
        onError={handleImageError}
      />
    </div>
  );
};

const getDate = (dateObject) => {
  if (!(dateObject instanceof Date)) {
    dateObject = new Date(dateObject);
  }
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  const paddedDay = day < 10 ? "0" + day : day;
  const paddedMonth = month < 10 ? "0" + month : month;

  return `${paddedDay}-${paddedMonth}-${year}`;
};

const TimelineCard = ({ data }) => {
  return (
    <div className="relative mt-5 transition-all duration-1000 before:content-[''] before:absolute before:left-[9.5%] before:translate-x-[50%] before:h-[110%] before:w-[7px] before:bg-[theme(backgroundColor.cyan.800)]">
      <Image
        alt="Tag"
        src={Tag}
        width="300"
        height="300"
        className="absolute w-[13%] sm:w-[10%] lg:w-[7%] rotate-45 h-auto z-20 rounded-[10%] left-[10%] scale-150 bottom-[45%] -translate-x-1/2 translate-y-1/2"
      />
      {data.ranked ? <DisplayRank rank={data.rank} /> : null}

      <p className="text-center text-sm md:text-lg rounded-lg px-3">
        {data.date && getDate(data.date)}
      </p>

      <div className="relative mt-4 w-[70.5%] ml-[20%] z-0 rounded-2xl shadow-[0px_2px_5px_rgb(6_182_212)] bg-gradient-to-r from-gray-800 to-cyan-500">
        <div className="p-4 rounded-2xl bg-slate-800 text-white">
          <AchievementImages data={data} />
          <h1 className="text-center text-xl lg:text-2xl font-bold">
            {data.title}
          </h1>
          <ul className="text-lg lg:text-lg list-none text-center p-2 max-h-[200px] overflow-y-scroll scroll">
            <li>{data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
