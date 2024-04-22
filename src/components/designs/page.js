/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import "./index.css"; 
import { FaPlay,FaShare,FaComment } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";

const Design = () => {
  const genre = ["action","adventure","indie"];
  const [itemIndex, setItemIndex] = useState(0);
  const reactFacts = [
    "ReactJS is a JavaScript library for building user interfaces.",
    "It was developed by Facebook and is now open-source.",
    "ReactJS uses a virtual DOM to improve app performance.",
    "Components are the building blocks in a React application.",
    "ReactJS allows for the creation of reusable UI components.",
    "It uses JSX, a syntax extension for JavaScript.",
    "ReactJS can be used for developing both web and mobile applications.",
    "State and props are used to manage data in React.",
    "ReactJS uses a unidirectional data flow which makes it easier to debug."
  ];
  const [data, setData] = useState({
    likes: 100,
    comments: 100,
    shares: 90,
    downloads: 90
  });

  const handleLike = () => {
    setData(prev=>({...prev,likes:prev.likes+1}));
  };

  return (
    <>
      <div className="mx-2 px-3 py-[20px] rounded-2xl bg-gradient-to-tr from-[#000] to-[#000] design-section-top">
        <div className="video-design-wrapper bg-gradient">
          <div className="des-thumbnail-container px-6 py-[20px]">
            <div className="des-thumbnail">
              <img src={'/images/image-23.png'} alt="Game Thumbnail" />
            </div>
            <p className="py-6 text-white">
              Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it. 
            </p>
            <div className="des-buttons flex gap-2 my-2">
              <button className="p-3 group gap-1 text-sm">
                <FaPlay />
                <span className="tooltip group-hover:scale-100">
                  <p>Play</p>
                </span>
              </button>
              <button className="py-2 group gap-1 flex items-center text-sm">
                <FaShare />
                <span>{data.shares}</span>
                <span className="tooltip group-hover:scale-100">
                  <p>Share</p>
                </span>
              </button>
              <a href="https://chouremalhar.itch.io/dicey-roads" target="_blank">
                <button className="py-2 group gap-1 items-center text-sm flex">
                  <IoMdDownload />
                  <span>{data.downloads}</span>
                  <span className="tooltip group-hover:scale-100">
                    <p>Download</p>
                  </span>
                </button>
              </a>
              <button className="py-2 flex items-center group text-sm" onClick={handleLike}>
                <AiFillLike />
                <span>{data.likes}</span>
                <span className="tooltip group-hover:scale-100">
                  <p>Like</p>
                </span>
              </button>

              <button className="py-2 flex items-center group gap-1 text-sm">
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

          <div className="des-video-card px-6 py-[20px] h-full border-l-2 border-slate-300 border-opacity-20">
            <iframe height='400' width="600" src="https://www.youtube.com/embed/EBYCOAgWhtw" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen={true}></iframe>
            <span><p className="pt-7 px-2 text-white">{reactFacts[itemIndex]} {reactFacts[((itemIndex + 1) % (reactFacts.length - 1))]}</p></span>
          </div>
          
          <div className="des-carousel-container px-6 py-[20px]">
            <div className="des-carousel-wrapper">
              <div className="des-carousel">
                {reactFacts.map((fact, index) => (
                  <div key={index} className="des-carousel-item" onMouseOver={() => setItemIndex(index)}>
                    <img src={'/images/image-4.png'} alt="Image 1" />
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

export default Design;
