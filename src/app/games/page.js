import GameDesignDetails from '@/components/GameDesignDetails'
import React from 'react'
import Games from '@/components/Games'
const GamePage = () => {
  return (
    <div>
    <div className='relative flex justify-center'>
    <div >
    <div className='game-design-container mb-4 p-2'>
    <Games />
    </div>
    <div className='game-info-container mt-4 p-2'>
    <GameDesignDetails />
    </div>
    </div>
    </div>
    </div>
  )
}

export default GamePage