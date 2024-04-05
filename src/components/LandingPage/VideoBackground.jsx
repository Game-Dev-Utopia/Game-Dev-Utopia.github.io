"use client"

const VideoBackground = ({videoPath}) => {
    return (
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          className="w-full object-cover"
          src={videoPath}
          autoPlay
          muted
          loop 
        />
      </div>
    );
  };
  export default VideoBackground