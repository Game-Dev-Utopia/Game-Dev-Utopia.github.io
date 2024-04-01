"use client"
import Image from "next/image"
import { FaMedal } from "react-icons/fa";
import CardBG from "@/utilities/Icons/AchievementIcon.svg"
import { useState,useEffect } from "react";
import { MdDoubleArrow } from "react-icons/md";

const DisplayRank = ({rank})=>{
    var color = "";
    switch(rank){
        case 1:
            color = "text-yellow-500";
            break;
        case 2:
            color = "text-gray-400";
            break;
        case 3:
            color = "text-orange-400";
            break;
    }

    return <FaMedal className={`absolute ${color} text-[400%] left-[50%] -translate-x-[50%] top-[78%] 2xl:top-[80%]`}/>
}

const AchievementCard = (props) => {

    return( 
        <div className={`relative hover:scale-105 m-auto transition-all duration-150 ${(fade)?"opacity-0":"opacity-100"}`} style={{scale:props.scale}}>
            <div className="absolute w-full h-full">
                <div className="m-auto font-bold text-center text-3xl lg:text-2xl p-4 mt-[3%]">
                    {props.data.title}
                </div>
                <Image 
                    src={props.data.image} 
                    width={"600"} 
                    height={"600"} 
                    className="rounded-lg m-auto w-[50%] lg:w-[30%] xl:w-[60%]"
                    alt="Achievement Image"
                />
                <div
                    className="py-4 px-5 max-h-6 text-lg xl:text-lg xl:ml-7"
                >
                    <ul className='Achievement-details w-[90%] max-h-[140px] overflow-y-scroll m-auto  list-disc'> 
                        { props.data.description.map((detail, i) => <li key={i}>{detail}</li>) }
                    </ul>
                </div>
                {
                    (props.data.ranked)?
                        <DisplayRank rank={props.data.rank}/>
                        :<div/>
                }
                <div className="absolute lg:hidden top-[30%] -left-5 text-[50px] animate-pulse"> 
                    <MdDoubleArrow className="rotate-180"/> 
                    <div className="text-sm">
                        <i> swipe </i>
                    </div>
                </div>
                <div className="absolute lg:hidden top-[30%] -right-5 text-[50px] animate-pulse"> 
                    <MdDoubleArrow />
                    <div className="text-sm">
                        <i> swipe </i>
                    </div>
                </div>
            </div>
            <Image 
                src={CardBG}
                className="w-full h-full"
                alt="Background Image for Card"
                height={"1000"}
                width={"1000"}
            />
            
        </div>
    )
}


var fade= false;
var intervalId;
const Top3Achievements = ({Top3Data}) =>{

    const [cardNum,setCardNum] = useState(0);

    const [leftSwiping,setLeftSwiping] = useState(false);
    const [rightSwiping,setRightSwiping] = useState(false);
    const fadeOut = () =>{
        fade = true;
    }

    const rightButton = () => {
        setCardNum((cardNum + 1)%3);
        fade = false;
        setRightSwiping(false);
        clearInterval(intervalId)

    }

    const leftButton = () => {
        if((cardNum - 1)%3 <= -1)
            setCardNum(2)
        else
            setCardNum((cardNum - 1)%3)

        fade = false;
        setLeftSwiping(false);
        clearInterval(intervalId)
    }

    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    const minSwipeDistance = 50 

    const onTouchStart = (e) => {
        setTouchEnd(null) 
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        fadeOut()

        if (isLeftSwipe) 
        {
            setLeftSwiping(true)
        }
        else if(isRightSwipe)
        {
            setRightSwiping(true)
        }            
    }

    useEffect(() => {

        if(leftSwiping==true && !intervalId )
        {
            intervalId = setInterval(leftButton,170);
        }

        if(rightSwiping==true && !intervalId)
        {
            intervalId = setInterval(rightButton,170);
        }

        if(leftSwiping == false && rightSwiping == false && intervalId)
        {
            clearInterval(intervalId)
            intervalId = null
        }
        return() => {clearInterval(intervalId)}
    })

    return (
        <div className="p-0">
            <div className="hidden lg:grid m-auto p-0 lg:grid-cols-3 grid-rows-1  w-[50%] lg:w-[90%]">
                <AchievementCard data={Top3Data[1]} scale={"90%"} />
                <AchievementCard data={Top3Data[0]} scale={"100%"} />
                <AchievementCard data={Top3Data[2]} scale={"90%"} />
            </div>
            <div 
                onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
                className="grid lg:hidden m-auto p-0 lg:grid-cols-1 grid-rows-1 max-h-[700px]  w-[100%] lg:w-[80%] transition-all duration-300"
            > 
                <AchievementCard arrow={true} fade={fade} data={Top3Data[cardNum]} scale={"100%"} />
            </div>
        </div>
    )

}
export default Top3Achievements;
