import CardHolder from '@/components/CardHolder'
import CardHolderDynamic from '@/components/CardHolderDynamic'

import Timeline from '@/components/Timeline';

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
        <div className='bg-black'>
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
