"use client";
import React, { useEffect, useState } from 'react'
import { getRequest } from '@/api/api';
import Games from '@/components/Games/index.js';
import GameDesignDetails from '@/components/Games/games.js';
const GameDetailPage = ({id}) => {
    const [game, setgame] = useState();

      const fetchgame= async () => {
        try {
          const response = await getRequest(`api/game/getgame/${id}`);
          console.log("Response:", response);
          setgame(response);
        } catch (error) {
          console.error('Error fetching game data:', error);
        }
      }
      useEffect(() => {
        fetchgame();
      }, []);
      

  return game ? (
    <div>
     <Games gameData={game} />
     <GameDesignDetails gameData={game}/>
     </div>
  ):<></>
}

export default GameDetailPage