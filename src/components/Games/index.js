/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from "react";
import "./index.css"; 
import { FaPlay,FaShare,FaComment } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
// import thumbnail_img from "/images/image-23.png";
// import snap2 from "/images/image-3.png";
// import snap3 from "/images/image-4.png";
// import snap4 from "/images/image-5.png";
import Iframe from "react-iframe";
import ToolTip from "../ToolTip";

const Games = () => {
  const genre = ["action","adventure","indie"]
  const [itemIndex,setItemIndex] = useState(0)
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
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };
  

  return (
    <>
      <div className="mx-2 p-2 rounded-2xl bg-gradient-to-tr from-[#202020] to-[#151515]">
        <div className="video-game-wrapper bg-gradient">
        <div class="carousel-container mr-2">
  <div class="carousel-wrapper">
    <div class="carousel">
      {reactFacts.map((fact, index) => (
        <div key={index} class="carousel-item" onMouseOver={()=>setItemIndex(index)}>
          <img src={'/images/image-4.png'} alt="Image 1" />
        </div>
      ))}
      {/* <div class="carousel-item">
        <img src={'/images/image-2.png'} alt="Image 1" />
      </div>
      <div class="carousel-item">
        <img src={'/images/image-4.png'} alt="Image 2" />
      </div>
      <div class="carousel-item">
        <img src={'/images/image-4.png'} alt="Image 3" />
      </div>
      <div class="carousel-item">
        <img src={'/images/image-4.png'} alt="Image 4" />
      </div>
      <div class="carousel-item">
        <img src={'/images/image-2.png'} alt="Image 5" />
      </div>
      <div class="carousel-item">
        <img src={'/images/image-4.png'} alt="Image 6" />
      </div>
      <div class="carousel-item">
        <img src={'/images/image-4.png'} alt="Image 7" />
      </div>
      <div class="carousel-item">
        <img src={'/images/image-2.png'} alt="Image 8" />
      </div>
      <div class="carousel-item">
        <img src={'/images/image-2.png'} alt="Image 9" />
      </div> */}
    </div>
  </div>
</div>

          <div className="video-card h-full border-l-2 border-slate-300 border-opacity-20">
            <iframe height='400' width="600" src="https://www.youtube.com/embed/raIqPgW-quI" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <span><p className="pt-7">{reactFacts[itemIndex]} {reactFacts[((itemIndex+1)%(reactFacts.length-1))]} {reactFacts[((itemIndex+2)%(reactFacts.length-1))]}</p></span>
          </div>
          

          <div className="game-info card border-l-2 border-slate-300 border-opacity-20">
            <div className="game-Info h-full">
              <div className="thumbnail">
                <img src={'/images/image-23.png'} alt="Game Thumbnail" />
              </div>
              <p className="py-6">
                 Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it. 
              </p>
              <div className="buttons flex gap-2 my-2">
                <button className="py-2 group">
                  <FaPlay />
                  <span className="tooltip group-hover:scale-100">
                  <p>Play</p>
                  </span>
                  </button>
                <button className="py-2 group">
                  <FaShare />
                  <span className="tooltip group-hover:scale-100">
                  <p>Share</p>
                  </span>
                  </button>
                <button className="py-2 group flex">
                  <a href="https://chouremalhar.itch.io/dicey-roads" target="_blank">
                      <IoMdDownload />
                    </a>
                    <span className="tooltip group-hover:scale-100">
                  <p>Download</p>
                  </span>
                </button>
                <button class="py-1 flex items-center group gap-[1px]" onClick={handleLike}>
                  <AiFillLike />
                  <span>{likes}</span>
                  <span className="tooltip group-hover:scale-100">
                  <p>Like</p>
                  </span>
                </button>

                <button className="py-2 group flex">
                  <FaComment />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;

