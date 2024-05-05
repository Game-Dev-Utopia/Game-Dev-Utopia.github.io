import React, { useState } from 'react'
import Like from "./Like"
import Save from "./Save"
import { Avatar, AvatarImage } from '../ui/avatar'
import Collaborators from './Collaborators'
import Link from 'next/link'

const Card = ({ item }) => {
  return (
    item.map((val, i) => (
      <Link key={i} href={`/games/${val._id}`}>
      <div className='relative hover:scale-110 grid justify-items-center z-20 font-bold '>
        <div className='max-w-[16rem] max-h-16 font-bold border-white animate-glow border-2 px-3 rounded-xl py-1 pb-3 text-overflow-ellipsis whitespace-no-wrap overflow-hidden text-center'>{val.title}
        </div>
        <div
          className="relative flex-col group rounded-2xl cursor-pointer overflow-hidden bg-slate-800 duration-500 w-64 h-[20.5rem] shadow shadow-gray-600 mx-5 text-gray-50 p-2.5 grid justify-items-center bottom-3 z-10 "
        >
          <div className="text-center absolute -top-4"></div>
          <div className="">
            <div
              className=" rounded-3xl w-full h-[12rem] bg-blue-400"
            >


              {/* make image fir according to landscape also */}
              {/* https://images.firstpost.com/uploads/2022/10/BGMI-was-banned-in-July-this-year.-Will-the-battle-royale-make-a-comeback-this-year.jpg?im=FitAndFill=(596,336) */}
              <img src={val.thumbnail} className='h-full w-full rounded-xl border-solid aspect-video'></img>
              <div className='-left-24 relative bottom-2 px-2'><Like /></div>
              <div className='-right-1 relative bottom-2 px-2'><Save /></div>
            </div>
            <div
              className="absolute w-full left-0 px-5 overflow-hidden my-4">
              {/* <div className="absolute -z-10 left-0 w-64 h-28 ">
              </div> */}

              <Collaborators developersArray={val.developer_ids} />
              <p className="w-56 font-normal line-clamp-2">
                {val.description}
              </p>
            </div>
          </div>
        </div>

      </div>
      </Link>
    ))
  )
}

export default Card





//For responsive code is below (not executing correctly)


// import React, { useState } from 'react';
// import Like from './Like.jsx';
// import Save from './Save.jsx';

// const Card = ({ item }) => {
//   return (
//     <div className="grid gap-4">
//       {item.map((val) => (
//         <div
//           key={val.id || Math.random()} // Add unique key for each card
//           className="relative overflow-hidden rounded-lg shadow-md hover:scale-110 duration-500 md:w-1/2 lg:w-1/3" // Responsive grid layout
//         >
//           <div className="p-4 bg-zinc-800 text-gray-50">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="rounded-lg overflow-hidden">
//                 <img src={val.img} alt="Card Image" className="w-full h-48 object-cover rounded-lg" />
//                 <div className="absolute bottom-0 left-0 py-2 px-4 bg-green-900 opacity-75">
//                   <span className="text-xl font-bold text-white">{val.title || 'Clash Now'}</span>
//                   <p className="text-sm text-white line-clamp-2">{val.desc}</p>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center">
//                 <Like />
//                 <Save />
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;