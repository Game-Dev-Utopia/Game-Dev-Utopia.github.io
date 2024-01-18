'use client'
import TimelineCard from './TimelineCard';
import { useEffect, useRef, useState} from 'react';

const Timeline = ({ datas }) => {
    const ScrollRef = useRef(0); 
    const [scrollCurrent, setScrollCurrent] = useState(0);

    useEffect(()=>{
        console.log(ScrollRef.current.scrollTop);
        const scrollListner = ScrollRef.current.addEventListener('scroll', () => setScrollCurrent(ScrollRef.current) );

        return () => {
            if (ScrollRef.current)
                ScrollRef.current.removeEventListener('scroll', scrollListner);
        }
    },[])

    return (
        <div ref={ScrollRef} className='Scroll h-[90vh] overflow-y-scroll overflow-x-hidden'>
            <div className='Timeline'>
                {datas.map((data, i) => <TimelineCard key={i} data={data} scrollCurrent={scrollCurrent}/> )}
            </div>
        </div>
    );
}

export default Timeline;
