import CardHolder from '@/components/CardHolder'
import CardHolderDynamic from '@/components/CardHolderDynamic'

import Timeline from '@/components/Timeline';

import aboutUsData from '@/utilities/aboutUsPageData';
import timelineData from '@/utilities/timelineData.js';

const page = () => {
    const founders = aboutUsData.foundersData;
    const headCouncil = aboutUsData.headCouncilData;
    const branches = aboutUsData.branchesData;
    return (
        <div className='bg-gradient-to-r from-indigo-500'>
            {/*
            <CardHolder datas={founders} />
            <CardHolder datas={headCouncil} />
            <CardHolderDynamic datas={branches} />
            */}
            <Timeline datas={timelineData}/>
        </div>
    )
}

export default page
