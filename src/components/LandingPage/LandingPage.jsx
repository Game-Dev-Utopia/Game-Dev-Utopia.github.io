"use client"
import VideoBackground from './VideoBackground'
import React, { useRef, useEffect,useState } from 'react';
import { getRequest } from '../../api/api';
import Diamonds from './Diamonds';
import Typewriter from "typewriter-effect";

  const LandingPage = () => {
    const [videoPath, setVideoPath] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);

    const getLinks = async () => {
        try {
            const response = await getRequest("/api/hero");
            const { img1, img2, img3, video } = response[0];
            setImage1(img1);
            setImage2(img2);
            setImage3(img3);
            setVideoPath(video);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        try {
            getLinks();
        } catch (error) {
            console.log(error.message);
        }
    }, []);
    console.log(image1);
    return (
    <div className="min-h-screen bg-cover bg-gray-200 bg-center overflow-none">
    <VideoBackground videoPath={videoPath} />
    {(image1!=null && image2!=null && image3!=null)?<Diamonds image1={image1} image2={image2} image3={image3}/> :<> </> }
    
    <div className='w-full sticky'>
      <div className='text-9xl w-3/4  text-left font-bold text-yellow-500 ml-5 mt-12 sticky transform scale-y-150'>
        <Typewriter 
            options={{
                strings: [
                    "GameDevUtopia",
                    "GameDevUtopia",
                ],
                autoStart: true,
                loop: true,
            }}
        />
      </div>
    </div>
    <br /><br /><br />
    
    <div className=' mt-12 w-1/2 text-2xl ml-10'>
      <p className='h-1/2 sticky text-white flex items-center justify-center'>Designs that dazzle, games that enthrall. Welcome to our world where creativity meets play. Unleash your imagination and dive into endless possibilities</p>
    </div>
  
    <br /><br /><br />
    <button className="text-center bottom-5 top-3/4 ml-10 transform px-2 py-1 bg-slate-900 text-white text-2xl rounded-2xl shadow-md h-16 w-72 bg-opacity-50 ">
        Designs
    </button>
    <button className="text-center bottom-5 m-10 right-1/2 transform px-4 py-1 bg-slate-900 text-white text-2xl rounded-2xl shadow-md h-16 w-72 bg-opacity-50">
        Games
    </button>
  
  </div>
  
  );
};

export default LandingPage;
