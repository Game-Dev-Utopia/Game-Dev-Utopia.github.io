'use client'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const TimelineCard = ({ data , scrollCurrent, index }) => {
    const timelineCardRef = useRef(0);
    const [transparency,setTransparency] = useState(1);

    useEffect(() => {
        if(scrollCurrent && timelineCardRef) {
            var scrollVal = ((scrollCurrent.scrollTop + scrollCurrent.clientHeight/1.5 - timelineCardRef.current.offsetTop)/timelineCardRef.current.clientHeight);

            if(scrollVal > 0 && scrollVal < 1)
                scrollVal = 1

            setTransparency(scrollVal);
        }
    }, )


    return (
        <div className={`Achievement transition-all duration-1000`} style={{opacity : transparency}} ref={timelineCardRef}>
            <Image 
                alt={data.name}
                src={data.image}
                width="300"
                height="300"
                className='w-[6%] h-auto z-20 absolute rounded-[50%] border-white border-[0.3vw] left-[95%] scale-150 md:w-[3%] md:scale-100 md:left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2'
            />
            <p className='text-center Achievement-time text-sm md:text-lg rounded-[1rem] border-[#E5BD1A] border-2 px-3 bg-black'>{data.date}</p>
            <div className='Achievement-tag'></div>
            <div 
                style={{ 
                    boxShadow : (transparency >= 1) ? '0px 0px 100px 0px rgba(255, 255, 0, 0.2)' : 'none',
                    animation: (transparency >= 1) ? 'flipCardAnimRight 1s' : 'none'
                }}
                className='Achievement-detail text-[4vw] md:text-[0.9vw]'>
                <div className='Achievement-detail-container'>
                    <div className='Achievement-detail-inner'>
                    </div>
                    <h1 className='Achievement-title'><b>{data.title}</b></h1>
                    <h3 className='Achievement-title'>{data.altName}</h3>
                    <ul className='Achievement-details list-disc'> 
                        { data.details.map((detail, i) => <li key={i}>{detail}</li>) }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TimelineCard;
