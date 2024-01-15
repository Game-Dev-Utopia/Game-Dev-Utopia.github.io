import TimelineCard from './TimelineCard';

const Timeline = ({ datas }) => {
    return (
        <div className='h-[90vh] overflow-y-scroll overflow-x-hidden'>
            <div className='Timeline'>
                {datas.map((data, i) => <TimelineCard key={i} data={data} /> )}
            </div>
        </div>
    );
}

export default Timeline;
