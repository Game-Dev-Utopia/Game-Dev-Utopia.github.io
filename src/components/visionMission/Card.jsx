import React from 'react';
import './HoverCard.css';

const HoverCard = ({title, content, isLargeScreen}) => {
    
  return (
    <div className="container noselect">
  <div className="canvas">
    <div className="tracker tr-1"></div>
    <div className="tracker tr-2"></div>
    <div className="tracker tr-3"></div>
    <div className="tracker tr-4"></div>
    <div className="tracker tr-5"></div>
    <div className="tracker tr-6"></div>
    <div className="tracker tr-7"></div>
    <div className="tracker tr-8"></div>
    <div className="tracker tr-9"></div>
    <div className="tracker tr-10"></div>
    <div className="tracker tr-11"></div>
    <div className="tracker tr-12"></div>
    <div className="tracker tr-13"></div>
    <div className="tracker tr-14"></div>
    <div className="tracker tr-15"></div>
    <div className="tracker tr-16"></div>
    <div className="tracker tr-17"></div>
    <div className="tracker tr-18"></div>
    <div className="tracker tr-19"></div>
    <div className="tracker tr-20"></div>
    <div className="tracker tr-21"></div>
    <div className="tracker tr-22"></div>
    <div className="tracker tr-23"></div>
    <div className="tracker tr-24"></div>
    <div className="tracker tr-25"></div>
    <div id="card">
          {isLargeScreen ? (
            <>
              <p id="prompt md:pr-9">
                <div className='lg:text-5xl md:text-2xl text- text-center font-bold justify-center'>{title}</div>
                <br></br>
                <div className='p-8 text-xl'>{content}</div>
              </p>
            </>
          ) : (
            <>
              <p id="prompt md:pr-9 m-4">
                <div className='text-2xl text- text-center font-bold justify-center'>{title}</div>
                <br></br>
                <div className='p-4 text-lg'>{content}</div>
              </p>
            </>
            )}
    </div>
  </div>
</div>
  );
};

export default HoverCard;
