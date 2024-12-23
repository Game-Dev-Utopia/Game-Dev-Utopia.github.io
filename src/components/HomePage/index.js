import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './index.css';
import { getRequest } from '@/api/api';
import Avatar from "@mui/material/Avatar";
import Collaborators from '../GamePage/Collaborators';
import Image from 'next/image';

const Carousel = ({ speed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [designData, setDesignData] = useState([]);
  const [imageError, setImageError] = useState({});


  const handleVideoEnded = (event, index) => {
    const videoElement = event.target;
    videoElement.currentTime = 0;
    videoElement.play();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest('api/design/homepagedesigns');
        console.log("SSM: ", response);
        setDesignData(response);
      } catch (error) {
        console.error('Error fetching design data:', error);
      }
    };
    fetchData();
  }, []);

  const imagesInFirstCarousel = designData.slice(0, 7);
  const remainingImages = designData.slice(7);
  const secondCarouselImages = remainingImages.slice(0, 7);

  const getFileType = (url) => {
    const fileExtension = url.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(fileExtension)) {
      return 'image';
    } else if (['mp4', 'webm', 'ogg', 'mkv', 'mov'].includes(fileExtension)) {
      return 'video';
    }
    return 'unknown';
  };

  const handleImageError = (index, isDefaultImage = false) => {
    if (isDefaultImage) {
      setImageError((prevErrors) => ({ ...prevErrors, defaultImage: true }));
    } else {
      setImageError((prevErrors) => ({ ...prevErrors, [index]: true }));
    }
  };

  return (
    <>
      <div className='c-container'>
        <div className='content my-10'>
          <h1 className='txt-grad leading-loose text-4xl text-center mx-11 font-bold'>Design</h1>
          <p>Welcome to our creative hub where Blender and Photoshop work hand in hand to shape virtual worlds and stunning visuals. With Blender, we sculpt, texture, and animate game assets, while Photoshop adds depth to our digital artistry. Join us in unlocking the boundless potential of Blender and Photoshop for gaming and art.</p>
        </div>
        <div className="carousel-container">
          <div className="carousel1" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {imagesInFirstCarousel.map((design, index) => (
              <div key={index} className='box-wrapper'>
                <div className="box">
                  <Link href={`/designs/${design._id}`} passHref>
                    {getFileType(design.designs[0]) === 'video' ? (
                      <video autoPlay muted onEnded={(e) => handleVideoEnded(e, index)} className="carousel-video" onError={() => handleImageError(index)}>
                        <source src={imageError[index] ? '/images/nope-not-here.webp' : design.designs[0]} type="video/mp4" />
                          Your browser does not support the video tag.
                      </video>
                    ) : (

                      <Image
                      src={imageError[index] ? '/images/nope-not-here.webp' : design.designs[0]}
                      alt={`Image ${index}`}
                      fill={true}
                      className="carousel-image"
                      onError={() => handleImageError(index)}
                    />
                    )}
                  </Link>
                  <div className="avatar-container">
                    {/* <Avatar
                      alt={`Avatar ${index}`}
                      sx={{ width: 40, height: 40, border: '2px solid yellow' }}
                    >
                      <Collaborators developersArray={design.developer_ids} />
                    </Avatar> */}
                    <div className="developer-info">
                      <span><Collaborators developersArray={design.developer_ids} /></span>
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
                    <Link href={`/designs/${design._id}`} passHref>
                      {getFileType(design.designs[0]) === 'video' ? (
                        <video autoPlay muted onEnded={(e) => handleVideoEnded(e, index)} className="carousel-video" onError={() => handleImageError(index)}>
                          <source src={imageError[index] ? '/images/nope-not-here.webp' : design.designs[0]} type="video/mp4" />
                              Your browser does not support the video tag.
                        </video>
                      ) : (
                        <Image
                        src={imageError[index] ? '/images/nope-not-here.webp' : design.designs[0]}
                        alt={`Image ${index}`}
                        fill={true}
                        className="carousel-image"
                        onError={() => handleImageError(index + 7)}
                        />
                      )}
                    </Link>
                    <div className="avatar-container">
                      {/* <Avatar
                        alt={`Avatar ${index}`}
                        sx={{ width: 40, height: 40, border: '2px solid yellow' }}
                      >
                        <Collaborators developersArray={design.developer_ids} />
                      </Avatar> */}
                      <div className="developer-info">
                        <span><Collaborators developersArray={design.developer_ids} /></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
      <Link href="/designs" className="font-semibold flex justify-center my-10 text-lg p-2 mx-auto">
        <button className="bg-grad mx-auto text-center rounded-full py-1 see-more">
          See More &rarr;
        </button>
      </Link>
    </>
  );
};

export default Carousel;
