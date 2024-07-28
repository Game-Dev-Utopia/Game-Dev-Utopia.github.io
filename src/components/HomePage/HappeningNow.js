import React, { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import axios from '../../api/axios';

// import required modules
import { EffectCoverflow, Pagination ,Navigation} from 'swiper/modules';
import Link from 'next/link';

const HappeningNow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    async function getEvents() {
      try {
        const response = await axios.get('/api/event/getallevents');
        console.log(response.data);
        const eventsArray = response.data;

        // Populate slides array with events
        const updatedSlides = eventsArray.map(event => ({
          title: event.eventName,
          date: event.startsIn ? new Date(event.startsIn).toISOString().slice(0, 10) : "",
          description: event.description, // Assuming your event object has a 'description' property
          image: event.imageURL // Assuming your event object has an 'imageURL' property
        }));

        setSlides(updatedSlides);
        console.log(updatedSlides);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    getEvents();
  }, []);

  console.log(slides);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex); // Use realIndex to get the actual slide index
  };

  return (
    <>
    <h1 className='txt-grad leading-loose text-4xl text-center mx-11 font-bold'>Events Center</h1>

<main className="relative w-[min(90rem,90%)] mx-auto  gap-12 py-[min(20vh,3rem)] flex flex-col lg:flex-row">
  <div className="lg:w-1/3 p-4">
    {slides[activeIndex] && (
      <>
        <span className="uppercase tracking-[1.5px] text-base text-gray-400">{slides[activeIndex].date}</span>
        <h1 className="capitalize tracking-[0.8px] font-roboto font-black text-[clamp(1.4375rem,1.5rem_+_0.23vw,2rem)] bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
          {slides[activeIndex].title}
        </h1>
        <hr className="block bg-blue-800 h-1 w-24 border-none my-4" />
        <p className="leading-6 text-gray-300">{slides[activeIndex].description}</p>
        <a
          href={slides[activeIndex].link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-uppercase text-gray-800 font-medium bg-white border-2 border-gray-300 rounded-full transition duration-300 ease-in-out mt-8 py-2 px-6 hover:border-blue-800 hover:text-blue-800"
        >
          Register
        </a>
      </>
    )}
  </div>
  <div className="lg:w-2/3 p-4">
    <Swiper
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
      navigation={true} // Enable navigation buttons
      className="w-full h-[20rem] md:h-[30rem] lg:h-[25rem] xl:h-[30rem]" // Set height for Swiper
      onSlideChange={handleSlideChange}
      modules={[EffectCoverflow, Navigation]}
      pagination={{ clickable: false }} // Disable pagination dots
      breakpoints={{
        640: { slidesPerView: 1 }, // Display 1 slide per view on screens narrower than 640px (mobile)
        768: { slidesPerView: 3 }, // Display 3 slides per view on screens wider than 768px (tablet and above)
        1024: { slidesPerView: 3 },
        1560: { slidesPerView: 3 },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{
            background: `linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(${slide.image}) no-repeat center/cover`,
          }}
        />
      ))}
    </Swiper>
  </div>
</main>
<div className="grid place-items-center">
<Link href="/events" ><button className='button-rounded mx-auto mb-5'>See More → </button> </Link>
</div>


    </>
  );
};

export default HappeningNow;
