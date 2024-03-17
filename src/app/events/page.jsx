import EventCard from '@/components/Events/OngoingEventCard'
import SearchBar from '@/components/Events/SearchBar'
import React from 'react';
import { events } from '@/data/event_details';
import PastEvents from '@/components/Events/PastEvents';
const {ongoing,past} = events
export default function page() {
  return (
    <div className='bg-gray-900 p-4 space-y-4'>
        <SearchBar />
        <EventCard events={ongoing}/>
        <section>
            <span className='flex gap-2 items-center'>
            <h1 className='text-3xl'>THROWBACKS</h1>
            <div className='px-2 flex-1 h-[1px] border-2 border-[#f1dc90]'></div>
            </span>
            <div>
                <PastEvents past = {past}/>
            </div>
        </section>
    </div>
  )
}

