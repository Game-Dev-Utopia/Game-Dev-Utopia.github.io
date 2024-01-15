import TimelineCard from './TimelineCard';

const Timeline = ({ datas }) => {
    return (
        <div className='Timeline'>
            {datas.map((data, i) => <TimelineCard key={i} data={data} /> )}
        </div>
    );
}

export default Timeline;
