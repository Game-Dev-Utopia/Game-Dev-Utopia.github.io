'use client'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Tag from "@/utilities/Icons/Tag.svg"
import { FaTrophy } from "react-icons/fa";

const DisplayRank = ({rank})=>{
    var color = "";
    switch(rank){
        case 1:
            color = "text-yellow-500";
            break;
        case 2:
            color = "text-gray-200";
            break;
        case 3:
            color = "text-orange-400";
            break;
    }

    return <FaTrophy className={`absolute ${color} text-[400%] w-[6%] lg:w-[4%] h-auto z-20 absolute rounded-[10%] left-[10%] bottom-[43%]  lg:bottom-[43%] -translate-x-1/2 translate-y-1/2`}/>
}


const AchievementImages = ({data})=>{
    return(
        <div className={`flex-col sm:flex items-center sm:justify-center p-5 w-full`}>
            { data.image.map((img, i) => <Image width={100} height={100} src={img} alt={i} className='mx-auto rounded-md aspect-square m-3' key={i}/>) }
        </div>
    )
}

const TimelineCard = ({ data , scrollCurrent, index }) => {
    const timelineCardRef = useRef(0);
    const [transparency,setTransparency] = useState(0);


    useEffect(() => {
        if(scrollCurrent && timelineCardRef) {
            var scrollVal = ((scrollCurrent.scrollTop + scrollCurrent.clientHeight/1.5 - timelineCardRef.current.offsetTop)/timelineCardRef.current.clientHeight);

            if(scrollVal > 0 && scrollVal < 1)
                scrollVal = 1

            setTransparency(scrollVal);
        }
        else{
            if(index == 0)
                setTransparency(1);

        }
    }, )


    return (
        <div className={`List-Achievement transition-all duration-1000`}  ref={timelineCardRef}>
            <Image 
                alt="Tag"
                src={Tag}
                width="300"
                height="300"
                className='w-[13%] sm:w-[10%] lg:w-[7%]  rotate-45 h-auto z-20 absolute rounded-[10%] left-[10%] scale-150 bottom-[45%] -translate-x-1/2 translate-y-1/2'
            />
            {
                (data.ranked)?
                    <DisplayRank rank={data.rank}/>
                    :<div/>
            }
            <p className='text-center List-Achievement-time text-sm md:text-lg rounded-[1rem] px-3 '>{data.date}</p>
            <div 
                className='List-Achievement-detail text-[3vw] md:text-[0.9vw]'>
                <div className='List-Achievement-detail-container'>
                    <div className='List-Achievement-detail-inner'>
                    </div>
                    <AchievementImages data={data}/>
                    <h1 className='text-center text-xl lg:text-2xl'><b>{data.title}</b></h1>
                    <ul className='List-Achievement-details text-lg lg:text-lg list-none text-center p-2'> 
                        { data.description.map((detail, i) => <li key={i}>{detail}</li>) }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TimelineCard;
