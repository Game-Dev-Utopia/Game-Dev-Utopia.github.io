'use client';
import HomePageGamesSection from "@/components/HomePageGamesSection";
import LandingPage from "@/components/LandingPage/LandingPage";
import Sponser_Card from "@/components/Sponser_Card";
import HomePageDesignSection from "@/components/HomePage/index.js";

export default function Home() {
  return (
    <>
      <LandingPage />
      <HomePageGamesSection />
      <HomePageDesignSection />
      <Sponser_Card />
    </>
  )
}
