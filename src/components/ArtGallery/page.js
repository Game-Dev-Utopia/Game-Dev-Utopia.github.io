'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FaFire } from 'react-icons/fa'
import ShareIcon from '@mui/icons-material/Share'
import Avatar from '@mui/material/Avatar'
import { getRequest } from '@/api/api'
import './index.css'
import Collaborators from '../GamePage/Collaborators'
import Image from 'next/image'

const ArtGallery = () => {
  const [galleryData, setGalleryData] = useState([])
  const dataFetchedRef = useRef(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('Component Mounted')
    if (!dataFetchedRef.current) {
      const fetchData = async () => {
        try {
          const response = await getRequest('api/design/getdesigns')
          setGalleryData(response)
          dataFetchedRef.current = true
        } catch (error) {
          console.error('Error fetching design data:', error)
        } finally {
          setLoading(false)
        }
      }
      fetchData()
    } else {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    console.log('Component Rendered')
  })

  const [likes, setLikes] = useState({})
  const [liked, setLiked] = useState({})
  const [shared, setShared] = useState({})
  const [shares, setShares] = useState({})
  const [showFullDescription, setShowFullDescription] = useState({})

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likes')) || {}
    const savedShares = JSON.parse(localStorage.getItem('shares')) || {}
    setLikes(savedLikes)
    setShares(savedShares)
  }, [])

  const handleLike = index => {
    if (!liked[index]) {
      setLiked(prevLiked => ({ ...prevLiked, [index]: true }))
      setLikes(prevLikes => {
        const newLikes = { ...prevLikes, [index]: (prevLikes[index] || 0) + 1 }
        localStorage.setItem('likes', JSON.stringify(newLikes))
        return newLikes
      })
    }
  }

  const handleShare = index => {
    if (!shared[index]) {
      setShared(prevShared => ({ ...prevShared, [index]: true }))
      setShares(prevShares => {
        const newShares = {
          ...prevShares,
          [index]: (prevShares[index] || 0) + 1
        }
        localStorage.setItem('shares', JSON.stringify(newShares))
        return newShares
      })
    }
  }

  const handleVideoEnded = (event, index) => {
    const videoElement = event.target
    videoElement.currentTime = 0
    videoElement.play()
  }

  const toggleShowFullDescription = index => {
    setShowFullDescription(prevShowFullDescription => ({
      ...prevShowFullDescription,
      [index]: !prevShowFullDescription[index]
    }))
  }

  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [fadeTimeout, setFadeTimeout] = useState(null)

  const handleDescriptionHover = index => {
    setHoveredIndex(index)
  }

  const getFileType = url => {
    const fileExtension = url.split('.').pop().toLowerCase()
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(fileExtension)) {
      return 'image'
    } else if (['mp4', 'webm', 'ogg', 'mkv', 'mov'].includes(fileExtension)) {
      return 'video'
    }
    return 'unknown'
  }

  useEffect(() => {
    if (hoveredIndex !== null) {
      const timeout = setTimeout(() => {
        setHoveredIndex(null)
      }, 2000)

      const descriptionElement = document.getElementById(
        `description-${hoveredIndex}`
      )
      if (descriptionElement) {
        descriptionElement.classList.add('fade-out')
      }

      setFadeTimeout(timeout)
    }

    return () => {
      clearTimeout(fadeTimeout)

      const descriptionElement = document.getElementById(
        `description-${hoveredIndex}`
      )
      if (descriptionElement) {
        descriptionElement.classList.remove('fade-out')
      }
    }
  }, [hoveredIndex, fadeTimeout])

  const playParentVideo = id => {
    const parentVideo = document.querySelector('.video-item.video1')
    parentVideo.play()
  }

  const pauseParentVideo = id => {
    const parentVideo = document.querySelector('.video-item.video1')
    parentVideo.play()
  }

  return (
    <div className='design-page'>
      <h1 className='txt-grad font-bold text-center text-3xl'>Designs</h1>
      <hr />

      <div className='image-gallery'>
        {galleryData.map((item, index) => (
          <div key={index} className={`item img${index + 1} relative z-10`}>
            <Link href={`/designs/${item._id}`} passHref>
              {getFileType(item.designs[0]) === 'video' ? (
                <video
                  loop
                  muted
                  onEnded={e => handleVideoEnded(e, index)}
                  className={`video-item video${index + 1}`}
                  style={{ borderRadius: '15px' }}
                  onMouseEnter={e => e.target.play()}
                  onMouseLeave={e => e.target.pause()}
                >
                  <source src={item.designs[0]} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  fill={true}
                  src={item.designs[0]}
                  alt={`Image ${index}`}
                  className={`item img${index + 1}`}
                  quality={75}
                />
              )}
            </Link>
            <div
              className='absolute bottom-0 w-full flex flex-row justify-between items-end p-2 opacity-0 group hover:opacity-100 duration-700 transition z-10 bg-transparent'
              // onMouseEnter={(e) => e.target.play()}
              // onMouseLeave={(e) => e.target.pause()}
            >
              <div className='w-fit'>
                <span className='text-xl font-bold'>{item.title}</span>
                <div className=''>
                  <span>
                    <Collaborators developersArray={item.developer_ids} />
                  </span>
                </div>
                <div className='text-xs'>
                  {showFullDescription[index]
                    ? item.description
                    : `${item.description.slice(0, 70)}...`}
                  <span
                    className='cursor-pointer font-bold text-cyan-300'
                    onClick={() => toggleShowFullDescription(index)}
                  >
                    {showFullDescription[index] ? '   Read less' : 'Read more'}
                  </span>
                </div>
              </div>
              <div className='flex flex-col icons justify-end'>
                <div
                  className='like-icon flex justify-between'
                  onClick={() => handleLike(index)}
                >
                  <FaFire style={{ background: 'transparent' }} />
                  <span className='like-count block'>{likes[index] || 0}</span>
                </div>
                <div
                  className='share-icon justify-between'
                  onClick={() => handleShare(index)}
                >
                  <ShareIcon style={{ background: 'transparent' }} />
                  <span className='share-count block'>
                    {shares[index] || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArtGallery
