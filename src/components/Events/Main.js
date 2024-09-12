
import { events } from '../../data/event_details';
import { useEffect, useState } from 'react'; // Import useState
import axios from '../../api/axios';
import EventSlider from './EventSlider';

export default function Main() {
  const [categorizedEvents, setCategorizedEvents] = useState({
    past: [],
    ongoing: [],
    upcoming: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEvents() {
      try {
        const response = await axios.get('/api/event/getallevents');
        const eventsArray = response.data;
        const categorizedEvents = categorize(eventsArray);
        setCategorizedEvents(categorizedEvents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false); 
      }
    }
    getEvents();
    
  }, [categorizedEvents]);

  // Function to categorize events
  const categorize = (events) => {
    const today = new Date();
    const pastEvents = [];
    const ongoingEvents = [];
    const upcomingEvents = [];

    events.forEach(event => {
        const eventStartsIn = event.startsIn ? new Date(event.startsIn) : null;
        const eventEndsIn = event.endsIn ? new Date(event.endsIn) : null;

        if (eventEndsIn && eventEndsIn < today) {
            pastEvents.push(event);
        } else if (eventStartsIn && eventStartsIn <= today && eventEndsIn && eventEndsIn >= today) {
            ongoingEvents.push(event);
        } else if (eventStartsIn && eventStartsIn > today) {
            upcomingEvents.push(event);
        }
    });

    return {
        past: pastEvents,
        ongoing: ongoingEvents,
        upcoming: upcomingEvents
    };
};


  return (
    <div className='bg-gray-900 my-11'>
      {loading ? ( // Show loading message while fetching
        <div className="text-white text-center">Loading events...</div>
      ) : (
        <EventSlider events={categorizedEvents} />
      )}
    </div>
  );
}
