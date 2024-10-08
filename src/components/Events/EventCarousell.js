import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import Clock from './Clock'; // Ensure the Clock component is correctly imported
import './Events.css'; // Import custom CSS file
import Link from 'next/link';

const EventCarousell = ({ ongoingEvents }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [events, setEvents] = useState([]);

  const defaultevents = [
    {
      avatar: "./images/events/event_1.jpg",
      name: "GameDevUtopia Exhibition",
      shortDescription: "GameDevUtopia organized an exhibition for PICT students, showcasing a diverse range of games and designs developed under GDU PICT.",
    },
    {
      avatar: "./images/events/event_2.jpg",
      name: "Defold",
      shortDescription: "Defold gamejam",
    },
    {
      avatar: "./images/events/event_3.jpg",
      name: "Blender Workshop",
      shortDescription: "Workshop held in PICT about blender",
    },
    {
      avatar: "./images/events/event_5.jpg",
      name: "Session at IIIT Nagpur",
      shortDescription: "An Introductory session about Gamedevutopia.",
    }
  ];

  const eventslist = ongoingEvents.map(event => ({
    host: "GameDevUtopia",
    name: event.eventName,
    avatar: event.imageURL,
    shortDescription: "Event Description",
    startDate: event.startsIn,
    isDefault: false, // Adding this flag to distinguish between default and ongoing events
  }));

  useEffect(() => {
    if (ongoingEvents.length > 0) {
      setEvents(eventslist);
    } else {
      // Adding the isDefault flag for default events
      setEvents(defaultevents.map(event => ({ ...event, isDefault: true })));
    }
  }, [ongoingEvents]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div
      className="relative h-[85vh] md:h-[90vh] flex flex-col lg:flex-row bg-cover bg-center transition-background duration-500"
      style={{
        backgroundImage: `url(${events[activeIndex]?.avatar || 'default-image-url'})`,
      }}
    >
      {/* Left section for active event details */}
      <div className="relative lg:w-2/5 p-8  bg-opacity-70 flex flex-col justify-center z-10 rounded-lg shadow-lg 
                md:bg-gradient-to-r from-black via-gray-800 to-transparent 
                bg-gradient-to-b sm:from-black sm:via-gray-800 sm:to-transparent">
        {events[activeIndex] && (
          <>
            <h2 className="md:text-5xl text-3xl text-white font-bold mb-4">{events[activeIndex].name}</h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-400">{events[activeIndex].shortDescription}</p>
            
            {/* Conditionally render host, start date, and register link for non-default events */}
            {!events[activeIndex].isDefault && (
              <>
                <h3 className="text-2xl font-semibold mb-4">{events[activeIndex].host}</h3>
                <div className="text-xl mb-6 font-medium">
                  <Clock targetDate={events[activeIndex].startDate} />
                </div>
                <Link
                  href={events[activeIndex].registerLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center px-8 py-3 button-rounded md:w-1/2 w-3/4 transition duration-300"
                >
                  Register Now
                </Link>
              </>
            )}
          </>
        )}
      </div>

      {/* Slider section */}
      <div className="absolute bottom-0 right-0 z-20 p-4 lg:w-1/2 sm:w-full">
        <Swiper
          key={events.length}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          navigation={true}
          pagination={{ clickable: false }}
          onSlideChange={handleSlideChange}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="w-[350px] h-[150px] md:w-[400px] md:h-[150px] lg:w-[500px] lg:h-[250px]"
          slidesPerView={3}
          autoplay={{
            delay: 10000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interactions
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${event.avatar})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Slide content if needed */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventCarousell;
