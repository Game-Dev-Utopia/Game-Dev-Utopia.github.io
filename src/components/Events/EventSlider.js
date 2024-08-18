import React from 'react'
import EventsList from './EventsList'
import EventCarousell from './EventCarousell'

const EventSlider = ({ events }) => {
  const pastEvents = events.past;
  const ongoingEvents = events.ongoing;
  const upcomingEvents = events.upcoming;

  return (
    <div>
      <EventCarousell ongoingEvents={ongoingEvents} />
      <div className=" mx-auto py-8">
        <EventsList title="Upcoming Events" events={upcomingEvents} />
        <EventsList title="Past Events" events={pastEvents} />

      </div>
    </div>
  )
}

export default EventSlider
