import React, { useState, useEffect } from 'react';
import TeamSection from './TeamSection';
import { getRequest } from "@/api/api";
import Timeline from "@/components/HistoryTimeline/Timeline";

const AboutUsNew = () => {
    const [aboutUsData, setAboutUsData] = useState([]);
    const [timelineData, setTimelineData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await getRequest("/api/aboutus/getaboutus");
                setAboutUsData(response1);
                const response2 = await getRequest("/api/timeline/getalltimelines");
                setTimelineData(response2);
                setIsLoading(false); // Set isLoading to false after data is fetched
                //console.log("ab" + aboutUsData);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error (e.g., set an error state)
            }
        };

        fetchData();
    }, []);
    return (
        <>
            {isLoading  ? (
                <p>Loading...</p>
            ) : (
                <>
                    {Object.keys(aboutUsData).map((index, i) => {
                        
                            return <TeamSection data={aboutUsData[index]} key={i} />
                        
                    })}
                </>
            )}

            {isLoading  ? (
                <p>Loading...</p>
            ) : (
                <Timeline datas={timelineData.timeline} />
            )}


        </>
    )
}

export default AboutUsNew