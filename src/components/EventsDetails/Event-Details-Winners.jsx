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

export default Winner;