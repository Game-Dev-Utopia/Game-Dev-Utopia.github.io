/* eslint-disable @next/next/no-img-element */
import React from 'react'
export default function Modal({images}) {
  return (
    <div className='transition-all my-2 ease-in-out w-full h-screen overflow-y-scroll left-2 rounded-md p-3 overflow-scroll' id='modal'>
        <div className='columns-1 sm:columns-2 md:columns-3 space-y-4 p-2'>
        {
            images.map((image,index) => {
                return <img key={index} src={image} alt={'image'+ index} className=' hover:scale-[1.05] transition-all duration-100'/>
            })
        }
        </div>
    </div>
  )
}
