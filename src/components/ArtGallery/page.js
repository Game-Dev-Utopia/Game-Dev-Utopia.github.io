"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link'; 
import { FaFire } from 'react-icons/fa';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from "@mui/material/Avatar";
import { getRequest } from '@/api/api';
import "./index.css";
import Collaborators from "../GamePage/Collaborators";

const ArtGallery = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const galleryData = async () => {
      try {
        const response = await getRequest('api/design/getdesigns');
        console.log("SSM:", response);
        setGalleryData(response);
      } catch (error) {
        console.error('Error fetching design data:', error);
      }
    };
  
    galleryData();
  }, []);

  
  const [likes, setLikes] = useState({});
  const [liked, setLiked] = useState({});
  const [shared, setShared] = useState({});
  const [shares, setShares] = useState({});
  const [showFullDescription, setShowFullDescription] = useState({});

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    const savedShares = JSON.parse(localStorage.getItem("shares")) || {};
    setLikes(savedLikes);
    setShares(savedShares);
  }, []);

  const handleLike = (index) => {
    if (!liked[index]) {
      setLiked((prevLiked) => ({ ...prevLiked, [index]: true }));
      setLikes((prevLikes) => {
        const newLikes = { ...prevLikes, [index]: (prevLikes[index] || 0) + 1 };
        localStorage.setItem("likes", JSON.stringify(newLikes));
        return newLikes;
      });
    }
  };

  const handleShare = (index) => {
    if (!shared[index]) {
      setShared((prevShared) => ({ ...prevShared, [index]: true }));
      setShares((prevShares) => {
        const newShares = { ...prevShares, [index]: (prevShares[index] || 0) + 1 };
        localStorage.setItem("shares", JSON.stringify(newShares));
        return newShares;
      });
    }
  };

  const handleVideoEnded = (event, index) => {
    const videoElement = event.target;
    videoElement.currentTime = 0;
    videoElement.play();
  };

  const toggleShowFullDescription = (index) => {
    setShowFullDescription((prevShowFullDescription) => ({
      ...prevShowFullDescription,
      [index]: !prevShowFullDescription[index],
    }));
  };

const [hoveredIndex, setHoveredIndex] = useState(null);
  const [fadeTimeout, setFadeTimeout] = useState(null);

  const handleDescriptionHover = (index) => {
    setHoveredIndex(index);
  };

  const getFileType = (url) => {
    const fileExtension = url.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(fileExtension)) {
      return 'image';
    } else if (['mp4', 'webm', 'ogg', 'mkv', 'mov'].includes(fileExtension)) {
      return 'video';
    }
    return 'unknown';
  };

  useEffect(() => {
    if (hoveredIndex !== null) {
      const timeout = setTimeout(() => {
        setHoveredIndex(null);
      }, 2000);

      const descriptionElement = document.getElementById(`description-${hoveredIndex}`);
      if (descriptionElement) {
        descriptionElement.classList.add('fade-out');
      }

      setFadeTimeout(timeout);
    }

    return () => {
      clearTimeout(fadeTimeout);

      const descriptionElement = document.getElementById(`description-${hoveredIndex}`);
      if (descriptionElement) {
        descriptionElement.classList.remove('fade-out');
      }
    };
  }, [hoveredIndex, fadeTimeout]);


  return (
    <div className="design-page">
      <h1>Designs</h1>
      <hr />

      <div className="image-gallery">
        {galleryData.map((item, index) => (
          <div key={index} className={`item img${index + 1}`}>
            <Link href={`/designs/${item._id}`} passHref>
                  {getFileType(item.designs[0]) === 'video' ? (
                    <video loop
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()} muted onEnded={(e) => handleVideoEnded(e, index)} className={`video-item video${index + 1}`}
                    style={{ borderRadius: '15px' }}>
                      <source src={item.designs[0]} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={item.designs[0]}
                      alt={`Image ${index}`}
                      className={`item img${index + 1}`}
                    />
                  )}
                </Link>
            <div className="overlay" >
              <div className="content" style={{ background: "transparent", color: "white" }}>
                <div className="title">{item.title}</div>
                <div className="developer-info">
                  <span><Collaborators developersArray={item.developer_ids} /></span>
                </div>
              <div className="description">
                  {showFullDescription[index]
                    ? item.description
                    : `${item.description.slice(0, 70)}...`}
                  <span
                    className="read-more"
                    onClick={() => toggleShowFullDescription(index)}
                    style={{ background: "transparent", color: "white" }}
                  >
                    {showFullDescription[index] ? "   Read less" : "Read more"}
                  </span>
                </div>
              </div>
              <div className="icons">
                <div className="like-icon" onClick={() => handleLike(index)}>
                  <FaFire style={{ background: "transparent" }} />
                  <span className="like-count">{likes[index] || 0}</span>
                </div>
                <div className="share-icon" onClick={() => handleShare(index)}>
                  <ShareIcon style={{ background: "transparent" }} />
                  <span className="share-count">{shares[index] || 0}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ArtGallery;
