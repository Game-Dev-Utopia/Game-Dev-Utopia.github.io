/* eslint-disable @next/next/no-img-element */
"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
  const data = ['https://images.unsplash.com/photo-1682686581551-867e0b208bd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D', 
  'https://images.unsplash.com/photo-1707343848655-a196bfe88861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', 
  'https://plus.unsplash.com/premium_photo-1689962253303-df6f8fd16069?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8', 
  'https://plus.unsplash.com/premium_photo-1677249227771-43a86c13eb76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D', 
  'https://images.unsplash.com/photo-1711348260213-b4f6c9c1d6be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D']; // replace with your data
  return (
    <div className="bg-gradient-to-tr from-slate-950/30 to-transparent p-2 backdrop-blur-md rounded-lg">
      <Carousel
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
        showIndicators={false}
        centerMode
        useKeyboardArrows={true}
        infiniteLoop={true}
        centerSlidePercentage={60}
        className=" md:w-[30vw]"
      >
        {data.map((item, index) => (
          <div key={index} className=" bg-gray-900 rounded mx-2 shadow text-center">
            <img src={item} alt="img" className="object-cover aspect-auto h-32" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}