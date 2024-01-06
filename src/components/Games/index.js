/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from 'next/image'
import "./index.css"; // Your CSS file for styling
import thumbnail_img from "../../../public/images/image-23.png";
import snap2 from "../../../public/images/image-3.png";
import snap3 from "../../../public/images/image-4.png";
import snap4 from "../../../public/images/image-5.png";
import Iframe from "react-iframe";

const Games = () => {
  const images = [
    snap3,
    snap2,
    snap3,
    snap4,
    snap4,
    snap3,
    snap2,
    snap3,
    snap3,
    snap3,
  ];

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };
  

  return (
    <>
      <div className="game-page">
        <div className="video-game-wrapper bg-gradient">
          <div className="video-card card">
            <Iframe
              title="ytplayer"
              type="text/html"
              width="640"
              height="400"
              src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&mute=1"
            ></Iframe>
            <div class="carousel-container">
              <div class="carousel-wrapper">
                <div class="carousel">
                  <div class="carousel-item">
                    <Image src={snap2} alt="Image 1" />
                    <Image src={snap3} alt="Image 2" />
                    <Image src={snap4} alt="Image 2" />
                    <Image src={snap3} alt="Image 2" />
                    <Image src={snap2} alt="Image 2" />
                    <Image src={snap3} alt="Image 2" />
                    <Image src={snap4} alt="Image 2" />
                    <Image src={snap3} alt="Image 2" />
                    <Image src={snap2} alt="Image 2" />
                    <Image src={snap4} alt="Image 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="game-info card">
            <div className="game-Info">
              <div className="thumbnail">
                <img src={thumbnail_img} alt="Game Thumbnail" />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
              <div className="buttons">
                <button>Play</button>
                <button>Share</button>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://chouremalhar.itch.io/dicey-roads") 
                  }
                >
                  Install
                </button>
                <button class="like-button" onClick={handleLike}>
                  <span>Like</span>
                  <span class="like-symbol">&#x1F44D;</span>
                  <span>{likes}</span>
                </button>

                <button className="comment-button">
                  Comment
                  <span className="comment-symbol">&#x1F4AC;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
