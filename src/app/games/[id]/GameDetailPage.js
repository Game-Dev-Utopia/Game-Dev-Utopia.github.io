"use client";
import React, { useEffect, useState } from "react";
import { getRequest } from "@/api/api";
import Games from "@/components/Games/index.js";
import GameDesignDetails from "@/components/Games/games.js";
import LoadingSpinner from "@/components/LoadingSpinner";
const GameDetailPage = ({ id }) => {
  const [game, setgame] = useState();
  const [loading, setLoading] = useState(false);
  const fetchgame = async () => {
    try {
      setLoading(true);
      const response = await getRequest(`api/game/getgame/${id}`);
      console.log("Response:", response);
      setgame(response);
    } catch (error) {
      console.error("Error fetching game data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchgame();
  }, []);

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
  return game ? (
    <div>
      <Games gameData={game} />
      <GameDesignDetails gameData={game} />
    </div>
  ) : (
    <></>
  );
};

export default GameDetailPage;
