import Image from 'next/image';

const TimelineCard = ({ data }) => {
    console.log(1);
    return (
        <div className='Achievement'>
            <Image 
                src={data.image}
                width="300"
                height="300"
                className='w-[3%] h-auto z-20 absolute rounded-[50%] border-white border-[0.3vw] left-[80%] scale-150 md:left-1/2 md:scale-100 bottom-1/2 -translate-x-1/2 translate-y-1/2'
            />
            <p className='Achievement-time'>{data.date}</p>
            <div className='Achievement-tag'></div>
            <div className='Achievement-detail'>
                <div className='Achievement-detail-inner'>
                </div>
                <h1 className='Achievement-title'><b>{data.title}</b></h1>
                <h3 className='Achievement-title'>{data.altName}</h3>
                <ul className='Achievement-details list-disc'>
                    { data.details.map((detail, i) => <li key={i}>{detail}</li>) }
                </ul>
            </div>
        </div>
    );
}

export default TimelineCard;
