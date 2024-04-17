
'use client';
// import HomePageGamesSection from "@/components/HomePageGamesSection";
import LandingPage from "@/components/LandingPage/LandingPage";
import Sponser_Card from "@/components/Sponser_Card";
import HomePageDesignSection from "@/components/HomePage/index.js";
// import HomePageCarousel from "@/components/HomePageCarousel";
import Link from 'next/link'
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import '../styles/embla.css'
import axios from '../api/axios'
const OPTIONS = { loop: true }

let SLIDES = []
async function fetchGames() {
  await axios.get('/api/game/getallgames')
    .then((response) => {
      const { games } = response.data;
      SLIDES = games.slice(0, 5)
    })
    .catch((error) => {
      console.log(error)
    })
}

fetchGames()

// const images = [
//   "https://plus.unsplash.com/premium_photo-1675257062614-c1da6b8d83ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8fHww",
//   "https://plus.unsplash.com/premium_photo-1675257062614-c1da6b8d83ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8fHww",
//   "https://plus.unsplash.com/premium_photo-1675257062614-c1da6b8d83ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8fHww",
//   "https://plus.unsplash.com/premium_photo-1675257062614-c1da6b8d83ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8fHww",
//   "https://plus.unsplash.com/premium_photo-1675257062614-c1da6b8d83ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8fHww",
//   "https://plus.unsplash.com/premium_photo-1675257062614-c1da6b8d83ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8fHww",
// ]

export default function Home() {
  return (
    <>
      <LandingPage />
      {/* <HomePageCarousel images={images}/> */}
      <section id="games relative space-y-4 z-10">
        <h1 className="w-fit mx-auto text-2xl text-[yellow] my-2">Games</h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <span className="grid place-items-center">
          <Link href="/games" className="font-semibold text-xl p-2 ">
            <button>
            See More &rarr;
            </button>
            </Link>
        </span>
      </section>
      <HomePageDesignSection />
      <Sponser_Card />
    </>
  )
}