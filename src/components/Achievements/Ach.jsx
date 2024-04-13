import React, { useEffect, useState } from "react";
import AchievementsList from "@/components/Achievements/AchievementList";
import Top3Achievements from "@/components/Achievements/Top3Achievements";
import { getRequest } from "@/api/api";

const Ach = () => {
  const [top3, setTop3] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("/api/achievement/getachievements");
        setTop3(response.top3Achievements);
        setAchievements(response.achievements);
        setIsLoading(false); // Set isLoading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error (e.g., set an error state)
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Top3Achievements Top3Data={top3} />
          <AchievementsList datas={achievements} />
        </>
      )}
    </div>
  );
};

export default Ach;
