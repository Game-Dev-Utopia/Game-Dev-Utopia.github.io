'use client'
import { useEffect, useState } from "react"

const Card = ({size_var,data,width,domDisplayStyle}) => {
    const [click,setClick] = useState(false);
    const [hover,setHover] = useState(false);

    useEffect(()=>{
        if(!hover)
            setClick(false);
    },[hover])

    return (
        <div
            onClick={()=>setClick(true)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`${domDisplayStyle} text-center bg-green-200 w-32 h-32 ${click ? "z-10" : "z-0"} 
                 shadow-xl hover:w-44 hover:h-44 hover:shadow-2xl transition-all duration-300 m-auto`}
             style={click ? {left : `${size_var + width/2}px`}:{left:`${size_var}px`}}
        >
            Card {data}
        </div> 
    )   
}

export default Card
