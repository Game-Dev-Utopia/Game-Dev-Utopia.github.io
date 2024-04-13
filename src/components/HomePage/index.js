import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './index.css';
import { getRequest } from '@/api/api';
import Avatar from "@mui/material/Avatar";

const Carousel = ({ speed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [designData, setDesignData] = useState([]);

  const handleVideoEnded = (event, index) => {
    const videoElement = event.target;
    videoElement.currentTime = 0;
    videoElement.play();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest('api/design/getdesigns');
        console.log("SSM: ", response);
        setDesignData(response);
      } catch (error) {
        console.error('Error fetching design data:', error);
      }
    };
    fetchData();
  }, []);

  const imagesInFirstCarousel = designData.slice(0, 10);
  const remainingImages = designData.slice(10);
  const secondCarouselImages = remainingImages.slice(0, 10);

  const getFileType = (url) => {
    const fileExtension = url.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(fileExtension)) {
      return 'image';
    } else if (['mp4', 'webm', 'ogg', 'mkv', 'mov'].includes(fileExtension)) {
      return 'video';
    }
    return 'unknown';
  };

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
          {imagesInFirstCarousel.map((design, index) => (
            <div key={index} className='box-wrapper'>
              <div className="box">
                <Link href="/designs" passHref>
                  {getFileType(design.designs[0]) === 'video' ? (
                    <video autoPlay muted onEnded={(e) => handleVideoEnded(e, index)} className="carousel-video">
                      <source src={design.designs[0]} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={design.designs[0]}
                      alt={`Image ${index}`}
                      className="carousel-image"
                    />
                  )}
                </Link>
                <div className="avatar-container">
                  <Avatar
                    alt={`Avatar ${index}`}
                    sx={{ width: 40, height: 40, border: '2px solid yellow' }}
                  >
                    {design.title}
                  </Avatar>
                  <div className="developer-info">
                    <span>{design.developer_id}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {secondCarouselImages.length > 0 && (
          <div className="carousel2" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {secondCarouselImages.map((design, index) => (
              <div key={index} className='box-wrapper'>
                <div className="box">
                  <Link href="/designs" passHref>
                    {getFileType(design.designs[0]) === 'video' ? (
                      <video autoPlay muted onEnded={(e) => handleVideoEnded(e, index)} className="carousel-video">
                        <source src={design.designs[0]} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={design.designs[0]}
                        alt={`Image ${index}`}
                        className="carousel-image"
                      />
                    )}
                  </Link>
                  <div className="avatar-container">
                    <Avatar
                      alt={`Avatar ${index}`}
                      sx={{ width: 40, height: 40, border: '2px solid yellow' }}
                    >
                      {design.title}
                    </Avatar>
                    <div className="developer-info">
                      <span>{design.developer_id}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
