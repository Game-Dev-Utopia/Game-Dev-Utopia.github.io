'use client'
import TimelineCard from './TimelineCard';
import { useEffect, useRef} from 'react';

const Timeline = ({ datas }) => {
    const ScrollRef = useRef(null); 

    useEffect(()=>{
        console.log(ScrollRef.scrollTop);
    },[])

    return (
        <div ref={ScrollRef} className='Scroll h-[90vh] overflow-y-scroll overflow-x-hidden'>
            <div className='Timeline'>
                {datas.map((data, i) => <TimelineCard key={i} data={data} /> )}
            </div>
        </div>
    );
}

export default Timeline;
