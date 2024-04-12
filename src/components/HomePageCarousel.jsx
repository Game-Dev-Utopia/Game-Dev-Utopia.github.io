/* eslint-disable react/display-name */
"use client"
import React, { useState } from 'react';

export default function HomePageCarousel({ images }){
    const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="flex items-center justify-center mt-8">
      <button onClick={() => setCurrentIndex(prevIndex)} className="mr-2">
        Prev
      </button>
      <div className="w-96 overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
          {images.map((image, index) => (
            <div key={index} className={`w-32 h-32 flex-shrink-0 ${index === currentIndex ? 'scale-125' : 'scale-100'}`}>
              <img src={image} alt={`carousel-${index}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => setCurrentIndex(nextIndex)} className="ml-2">
        Next
      </button>
    </div>
  );
};

