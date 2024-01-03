import GameDesignDetails from '@/components/GameDesignDetails'
import React from 'react'
import Image from 'next/image'
const GamePage = () => {
  return (
    <div className='bg-[#0f000c] fixed h-[100vh]'>
      <div className='absolute top-0 left-0 -z-10'>
      <Image src="/bg.svg" alt="img" width={'1000'} height={'500'}/>
      </div>
    <div >
    </div>
    <GameDesignDetails />
    </div>
  )
}

export default GamePage