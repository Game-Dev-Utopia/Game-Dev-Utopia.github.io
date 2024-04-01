'use client'
import { useEffect, useState } from "react";
import Card from "./Card";
import { IoMdArrowDropdown } from "react-icons/io";

const DropDownElement = ({data,index,setClicked,selectCurrIndex}) => {
    const HandleClick = ()=>{
        setClicked(false);
        selectCurrIndex(index);
    };
    return(
        <li className={`relative bg-card-background-secondary hover:bg-card-foreground p-6 pl-9 sm:p-5 sm:pl-9 z-10 rounded-lg`} onClick={HandleClick}> 
            {data.title}
        </li>
    )
};

const StaticDropDown = ({data,setClicked}) => {
    return(
        <div className={`flex justify-evenly rounded-lg bg-card-background-secondary p-4`} onClick={setClicked}>
            <div className="flex mx-2">
                <b>{data.title}</b>
            </div>
            <IoMdArrowDropdown className="ml-1 mr-1 mt-1 scale-125" />
        </div>
    );
}

const DropDown = ({datas,currIndex,selectCurrIndex}) => {

    const [clicked,setClicked] = useState(false);
    const [OnHover,setOnHover] = useState(false);
    const popUpDisappearDelay = 1000;//time to wait till the pop Up disappears in ms

    useEffect(()=>{
        if(!OnHover && clicked)
    {
            const DisappearInterval = setInterval(() => {
                setClicked(false);
            },popUpDisappearDelay);
            return () => clearInterval(DisappearInterval);
        }
    },[OnHover,clicked])

    return (
        <div className="text-3xl" onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
            <StaticDropDown data={datas[currIndex]} setClicked={setClicked}/> 
            <ul className={`absolute rounded-lg bg-gray-900 w-fit left-1/2 -translate-x-[50%] z-10 ${clicked? "opacity-100":"opacity-0 -translate-y-[50%] scale-y-0"} transition-all duration-200`}>
                {
                    datas.map((data, i) =>{
                        if(currIndex != i)
                        return <DropDownElement data={data} key={i} index={i} setClicked={setClicked} selectCurrIndex={selectCurrIndex}/>
                    })
                }
            </ul>
        </div>
    );
};



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
        console.log(e);
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right');
        // if (isLeftSwipe || isRightSwipe) {
        if (isLeftSwipe) {
            moveLastToFront(data.data);
        }
        // if (isRightSwipe) {
        //     moveFrontToLast(data.data);
        // }
    }

    const [currSelectNum,setCurrSelectNum] = useState(selectedNum);
    const data = datas[currSelectNum];

    return (
        <div>
            <div className={`w-fit h-fit m-auto`}>
                <DropDown datas={datas} currIndex={currSelectNum} selectCurrIndex={setCurrSelectNum}/>
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
