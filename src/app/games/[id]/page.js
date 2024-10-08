import React from 'react'
import GameDetailPage from './GameDetailPage';
import GameDesignDetails from '@/components/GameDesignDetails';
import { getRequest } from '@/api/api';

export async function generateStaticParams() {
  try {
    const response = await getRequest('/api/game/getallgames');
    const games = await response.games;
    
    return games.map(e => ({
      id: e._id.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch events", error);
    return [];
  }
}

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