import EventDetails from "@/components/EventsDetails/EventDetails";
import { getRequest } from '@/api/api';

export async function generateStaticParams() {
  try {
    const response = await getRequest('/api/event/getallevents');
    const events = await response;


    return events.map(e => ({
      id: e._id.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch events", error);
    return [];
  }
}

const page = ({params}) => {
  return (
    <EventDetails  params={params} />
  )
}

export default page