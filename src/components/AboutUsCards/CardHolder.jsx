'use client';

import { useState } from "react";
import Card from "./Card";

const StaticDropDown = ({ data, index }) => {
    return (
        <div className={`block rounded-lg bg-card-background-secondary p-5`}>
            <b>{data.title}</b>
        </div>
    );
}


const CardHolder = ({ datas, selectedNum = 0 }) => {

    const moveLastToFront = (arr) => {
        arr.unshift(arr.pop());
    }

    const moveFrontToLast = (arr) => {
        arr.push(arr.shift());
    }

    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 10;

    const onTouchStart = (e) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = (e) => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        // if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right');
        // if (isLeftSwipe || isRightSwipe) {
        if (isLeftSwipe) {
            moveLastToFront(data.data);
        }
        // if (isRightSwipe) {
        //     moveFrontToLast(data.data);
        // }
    }

    const data = datas[selectedNum];
    return (
        <div>
            <div className={`w-fit h-fit m-auto text-3xl`}>
                <StaticDropDown data={data} index={selectedNum}/>
            </div>
            <div 
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                className="min-h-screen no-scrollbar relative overflow-x-auto flex flex-row"
            >
                <div className="sm:flex justify-center absolute top-1/2 -translate-y-1/2 p-[10%] sm:p-0">
                    { data.data.map((val,i) => <Card data={val} index={i} cardsCount={data.data.length} key={i}/>) }
                </div>
            </div>
        </div>
    );
}

export default CardHolder;
