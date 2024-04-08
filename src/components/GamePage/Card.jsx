import React, { useState } from 'react'

import Like from "./Like"
import Save from "./Save"

const Card = ({ item }) => {
  return (
    item.map((val, i) => (

      <div key={i} className='relative hover:scale-110 grid justify-items-center z-20 font-bold '>
        <div className='w-36 max-h-16 pb-2 font-bold border-white animate-glow border-2 px-3 rounded-2xl pt-1 text-overflow-ellipsis whitespace-no-wrap overflow-hidden text-center'>{val.title}
        </div>
        <div
          className="relative flex-col group rounded-3xl cursor-pointer overflow-hidden bg-slate-800 duration-500 w-64 h-[24rem] shadow shadow-gray-600 mx-5 text-gray-50 p-5  grid justify-items-center bottom-3 z-10 "
        >
          <div className="text-center grid justify-items-center absolute -top-4 my-0  pt-3 px-3 border-solid border-l-2 border-r-2 "></div>
          <div className="">
            <div
              className=" rounded-3xl w-full h-[16rem] bg-blue-400"
            >

              <img src={val.img} className='h-full w-full rounded-3xl border-solid '></img>
              <div className='left-0 absolute px-2 pb-8 ml-4 '><Like /></div>
              <div className='right-0 absolute pb-8  px-2'><Save /></div>
            </div>
            <div
              className="absolute w-full left-0 p-5 pt-2 overflow-hidden   my-4"
            >
              <div
                className="absolute -z-10 left-0 w-64 h-28 "
              >

              </div>

              <span className="text-xl font-bold ">{val.category}</span>
              <p className="w-56 duration-500 line-clamp-2">
                {val.description}
              </p>
            </div>
          </div>
        </div>

      </div>

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