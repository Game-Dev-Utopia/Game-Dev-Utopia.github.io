import CardHolder from '@/components/CardHolder'
import CardHolderDynamic from '@/components/CardHolderDynamic'
import aboutUsData from '@/utilities/aboutUsPageData';

const page = () => {
    const founders = aboutUsData.foundersData;
    const headCouncil = aboutUsData.headCouncilData;
    const branches = aboutUsData.branchesData;

    return (
        <div className='bg-gradient-to-r from-indigo-500'>
            <CardHolder datas={founders} />
            <CardHolder datas={headCouncil} />
            <CardHolderDynamic datas={branches} />
        </div>
    )
}

export default page
