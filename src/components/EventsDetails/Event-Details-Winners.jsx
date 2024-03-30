import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdOutlineStarPurple500 } from 'react-icons/md'


const Winner = ({ image, prize, name, medalColor }) => {
    return (
        <div className='flex justify-stretch text-center items-center my-1'>
            <Avatar medalColor={medalColor}>
                <AvatarImage src={image} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className='mx-8'>
                {name} <br />
                {prize} Prize
            </p>
        </div>
    )
}

const Winners = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center md:justify-center">
            <Winner prize={"1st"} name={"Kiran Kankariya"} image={"https://github.com/shadcn.png"} medalColor={"#ffcf40"} />
            <Winner prize={"2nd"} name={"Himanshu Pandey"} image={"https://github.com/shadcn.png"} />
            <Winner prize={"3rd"} name={"Bhavyam Sanghavi"} image={"https://github.com/shadcn.png"} medalColor={"#b08d57"} />
            <Winner prize={"4th"} name={"Kiran Kankariya"} image={"https://github.com/shadcn.png"} medalColor={"#383bff"} />
        </div>
    )
}

export default Winners;
