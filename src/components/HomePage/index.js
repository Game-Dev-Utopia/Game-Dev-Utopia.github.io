"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import './index.css';
import Avatar from "@mui/material/Avatar";


const Carousel = ({ speed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [design, setDesign] = useState();

  const [designData, setdesignData] = useState([]);

  useEffect(() => {
    const designData = async () => {
      try {
        const response = await getRequest('api/design/getdesigns');
        console.log("res", response);
        setdesignData(response);
      } catch (error) {
        console.error('Error fetching design data:', error);
      }
    };
  
    designData();
  }, []);

  return (
    <div className='c-container'>
      <div className='content'>
        <h1>Design Section</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {designData.map((image, index) => (
            <div key={index} className='box-wrapper'>
              <div className="box">
              <Link href="/designs" passHref>
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="carousel-image"
                />
                </Link>
                <div className="avatar-container">
                  <Avatar
                    alt={`Avatar ${index}`}
                    sx={{ width: 40, height: 40, border: '2px solid yellow' }}
                  >
                    {designData.developers[index % designData.developers.length].name[0]}
                  </Avatar>
                  <div className="developer-info">
                    <span>{designData.developers[index % designData.developers.length].name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel2" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {designData.map((image, index) => (
            <div key={index} className='box-wrapper'>
              <div className="box">
              <Link href="/designs" passHref>
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="carousel-image"
                />
                </Link>
                <div className="avatar-container">
                  <Avatar
                    alt={`Avatar ${index}`}
                    sx={{ width: 40, height: 40, border: '2px solid yellow' }}
                  >
                    {designData.developers[index % designData.developers.length].name[0]}
                  </Avatar>
                  <div className="developer-info">
                    <span>{designData.developers[index % designData.developers.length].name}</span>
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
