"use client";
import EventDetails from "@/components/EventsDetails/EventDetails";


const page = ({params}) => {
  return (
    <EventDetails  params={params} />
  )
}

export default page