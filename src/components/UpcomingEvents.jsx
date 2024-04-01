import React from 'react'
import Modal from './Modal'

export default function UpcomingEvents({upcoming}) {
    const images = upcoming.map((event)=>event.imgUrl)
  return (
    <div>
        <Modal images={images} />
    </div>
  )
}
