"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import { getRequest } from "@/api/api";
import Collaborators from "../GamePage/Collaborators";
import Image from "next/image";

const ArtGallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const dataFetchedRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState({});
  const [liked, setLiked] = useState({});
  const [shared, setShared] = useState({});
  const [shares, setShares] = useState({});
  const [showFullDescription, setShowFullDescription] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (!dataFetchedRef.current) {
      const fetchData = async () => {
        try {
          const response = await getRequest("api/design/getdesigns");
          setGalleryData(response);
          dataFetchedRef.current = true;
        } catch (error) {
          console.error("Error fetching design data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

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
        const newShares = {
          ...prevShares,
          [index]: (prevShares[index] || 0) + 1,
        };
        localStorage.setItem("shares", JSON.stringify(newShares));
        return newShares;
      });
    }
  };

  const toggleShowFullDescription = (index) => {
    setShowFullDescription((prevShowFullDescription) => ({
      ...prevShowFullDescription,
      [index]: !prevShowFullDescription[index],
    }));
  };

  const getFileType = (url) => {
    const fileExtension = url.split(".").pop().toLowerCase();
    return ["jpg", "jpeg", "png", "gif", "bmp"].includes(fileExtension)
      ? "image"
      : "video";
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-yellow-500 mb-4">
        Designs
      </h1>
      <hr className="w-full" />

      <div className="md:w-full w-[90%]  max-w-6xl columns-1 md:columns-2 lg:columns-4 gap-4 mx-auto ">
        {galleryData.map((item, index) => (
          <Link href={`/designs/${item._id}`} passHref  key={index}>
          <div
            key={index}
            className="relative mb-2 break-inside-avoid overflow-hidden rounded-lg z-10"
          >
            
              {getFileType(item.designs[0]) === "video" ? (
                <video
                  loop
                  muted
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  className="w-full h-full rounded-lg object-cover"
                >
                  <source src={item.designs[0]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  fill={true}
                  src={item.designs[0]}
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                  quality={75}
                />
              )}
            
            <div className="absolute bottom-0 w-full px-4 py-2 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-start">
              <div className="text-white text-lg font-semibold">
                {item.title}
              </div>
              <div className="flex items-center text-white">
                <Collaborators developersArray={item.developer_ids} />
              </div>
              <div className="text-white mt-1 text-xs">
                {showFullDescription[index]
                  ? item.description
                  : `${item.description.slice(0, 70)}...`}
                <span
                  className="text-aqua cursor-pointer font-bold ml-2"
                  onClick={() => toggleShowFullDescription(index)}
                >
                  {/* {showFullDescription[index] ? "Read less" : "Read more"} */}
                </span>
              </div>
              <div className="flex items-center mt-2 h">
                <button
                  className=" flex items-center text-white mr-4 bg-transparent hover:bg-transparent hover:text-txt-grad"
                  onClick={() => handleLike(index)}
                >
                  <FaFire className="mr-1" /> <span>{likes[index] || 0}</span>
                </button>
                <button
                  className="flex items-center text-white  bg-transparent hover:bg-transparent over:text-txt-grad"
                  onClick={() => handleShare(index)}
                >
                  <ShareIcon className="mr-1" />{" "}
                  <span>{shares[index] || 0}</span>
                </button>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
