import Image from 'next/image';

const TimelineCard = ({ data }) => {
    console.log(1);
    return (
        <div className='Achievement'>
            <Image 
                src={data.image}
                width="300"
                height="300"
                className='w-[3%] absolute rounded-[50%] border-white border-[0.3vw] left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2'
            />
            <p className='Achievement-time'>{data.date}</p>
            <div className='bg-white'>
                <div className='Achievement-detail'>
                    <h1><b>{data.title}</b></h1>
                    <h3>{data.altName}</h3>
                    <ul>
                        { data.details.map((detail, i) => <li key={i}>{detail}</li>) }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TimelineCard;
