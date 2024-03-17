'use client';
import { useRouter } from 'next/navigation'
import eventsData from '@/utilities/EventDetailsData'
import Accordian from '@/components/EventsDetails/Event-Details-Accordian';
import Title from '@/components/EventsDetails/Event-Details-Title';
import CountDown from '@/components/EventsDetails/Event-Details-CountDown';

const EventPageLayout = ({ params }) => {
    const videoUrl              = params.videoUrl;
    const eventName             = params.eventName;
    const starCount             = params.starCount;
    const prizes                = params.prizes;
    const registrationDeadline  = params.registrationDeadline;
    const startsIn              = params.startsIn;
    const endsIn                = params.endsIn;
    const individualOrganizers  = params.individualOrganizer;
    const organizers            = params.organizers;
    const rules                 = params.rules;
    // console.log(videoUrl);

    return (
        <div className='block bg-Event w-full h-full'>
            <Title name={eventName} rating={starCount} />
            <Accordian title={"Prizes"} datas={prizes}/>
            <CountDown deadLine={registrationDeadline} start={startsIn} end={endsIn}/>
            <Accordian title={"Rules"} datas={rules}/>
        </div>
    )

}


const page = ({params}) => {
    const router = useRouter(); // Whats this for?
    const eventName = params.event;
    var event = null;


    for (let index = 0; index < eventsData.events.length; index++) {
        const element = eventsData.events[index];
        if(element.eventName.replace(" ", "").toLowerCase() == eventName.toLowerCase())
            event = element;
        
    }
    // console.log(event);
    if(event == null)
        return <p>{eventName}: Does not exist </p>
        
    return <EventPageLayout params={event}/>
}

export default page;