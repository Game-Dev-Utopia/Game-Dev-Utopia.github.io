"use client";
import EventCard from '@/components/Events/OngoingEventCard'
import { events } from '@/data/event_details';
import PastEvents from '@/components/Events/PastEvents';
import Search from '@/components/Search';
import UpcomingEvents from '@/components/UpcomingEvents';
import { useEffect, useState } from 'react'; // Import useState
import axios from '../../api/axios';

export default function Page() {
  const [categorizedEvents, setCategorizedEvents] = useState({
    past: [],
    ongoing: [],
    upcoming: []
  });

  useEffect(() => {
    async function getEvents() {
      try {
        const response = await axios.get('/api/event/getallevents');
        const eventsArray = response.data;
        const categorizedEvents = categorize(eventsArray);
        setCategorizedEvents(categorizedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    getEvents();
  }, []);

  // Function to categorize events
  const categorize = (events) => {
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

  return (
    <div className='bg-gray-900 p-4 space-y-8'>
      {/* <Search /> */}
      <section>
        { 
        categorizedEvents.ongoing.length?(
        <EventCard events={categorizedEvents.ongoing}/>
      ):(
        <>
        <span className='flex gap-2 items-center'>
          <h1 className='text-3xl'>ONGOING EVENTS</h1>
          <div className='px-2 flex-1 h-[5px] bg-[#f1dc90]'></div>
        </span>
          <h1 className='text-5xl w-fit my-3 mx-auto'>No Ongoing Events</h1>
        </>
        ) }
      </section>
      <section>
        <span className='flex gap-2 items-center'>
          <h1 className='text-3xl'>UPCOMING EVENTS</h1>
          <div className='px-2 flex-1 h-[5px] bg-[#f1dc90]'></div>
        </span>
        <div>
          <UpcomingEvents upcoming={categorizedEvents.upcoming}/> {/* Pass categorizedEvents */}
        </div>
      </section>
      <section>
        <span className='flex gap-2 items-center'>
          <h1 className='text-3xl'>THROWBACKS</h1>
          <div className='px-2 flex-1 h-[5px] bg-[#f1dc90]'></div>
        </span>
        <div>
          <PastEvents past={categorizedEvents.past}/> {/* Pass categorizedEvents */}
        </div>
      </section>
    </div>
  );
}
