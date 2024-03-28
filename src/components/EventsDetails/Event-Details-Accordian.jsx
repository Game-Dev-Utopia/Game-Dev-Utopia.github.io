'use client'
import { useEffect, useState } from "react";
import Card from "../Card";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";

const DropDownPrizeElement = ({data,index}) => {
    var color = "text-amber-400"

    if(index == 1)
    {
        color = "text-lime-50"
    }
    if(index == 2)
    {
        color = "text-yellow-700"
    }

    return(
        <li className={`flex justify-start align-middle text-Event-font p-6 pl-9 sm:p-5 sm:pl-9 z-10`}> 
            {<FaTrophy className={`text-[250%] ${color} mx-4 pb-4`}/>} {data.Prize}
        </li>
    )
};


const DropDownElement = ({data,index}) => {
    return(
        <li className={`flex justify-start text-Event-font p-6 pl-9 sm:p-5 sm:pl-9 z-10`}> 
            {data}
        </li>
    )
};

const StaticDropDown = ({data,clicked,setClicked}) => {
    return(
        <div className={`flex justify-start ${clicked ? "rounded-t-lg" : "rounded-lg"} bg-Event-Accordian p-4`} onClick={setClicked}>
            <div className="flex text-Event-heading mx-2">
                <b>{data}</b>
            </div>
            
            <IoMdArrowDropdown className={`mx-1 text-Event-heading mt-1 scale-125 ${clicked ? "rotate-180" : "rotate-0"} transition-all duration-200`} />
        </div>
    );
}

const Accordian = ({title,datas}) => {

    const [clicked,setClicked] = useState(false);

    const handleClick = ()=>{
        setClicked(!clicked);
    }

    return (
        <div className="text-3xl rounded-lg w-[98%] m-auto transition-all duration-200">
            <StaticDropDown data={title} clicked={clicked} setClicked={handleClick}/> 
            <ul className={`relative bg-Event-Accordian rounded-b-lg z-10 w-[100%] ${clicked? "opacity-100":"h-0 opacity-0 -translate-y-[50%] scale-y-0"} transition-all duration-200`}>
                {
                    datas.map((data, i) =>{
                        if(title == "Prizes"){
                            return <DropDownPrizeElement data={data} key={i} index={i}/>
                        }
                        return <DropDownElement data={data} key={i} index={i}/>
                    })
                }
            </ul>
        </div>
    );
};
export default Accordian; 



