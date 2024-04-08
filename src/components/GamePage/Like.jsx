import React, { useState } from 'react';
import { FaFire } from 'react-icons/fa';

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-full top-0">
        <button
          onClick={handleLikeClick}
          className={`p-1.5 rounded-3xl absolute shadow shadow-white items-center ${isLiked ? 'bg-slate-900' : 'bg-slate-950'
            }`}
        >
          <FaFire className={`w-6 h-6 ${isLiked ? 'text-red-600' : 'text-white'}`} />
          {isLiked ? '' : ''}
        </button>
      </div>
    </div>
  );
};

export default Like;