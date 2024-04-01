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
    console.log(branches);
    console.log(topContributionsAndProjects);

    return (
        <div className='bg-gray-600'>
            <CardHolder datas={headCouncil} />
            <CardHolderDynamic datas={branches} />
            <CardHolder datas={ourTeams} />
            <CardHolder datas={specialThanks} />
            <CardHolderDynamic datas={topContributionsAndProjects} />
            <Timeline datas={timelineData}/>
        </div>
    )
}

export default page
