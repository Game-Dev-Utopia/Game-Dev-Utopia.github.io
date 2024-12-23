
'use client';
import LandingPage from "@/components/LandingPage/LandingPage";
import Sponser_Card from "@/components/Sponser_Card";
import HomePageDesignSection from "@/components/HomePage/index.js";

import Link from 'next/link'
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import '../styles/embla.css'
import axios from '../api/axios'
const OPTIONS = {
  loop: true,
}
import React,{ useEffect, useState } from "react";
import HoverCard from "@/components/visionMission/Card";
import HappeningNow from "@/components/HomePage/HappeningNow";



export default function Home() {
  const [SLIDES, setSlides] = useState([])
  async function fetchGames() {
    await axios.get('/api/game/homepagegames')
      .then((response) => {
        const { games } = response.data;
        console.log("games: ", games)
        setSlides(games)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchGames()
  }, [])

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    // Check the screen size on the initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <LandingPage/>
      <div className="flex flex-wrap justify-start">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10 w-full ">
          <div className="w-full md:w-[40vw] mr-9 ">
            <HoverCard
              title="VISION 🌟🌟"
              content="To become India's leading game development community encompassing members of all ages, equipped with industry-level expertise."
              isLargeScreen={isLargeScreen}
            />
          </div>
          <div className="w-full md:w-[40vw] mt-5 md:mt-0 mr-9 md:pl-9">
            <HoverCard
              title="MISSION 🚀🚀"
              content="To foster a thriving community of passionate individuals dedicated to video game production."
              isLargeScreen={isLargeScreen}
            />
          </div>
        </div>
      </div>
      {/* <HomePageCarousel images={images}/> */}
      <section id="games" className="relative space-y-4 z-10">
        <h1 className="w-fit my-5  txt-grad leading-loose text-4xl text-center mx-auto font-bold">Games</h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <span className="grid place-items-center">
          <Link href="/games" className="font-semibold text-lg p-2">
            <button className="bg-grad py-1 rounded-full see-more">See More &rarr;</button>
          </Link>
        </span>
      </section>
      <HomePageDesignSection />
      <HappeningNow />
      <Sponser_Card />
    </>
  )
}
