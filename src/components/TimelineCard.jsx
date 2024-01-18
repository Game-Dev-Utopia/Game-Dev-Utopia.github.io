'use client'
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const TimelineCard = ({ data , scrollCurrent }) => {
    const timelineCardRef = useRef(0);
    let scale = '1';
    useEffect(() => {
        if (scrollCurrent.scrollTop > timelineCardRef.current.offsetTop - scrollCurrent.clientHeight/2 && scrollCurrent.scrollTop < timelineCardRef.current.offsetTop + timelineCardRef.current.clientHeight) {
            scale = '1.1';
        } else {
            scale = '1';
        }
    }, [])
    return (
        <div className={`Achievement scale-[${scale}%]`} ref={timelineCardRef}>
            <Image 
                alt={data.name}
                src={data.image}
                width="300"
                height="300"
                className='w-[3%] h-auto z-20 absolute rounded-[50%] border-white border-[0.3vw] left-[80%] scale-150 md:left-1/2 md:scale-100 bottom-1/2 -translate-x-1/2 translate-y-1/2'
            />
            <p className='Achievement-time text-sm md:text-lg '>{data.date}</p>
            <div className='Achievement-tag'></div>
            <div className='Achievement-detail text-[2vw] md:text-[0.9vw]'>
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
