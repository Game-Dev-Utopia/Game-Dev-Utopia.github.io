import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black/80 z-[20]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></div>
    </div>
  );
};

export default LoadingSpinner;
