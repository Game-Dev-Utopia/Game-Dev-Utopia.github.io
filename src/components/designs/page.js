"use client"
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import design1 from "/public/images/design1.jpg";
import design2 from "/public/images/design2.jpeg";
import design3 from "/public/images/design3.jpeg";
import design4 from "/public/images/design4.jpg";
import design5 from "/public/images/design5.jpg";
import design6 from "/public/images/design6.jpg";
import design7 from "/public/images/design7.jpg";
import v1 from "/public/images/vdo1.mp4";
import v2 from "/public/images/render1.mp4";
import v3 from '/public/images/render2.mp4';
import v4 from "/public/images/render3.mp4";
import v5 from "/public/images/render4.mp4";
import v6 from "/public/images/render5.mp4";
import v7 from "/public/images/render6.mp4";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from '@mui/icons-material/Share';
import Avatar from "@mui/material/Avatar";
import "../designs/index.css";

const design = () => {
  // const navigate = useNavigate();
  const images = [design1, design2, design3, design4, design5, design6,design7, design1, design2, design3, design4, design5, design6, design7];
  const videos = [v1, v2, v3, v4, v5, v6, v7];
  const descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

  ];

  const v_descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

  ];

  const developers = [
    { name: "John Doe" },
    { name: "Jane Smith" },
  ];
  
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

  const handleImageClick = () => {
    navigate("/test");
  };

  const handleVideoClick = () => {
    navigate("/test");
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

  const handleDescriptionHover = (index) => {
    setHoveredIndex(index);
  };

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setHoveredIndex(null);
    }, 2000);

    return () => {
      clearTimeout(fadeTimeout);
    };
  }, [hoveredIndex]);
  

  return (
    <div className="design-page">
      <h1>Designs</h1>
      <hr />

      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={image} className={`item img${index + 1}`}>
            <img src={image} alt={`Image ${index + 1}`} onClick={handleImageClick} />
            <div
              className="overlay"
              onMouseEnter={() => handleDescriptionHover(index)}
              onMouseLeave={() => handleDescriptionHover(null)}
            >
              <div className="content" style={{ background: "transparent", color: "white" }}>
                <div className="title">Title {index + 1}</div>
                <div className="developer-info">
                <Avatar sx={{ width: 32, height: 32 }}>
                  {developers[index % developers.length].name[0]}
                </Avatar>
                <span>{developers[index % developers.length].name}</span>
              </div>
              <div className="description">
                  {showFullDescription[index]
                    ? descriptions[index]
                    : `${descriptions[index].slice(0, 70)}...`}
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
                  <FavoriteBorderIcon style={{ background: "transparent" }} />
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

      <div className="video-gallery">
        {videos.map((video, index) => (
          <div key={index} className={`video-item video${index + 1}`}>
            <video
              autoPlay
              muted
              onClick={handleVideoClick}
              onEnded={(e) => handleVideoEnded(e, index)}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
              <div className="content" style={{ background: "transparent", color: "white" }}>
                <div className="title">Video Title {index + 1}</div>
                <div className="developer-info">
                <Avatar sx={{ width: 32, height: 32 }}>
                  {developers[index % developers.length].name[0]}
                </Avatar>
                <span>{developers[index % developers.length].name}</span>
              </div>
                <div className="description">
                  {showFullDescription[index]
                    ? v_descriptions[index]
                    : `${v_descriptions[index].slice(0, 70)}...`}
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
                  <FavoriteBorderIcon style={{ background: "transparent" }} />
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

export default design;
