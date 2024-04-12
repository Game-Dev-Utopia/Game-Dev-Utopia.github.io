"use client";
import { useEffect, useState } from 'react';
import AchievementsList from "@/components/Achievements/AchievementList";
import Top3Achievements from "@/components/Achievements/Top3Achievements";
import achievements from "@/utilities/Achievements"
import { getRequest } from '@/api/api';

const page = () =>{

    //const Top3 = achievements.top3Achievements;
    //const Achievements = achievements.achievements;

    const[Top3 , setTop3] = useState([]);
    const [Achievements, setAchievements] = useState([ ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRequest('/api/achievement/getachievements');
                console.log("response: " + JSON.stringify(response));
                setTop3(response.top3Achievements);
                setAchievements(response.achievements);
                //setDataFetched(true); // Update state when data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error (e.g., set an error state)
            }
        };

        fetchData();
    }, []);

    return( 
        <div>
            <Top3Achievements Top3Data={Top3}/>
            <AchievementsList datas={Achievements}/>
        </div>
    )

}
export default page
