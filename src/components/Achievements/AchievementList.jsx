'use client'
import TimelineCard from './AchievementTimelineCard';
import { useEffect, useRef, useState} from 'react';

const AchievementsList = ({datas}) =>
{
    const ScrollRef = useRef(0); 
    const [scrollCurrent, setScrollCurrent] = useState(ScrollRef.current);
    const [scrollLength, setLength] = useState(ScrollRef.current);

    const HandleScroll = () => {
        setScrollCurrent(ScrollRef.current);
        setLength(ScrollRef.current.scrollTop);
    }

    useEffect(()=>{
        ScrollRef.current.addEventListener('scroll', HandleScroll);

        return () => {
            if (ScrollRef.current)
                ScrollRef.current.removeEventListener('scroll', HandleScroll);
        }
    },[])

    return (
        <div className='w-full'>
            <div ref={ScrollRef}  className='Scroll overflow-y-scroll max-h-[600px] w-[94%] mx-[3%]  transition-all rounded-[2rem] md:rounded-[5rem] border-2'>
                <div  className='List-Timeline '> 
                    <br/>
                    <br/>
                    {datas.map((data, i) => <TimelineCard key={i} data={data} index={i} scrollCurrent={scrollCurrent}/> )}
                </div>
            </div>
        </div>
    );

}
export default AchievementsList;
