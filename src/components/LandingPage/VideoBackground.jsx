"use client"

const VideoBackground = ({videoPath}) => {
    return (
      <div className="inset-0 absolute h-fit z-0 overflow-hidden">
        <video
          className="h-screen w-full aspect-square object-cover"
          src={videoPath}
          autoPlay
          muted
          loop 
        />
      </div>
    );
  };
  export default VideoBackground