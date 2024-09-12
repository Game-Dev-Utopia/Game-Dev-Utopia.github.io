import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const EventsList = ({ title, events }) => {
  const eventslist = events.map(event => ({
    id: event._id,
    name: event.eventName,
    imgurl: event.imageURL,
    date: event.eventDate,
  }));

  return (
    <div className="my-8">
      <h3 className="text-4xl md:text-5xl font-extrabold txt-grad ml-4 leading-loose">{title}</h3>
      {eventslist.length === 0 ? (
        <p className="text-center text:md md:text-lg ml-4 mt-2 text-yellow-600 font-semibold">
          We don&apos;t have any upcoming events for now. Keep visiting for further updates!
        </p>
      ) : (
        <div className="flex overflow-x-auto space-x-4 p-4">
          {eventslist.map((event, index) => (
            <div
              key={index}
              className="relative w-32 h-64 md:w-52 md:h-80 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0 group"
            >
              <Image
                src={event.imgurl}
                alt={event.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-2 md:p-4 transition-opacity duration-300">
                <h4 className="text-sm md:text-lg font-semibold">{event.name}</h4>
                <p className="text-xs md:text-sm">{new Date(event.date).toDateString()}</p>
                <Link href={`/events/${event.id}`}>
                  <button className="bg-black text-white w-full py-1 mt-2 rounded">Visit</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsList;
