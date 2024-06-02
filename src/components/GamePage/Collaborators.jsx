import Image from 'next/image'
import React from 'react'

const Collaborators = ({ developersArray }) => {
    return (
        <div className="text-sm font-bold flex gap-2 items-center w-full my-1">
            {/* <Image src={developersArray[0].profilePhoto} alt='pfp' className='h-5 w-5 rounded-full' /> */}
            {
                developersArray.length == 1 ?
                    <Image fill={true} src={developersArray[0].profilePhoto ? developersArray[0].profilePhoto : "https://github.com/shadcn.png"} alt='pfp' className='h-9 w-9 relative rounded-full border-[5px] border-slate-800' />
                    : developersArray.length == 2 ?
                        <div className='overflow-visible'>
                            <Image fill={true} src={developersArray[0].profilePhoto ? developersArray[0].profilePhoto : "https://github.com/shadcn.png"} alt='pfp' className='h-9 w-9 mx-1.5 rounded-full z-20 relative -left-2 border-[5px] border-slate-800' />
                            <Image fill={true} src={developersArray[1].profilePhoto ? developersArray[1].profilePhoto : "https://github.com/shadcn.png"} alt='pfp' className='h-9 w-9 mx-1.5 rounded-full absolute top-1 bg-slate-800 z-[-5] left-7 border-[5px] border-slate-800' />
                        </div>
                        :
                        <div className='overflow-visible'>
                            <Image fill={true} src={developersArray[0].profilePhoto ? developersArray[0].profilePhoto : "https://github.com/shadcn.png"} alt='pfp' className='h-9 w-9 mx-1.5 rounded-full z-20 relative -left-2 border-[5px] border-slate-800' />
                            <Image fill={true} src={developersArray[1].profilePhoto ? developersArray[1].profilePhoto : "https://github.com/shadcn.png"} alt='pfp' className='h-9 w-9 mx-1.5 rounded-full absolute top-1 bg-slate-800 z-[-5] left-7 border-[5px] border-slate-800' />
                            <Image fill={true} src={developersArray[2].profilePhoto ? developersArray[2].profilePhoto : "https://github.com/shadcn.png"} alt='pfp' className='h-9 w-9 mx-1.5 rounded-full absolute top-1 bg-slate-800 z-[-5] -left-1.5 border-[5px] border-slate-800' />
                            {/* <Image fill={true} src={developersArray[0].profilePhoto ? developersArray[0].profilePhoto : "https://github.com/shadcn.png"} alt='pfp' className='h-9 w-9 mx-1.5 rounded-full z-20 relative -left-2 border-[5px] border-slate-800' /> */}
                        </div>
            }
            {
                developersArray.length == 1 ? developersArray[0].name.split(" ")[0]
                    : developersArray.length === 2
                        ? `${developersArray[0].name.split(" ")[0]} and ${developersArray[1].name.split(" ")[0]}`
                        : `${developersArray[0].name.split(" ")[0]} and ${developersArray.length - 1} others`}
        </div>
    )
}

export default Collaborators
