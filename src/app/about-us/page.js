import CardHolder from '@/components/CardHolder'
import aboutUsData from '@/utilities/aboutUsPageData';

const page = () => {

    const founders = aboutUsData.foundersData;
    const headCouncil = aboutUsData.headCouncilData;
    const branches = aboutUsData.branchesData;

    return (
        <div className='bg-gray-700'>
            <CardHolder datas={founders} />
            <CardHolder datas={headCouncil} />
            <CardHolder datas={branches} />
        </div>
    )
}

export default page
