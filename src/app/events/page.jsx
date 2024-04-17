"use client";
import EventCard from '@/components/Events/OngoingEventCard'
import { events } from '@/data/event_details';
import PastEvents from '@/components/Events/PastEvents';
import Search from '@/components/Search';
import UpcomingEvents from '@/components/UpcomingEvents';
import { useEffect } from 'react';
import axios from '../../api/axios';

let categorizedEvents = {};
const {ongoing,past,upcoming} = events
let eventsArray = []

const categorize = (events)=>{
  const today = new Date();

  const pastEvents = [];
    const ongoingEvents = [];
    const upcomingEvents = [];

    events.forEach(event => {
        const eventStartsIn = new Date(event.startsIn);
        const eventEndsIn = new Date(event.endsIn);

        if (eventEndsIn < today) {
            pastEvents.push(event);
        } else if (eventStartsIn <= today && eventEndsIn >= today) {
            ongoingEvents.push(event);
        } else {
            upcomingEvents.push(event);
        }
    });

    return {
        past: pastEvents,
        ongoing: ongoingEvents,
        upcoming: upcomingEvents
    };
}

async function getEvents(){
const response = await axios.get('/api/event/getallevents');
eventsArray=response.data;
categorizedEvents = categorize(eventsArray);
console.log(categorizedEvents.ongoing);
}

export default function Page() {
  useEffect(()=>{
    getEvents();
  },[])

  return (
    <div className='bg-gray-900 p-4 space-y-8'>
        <Search />
      <section>
        <EventCard events={ongoing}/>
      </section>
      <section>
      <span className='flex gap-2 items-center'>
            <h1 className='text-3xl'>UPCOMING EVENTS</h1>
            <div className='px-2 flex-1 h-[5px] bg-[#f1dc90]'></div>
            </span>
            <div>
              <UpcomingEvents upcoming={upcoming}/>
            </div>
      </section>
        <section>
            <span className='flex gap-2 items-center'>
            <h1 className='text-3xl'>THROWBACKS</h1>
            <div className='px-2 flex-1 h-[5px] bg-[#f1dc90]'></div>
            </span>
            <div>
                <PastEvents past = {past}/>
            </div>
        </section>
    </div>
  )
}

