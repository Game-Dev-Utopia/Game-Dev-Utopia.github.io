import React, { useState } from 'react'
import { FaHeart, FaBookmark } from 'react-icons/fa';

const Save = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className='flex justify-center items-center h-full top-0'>
      <button
        onClick={handleSaveClick}
        className={`p-1.5  rounded-3xl absolute shadow shadow-white  items-center mr-2 right-0 bg-black }`}
      >
        <FaBookmark className={`w-6 h-6 ${isSaved ? 'text-green-500' : 'text-white'}`} />
        {isSaved ? '' : ''}
      </button>
    </div>
  )
}

export default Save