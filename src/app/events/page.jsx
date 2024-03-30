import EventCard from '@/components/Events/OngoingEventCard'
import { events } from '@/data/event_details';
import PastEvents from '@/components/Events/PastEvents';
import Search from '@/components/Search';
import UpcomingEvents from '@/components/UpcomingEvents';
const {ongoing,past,upcoming} = events

export default function Page() {
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

