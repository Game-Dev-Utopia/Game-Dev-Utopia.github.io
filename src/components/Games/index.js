/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import "./index.css";
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
    downloads: 90
  });

  const handleLike = () => {
    setData(prev => ({ ...prev, likes: prev.likes + 1 }));
  };
  console.log(gameData);
  return (
    <>
      <div className="mx-2 px-3 py-[20px] rounded-2xl bg-gradient-to-tr from-[#000] to-[#000] game-section-top">
        <div className="video-game-wrapper bg-gradient">
          <div className="thumbnail-container px-6 py-[20px]">
            <div className="thumbnail">
              <Image width={250} height={100} src={gameData.thumbnail} alt="Game Thumbnail" />
            </div>
            <p className="py-6 text-white">
              {gameData.title}
            </p>
            <div className="buttons flex gap-2 my-2">
              <button className="p-3 group bg-grad-hover gap-1 text-sm">
                <FaPlay />
                <span className="tooltip group-hover:scale-100">
                  <p>Play</p>
                </span>
              </button>
              <button className="py-2 group bg-grad-hover gap-1 flex items-center text-sm">
                <FaShare />
                <span>{data.shares}</span>
                <span className="tooltip group-hover:scale-100">
                  <p>Share</p>
                </span>
              </button>
              <a href={gameData.download_url} target="_blank">
                <button className="py-2 group bg-grad-hover gap-1 items-center text-sm flex">
                  <IoMdDownload />
                  <span>{data.downloads}</span>
                  <span className="tooltip group-hover:scale-100">
                    <p>Download</p>
                  </span>
                </button>
              </a>
              <button className="py-2 flex items-center group bg-grad-hover text-sm" onClick={handleLike}>
                <AiFillLike />
                <span>{data.likes}</span>
                <span className="tooltip group-hover:scale-100">
                  <p>Like</p>
                </span>
              </button>

              <button className="py-2 flex items-center group bg-grad-hover gap-1 text-sm">
                <FaComment />
                <span>{data.comments}</span>
                <span className="tooltip group-hover:scale-100">
                  <p>Comment</p>
                </span>
              </button>
            </div>
            <div className="flex gap-2 relative top-3">
              {genre.map((item) => (
                <span key={item} className="border-yellow-700 border-2 py-1 rounded-full bg-slate-900 text-gray-300 text-xs px-2">{item}</span>))}
            </div>
          </div>

          <div className="video-card px-6 py-[20px] h-full border-l-2 border-slate-300 border-opacity-20">
            <iframe height='400' width="600" src={gameData.media[itemIndex]}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}></iframe>
            <span><p className="pt-7 px-2 text-white">{ }</p></span>
          </div>

          <div className="carousel-container px-6 py-[20px]">
            <div className="carousel-wrapper">
              <div className="g-carousel">
                {gameData.media.map((media, index) => (
                  <div key={index} className="carousel-item" onMouseOver={() => setItemIndex(index)}>
                    <Image fill={true} src={'/images/image-4.png'} alt="Image 1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Games;
