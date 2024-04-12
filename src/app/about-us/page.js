"use client";
import { useEffect, useState } from 'react';
import CardHolder from '@/components/AboutUsCards/CardHolder'
import CardHolderDynamic from '@/components/AboutUsCards/CardHolderDynamic'
import { getRequest } from '@/api/api';
import Timeline from '@/components/HistoryTimeline/Timeline';

//import aboutUsData from '@/utilities/aboutUsPageData';
import timelineData from '@/utilities/timelineData.js';

const page = () => {
    const[aboutUsData , setAboutUsData] = useState([]);
    const [timelineData, setTimelineData] = useState([ ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await getRequest('/api/aboutus/getcontent');
                setAboutUsData(response1);
                const response2 = await getRequest('/api/timeline/getalltimelines');
                console.log("res1", response1);
                console.log("res2", response2);
                
                setTimelineData(response2);
                //setDataFetched(true); // Update state when data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error (e.g., set an error state)
            }
        };

        fetchData();
    }, []);

    const headCouncil = aboutUsData.headCouncilData;
    const branches = aboutUsData.branchesData;
    const ourTeams = aboutUsData.OurTeamsData;
    const specialThanks = aboutUsData.SpecialThanksData;
    const topContributionsAndProjects = aboutUsData.topContributionsAndProjects;

    return (
        <div className='bg-hero'>
            {Object.keys(aboutUsData).map((index, i) => {
                const data_length = aboutUsData[index].length;
                if (data_length > 1)
                    return <CardHolderDynamic datas={aboutUsData[index]} key={i}/>
                else
                    return <CardHolder datas={aboutUsData[index]} key={i}/>
            })}
            {/* <CardHolder datas={headCouncil} />
            <CardHolderDynamic datas={branches} />
            <CardHolder datas={ourTeams} />
            <CardHolder datas={specialThanks} />
        <CardHolderDynamic datas={topContributionsAndProjects} />*/}
            {timelineData && <Timeline datas={timelineData.timeline}/> }
        </div>
    )
}

export default page
