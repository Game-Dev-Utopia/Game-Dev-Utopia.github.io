import HomePageCarousel from "@/components/HomePageCarousel";
import HomePageGamesSection from "@/components/HomePageGamesSection";
import LandingPage from "@/components/LandingPage/LandingPage";
import Sponser_Card from "@/components/Sponser_Card";
const images = [
  "https://plus.unsplash.com/premium_photo-1675257062614-c1da6b8d83ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1675257062614-c1da6b8d83ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1675257062614-c1da6b8d83ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1675257062614-c1da6b8d83ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1675257062614-c1da6b8d83ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1675257062614-c1da6b8d83ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8fHww",
]
export default function Home() {
  return (
    <>
      <LandingPage />
      <HomePageCarousel images={images}/>
      <Sponser_Card />
    </>
  )
}
