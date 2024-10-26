/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { FaPlay, FaShare, FaComment } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import Image from "next/image";

const Games = ({ gameData }) => {
  const genre = ["action", "adventure", "indie"];
  const [itemIndex, setItemIndex] = useState(0);
  const [data, setData] = useState({
    likes: 100,
    comments: 100,
    shares: 90,
    downloads: 90,
  });

  const handleLike = () => {
    setData((prev) => ({ ...prev, likes: prev.likes + 1 }));
  };

  return (
    <div
      className="relative mx-2 px-3 py-5 rounded-lg bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/images/games_section_bg_illustration.jpg')",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between gap-4 bg-black bg-opacity-90 p-6 rounded-lg">
        {/* Thumbnail and Buttons */}
        <div className="flex flex-col items-center text-white w-full md:w-1/3 space-y-4">
          <Image
            width={250}
            height={100}
            src={gameData.thumbnail}
            alt="Game Thumbnail"
            className="rounded-t-lg"
          />
          <p className="text-lg font-semibold">{gameData.title}</p>
          <div className="flex gap-2 my-2 items-center">
            <button className="px-2 py-1 flex items-center gap-1 bg-gray-800 rounded-md hover:bg-gray-700 duration-200 transition">
              <FaPlay />
              <span>Play</span>
            </button>
            <button className="px-2 py-1 flex items-center gap-1 bg-gray-800 rounded-md hover:bg-gray-700 duration-200 transition">
              <FaShare />
              <span>{data.shares}</span>
            </button>
            <a href={gameData.download_url} target="_blank">
              <button className="px-2 py-1 flex items-center gap-1 bg-gray-800 rounded-md hover:bg-gray-700 duration-200 transition">
                <IoMdDownload />
                <span>{data.downloads}</span>
              </button>
            </a>
            <button
              onClick={handleLike}
              className="px-2 py-1 flex items-center gap-1 bg-gray-800 rounded-md hover:bg-gray-700 duration-200 transition"
            >
              <AiFillLike />
              <span>{data.likes}</span>
            </button>
            <button className="px-2 py-1 flex items-center gap-1 bg-gray-800 rounded-md hover:bg-gray-700 duration-200 transition">
              <FaComment />
              <span>{data.comments}</span>
            </button>
          </div>
          <div className="flex gap-2">
            {genre.map((item) => (
              <span
                key={item}
                className="px-2 py-1 text-xs rounded-full bg-gray-900 border border-yellow-700 text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Video Card */}
        <div className="flex justify-center items-center w-full md:w-2/3 border-l border-gray-500">
          <iframe
            className="w-full h-[300px] md:h-[400px] rounded-lg"
            src={gameData.media[itemIndex]}
            title="Game Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Carousel */}
        <div className="flex md:flex-col overflow-x-auto gap-4 px-6 py-4">
          {gameData.media.map((media, index) => (
            <div
              key={index}
              onMouseOver={() => setItemIndex(index)}
              className="cursor-pointer flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-transparent hover:border-purple-500 transition duration-300"
            >
              <Image
                src="/images/image-4.png"
                alt={`Carousel Thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
