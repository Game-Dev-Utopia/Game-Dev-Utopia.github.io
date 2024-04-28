"use client";
import React from 'react'
import GameDetailPage from './GameDetailPage';
import GameDesignDetails from '@/components/GameDesignDetails';

const page = ({params}) => {
  const id=params.id;
  console.log(id);
  
  return (
    <div>
      <GameDetailPage id={id} />
      
    </div>
  )
}

export default page