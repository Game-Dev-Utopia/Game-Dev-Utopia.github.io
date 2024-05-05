/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function Modal({ past, close, setIsOpen }) {
  return (
    <div className='transition-all my-2 ease-in-out w-full h-screen overflow-y-scroll left-2 rounded-md p-3 overflow-scroll' id='modal'>
      <div className='columns-1 sm:columns-2 md:columns-3 space-y-4 p-2'>
        {past.map((event, index) => {
          const { _id, imageURL } = event;
          const isVideoURL = /\.(mp4|webm|ogg)$/i.test(imageURL);
          return (
            <Link key={index} href={`/events/${_id}`} passHref>
              {isVideoURL ? (
                // Render video if videoURL exists
                <video
                  src={imageURL}
                  alt={'video' + index}
                  className='hover:scale-[1.05] transition-all duration-100'
                  autoPlay
                  loop
                  muted
                />
              ) : (
                // Render image if no videoURL
                <img
                  src={imageURL}
                  alt={'image' + index}
                  className='hover:scale-[1.05] transition-all duration-100'
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
