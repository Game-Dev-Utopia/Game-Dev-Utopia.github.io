import React from 'react'
import Modal from './Modal'

export default function UpcomingEvents({upcoming}) {
  if(upcoming.length<1){
    return <h1 className='text-5xl w-fit my-3 mx-auto'>Coming Soon</h1>
  }
    const images = upcoming.map((event)=>event.imgUrl)
  return (
    <div>
        <Modal images={images} />
    </div>
  )
}
