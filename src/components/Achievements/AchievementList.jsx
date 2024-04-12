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
            <div ref={ScrollRef} className='max-h-[500px] lg:max-h-[800px] w-[85%] mx-[7%] Scroll no-scrollbar h-[90vh] overflow-y-scroll overflow-x-hidden transition-all rounded-[2rem] md:rounded-[5rem] border-2'>
                <div  className='List-Timeline'>  
                    <br/>
                    <br/>
                    {datas.map((data, i) => <TimelineCard key={i} data={data} index={i} scrollCurrent={scrollCurrent}/> )}
                </div>
            </div>
        </div>
    );

}
export default AchievementsList;
