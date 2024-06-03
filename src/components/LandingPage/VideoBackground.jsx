"use client"
// import bgVideo from '@/public/videos/bgVideo.mp4'

const VideoBackground = ({videoPath}) => {
    return (
      <div className="inset-0 absolute h-fit z-0 overflow-hidden">
        <video
          className="h-screen w-full aspect-square object-cover"
          // src={videoPath}
          src='/videos/bgVideo.mp4'
          autoPlay
          muted
          loop 
        />
      </div>
    );
  };
  export default VideoBackground

  //Note: After successful wroking of cloudinary, I will replace the bgVideo with videoPath