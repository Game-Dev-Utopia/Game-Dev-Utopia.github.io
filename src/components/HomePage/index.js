"use client"
import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import './index.css';
import design1 from "../images/design1.jpg";
import design2 from "../images/design2.jpeg";
import design3 from "../images/design3.jpeg";
import design4 from "../images/design4.jpg";
import design5 from "../images/design5.jpg";
import design6 from "../images/design6.jpg";
import design7 from "../images/design7.jpg";
import Avatar from "@mui/material/Avatar";

const images = [
  design1, design2, design3, design4, design5, design6, design7,
  design1, design2, design3, design4, design5, design6, design7,
  design1, design2, design3, design4, design5, design6, design7,
  design1, design2, design3, design4, design5, design6, design7,
];

const developers = [
  { name: "Developer 1" },
  { name: "Developer 2" },
  { name: "Developer 3" },
  { name: "Developer 4" },
  { name: "Developer 5" },
];

const Carousel = ({ speed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const navigate = useNavigate();

  const handleDesign = () => {
    navigate('/design');
  }

  return (
    <div className='container'>
      <div className='content'>
        <h1>Design Section</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className='box-wrapper'>
              <div className="box">
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="carousel-image"
                  onClick={handleDesign}
                />
                <div className="avatar-container">
                  <Avatar
                    alt={`Avatar ${index}`}
                    sx={{ width: 40, height: 40, border: '2px solid yellow' }}
                  >
                    {developers[index % developers.length].name[0]}
                  </Avatar>
                  <div className="developer-info">
                    <span>{developers[index % developers.length].name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel2" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className='box-wrapper'>
              <div className="box">
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="carousel-image"
                  onClick={handleDesign}
                />
                <div className="avatar-container">
                  <Avatar
                    alt={`Avatar ${index}`}
                    sx={{ width: 40, height: 40, border: '2px solid yellow' }}
                  >
                    {developers[index % developers.length].name[0]}
                  </Avatar>
                  <div className="developer-info">
                    <span>{developers[index % developers.length].name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;