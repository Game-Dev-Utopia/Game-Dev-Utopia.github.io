"use client";
import React, { useEffect, useState } from "react";
import Card from "../../components/GamePage/Card";
import Filter from "../../utilities/Filter";
import { getRequest } from "@/api/api";
const Gamepage = () => {
  const [Data, setData] = useState([]);
  const [item, setItem] = useState(Data);
  const [filterCount, setFilterCount] = useState(0);
  const menu = [...new Set(Data.map((val) => val.category))];
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    Puzzle: false,
    Action: false,
    Survival: false,
    Strategy: false,
    Adventure: false,
    Platformer: false,
    Shooting: false,
    Stealth: false,
    Incremental: false,
    Simulation: false,
    RPG: false,
    Casual: false,
    Mobile: false,
    PC: false,
    Quick: false,
    Heavy: false,
    "2D": false,
    "3D": false,
    Downloadable: false,
  });

  const addFilters = (filter) => {
    setFilters((prev) => ({ ...prev, [filter]: true }));
    setFilterCount(filterCount + 1);
  };
  const removeFilters = (filter) => {
    setFilters((prev) => ({ ...prev, [filter]: false }));
    if (filterCount > 0) setFilterCount(filterCount - 1);
  };
  const clearAllFilters = () => {
    setFilters({
      Puzzle: false,
      Action: false,
      Survival: false,
      Strategy: false,
      Adventure: false,
      Platformer: false,
      Shooting: false,
      Stealth: false,
      Incremental: false,
      Simulation: false,
      RPG: false,
      Casual: false,
      Mobile: false,
      PC: false,
      Quick: false,
      Heavy: false,
      "2D": false,
      "3D": false,
      Downloadable: false,
    });
    setFilterCount(0);
  };

  async function fetchData() {
    const response = await getRequest("/api/game/getallgames");
    // console.log(response.games)
    setData(response.games);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredGames = Data.filter(
      (game) =>
        ((!filters.Action &&
          !filters.Puzzle &&
          !filters.Survival &&
          !filters.Strategy &&
          !filters.Adventure &&
          !filters.Platformer &&
          !filters.Shooting &&
          !filters.Stealth &&
          !filters.Incremental &&
          !filters.Simulation &&
          !filters.RPG &&
          !filters.Casual) ||
          game.categories.some((category) => filters[category])) &&
        ((!filters.Heavy && !filters.Quick) || filters[game.size]) &&
        ((!filters["2D"] && !filters["3D"]) || filters[game.dimension]) &&
        ((!filters.Mobile && !filters.PC) ||
          game.device.some((device) => filters[device])) &&
        (!filters.Downloadable || game.downloadable === true)
    );

    setItem(filteredGames);
  }, [filters, Data]);

  return (
    <div className="bg-slate-900 sm:min-h-screen">
      <div className="sticky top-[3.5rem] z-20 ">
        <Filter
          menu={menu}
          addToFilterList={addFilters}
          setItem={setItem}
          removeFromFilterList={removeFilters}
          clearFilters={clearAllFilters}
          filterCount={filterCount}
        />
      </div>

      {/* Scrollable content section */}
      <div className="overflow-y-auto py-16 z-10 relative">
        <div className="flex flex-wrap justify-center gap-y-10">
          
          {loading ? ( // Show loading message while fetching
            <div className="text-white text-center">Loading events...</div>
          ) : (
            item.length > 0 ? (
              <Card item={item} />
            ) : (
              <p className="text-white">
                Currently no games available for selected filters
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Gamepage;
