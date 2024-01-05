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
        <li className={`relative hover:bg-gray-800  p-6  z-10 rounded-lg`} onClick={HandleClick}> 
            {data.title}
        </li>
    )
};

const StaticDropDown = ({data,setClicked}) => {
    return(
        <div className={`flex justify-evenly rounded-full bg-black p-4`} onClick={setClicked}>
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
    const [currSelectNum,setCurrSelectNum] = useState(selectedNum);
    const data = datas[currSelectNum];

    return (
        <div>
            <div className={`w-fit h-fit m-auto`}>
                <DropDown datas={datas} currIndex={currSelectNum} selectCurrIndex={setCurrSelectNum}/>
            </div>
            <div className="min-h-screen relative">
                <div className={`flex justify-center absolute top-1/2 -translate-y-1/2`}>
                    { data.data.map((val,i) => <Card data={val} key={i}/>) }
                </div>
            </div>
        </div>
    );
}

export default CardHolder;
