import CardHolder from '@/components/AboutUsCards/CardHolder'
import CardHolderDynamic from '@/components/AboutUsCards/CardHolderDynamic'

import Timeline from '@/components/HistoryTimeline/Timeline';

import aboutUsData from '@/utilities/aboutUsPageData';
import timelineData from '@/utilities/timelineData.js';

const page = () => {
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
            <Timeline datas={timelineData}/> 
        </div>
    )
}

export default page
