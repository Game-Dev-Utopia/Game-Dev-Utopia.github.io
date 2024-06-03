"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Tag from "@/utilities/Icons/Tag.svg";
import { FaTrophy } from "react-icons/fa";

const DisplayRank = ({ rank }) => {
  var color = "";
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
      className={`absolute ${color} text-[400%] w-[6%] lg:w-[4%] h-auto z-20 absolute rounded-[10%] left-[10%] bottom-[44%]  lg:bottom-[43%] -translate-x-1/2 translate-y-1/2`}
    />
  );
};

const AchievementImages = ({ data }) => {
  const [imageSrc, setImageSrc] = useState(`/images/achievements/${data.title}.jpg`);
    const handleImageError = () => {
        setImageSrc('/images/achievements/demo.jpg');
    };
  return (
    <div
      className={`flex-col flex sm:flex-row items-center sm:justify-center p-5 w-full`}
    >
      {/* { data.image.map((img, i) => <Image width={100} height={100} src={img} alt={i} className='sm:mx-5 mx-auto rounded-md aspect-square m-3' key={i}/>) } */}
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
  // Ensure that dateObject is a Date object
  if (!(dateObject instanceof Date)) {
    dateObject = new Date(dateObject);
  }

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1; // Adding 1 to month because it's zero-based
  const year = dateObject.getFullYear();

  // Pad single-digit day and month with leading zeros if necessary
  const paddedDay = day < 10 ? "0" + day : day;
  const paddedMonth = month < 10 ? "0" + month : month;

  // Forming the date string in the format: date-month-year
  const formattedDate = `${paddedDay}-${paddedMonth}-${year}`;
  return formattedDate;
};


const TimelineCard = ({ data, scrollCurrent, index }) => {
  return (
    <div className={`List-Achievement transition-all duration-1000`}>
      <Image
        alt="Tag"
        src={Tag}
        width="300"
        height="300"
        className="w-[13%] sm:w-[10%] lg:w-[7%]  rotate-45 h-auto z-20 absolute rounded-[10%] left-[10%] scale-150 bottom-[45%] -translate-x-1/2 translate-y-1/2"
      />
      {data.ranked ? <DisplayRank rank={data.rank} /> : <div />}
      <p className="text-center List-Achievement-time text-sm md:text-lg rounded-[1rem] px-3 ">
        {data.date && getDate(data.date)}
      </p>
      <div className="List-Achievement-detail text-[3vw] md:text-[0.9vw]">
        <div className="List-Achievement-detail-container">
          <div className="List-Achievement-detail-inner"></div>
          <AchievementImages data={data} />
          <h1 className="text-center text-xl lg:text-2xl">
            <b>{data.title}</b>
          </h1>
          <ul className="List-Achievement-details text-lg lg:text-lg list-none text-center p-2 scroll overflow-y-scroll max-h-[200px]">
            {/* { data.description.map((detail, i) => <li key={i}>{detail}</li>) } */}
            <li>{data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
