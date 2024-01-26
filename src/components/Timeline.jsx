'use client'
import TimelineCard from './TimelineCard';
import { useEffect, useRef, useState} from 'react';

const Timeline = ({ datas }) => {
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
        <div ref={ScrollRef} className='Scroll h-[90vh] overflow-y-scroll overflow-x-hidden'>
            <div  className='Timeline'> 
                <br/>
                <br/>
                {datas.map((data, i) => <TimelineCard key={i} data={data} index={i} scrollCurrent={scrollCurrent}/> )}
            </div>
        </div>
    );
}

export default Timeline;
