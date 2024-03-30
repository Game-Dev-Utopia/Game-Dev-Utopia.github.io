"use client"
import Image from 'next/image'
/**
 * @typedef {Object} GameMedia
 * @property {string} img
 * @property {string} video
 * @type {GameMedia[]} games_media
 */

// import games_media from '../data/home_page_thumbnails'

import styles from '../styles/HomePageGame.module.css'
const HomePageGame = ()=>{
    return(
        <section className='flex justify-between w-screen h-[80dvh] bg-white relative'>
            <span className={`w-full ${styles.home_game_1} relative`}>
                <Image 
                className='object-cover'
                src={'/images/home_page_thumbnails/first.png'}
                fill={true}
                alt='image-1'/>
            </span>
            <span className={`w-full ${styles.home_game_2}`} >
                <Image 
                className='object-cover -z-10'
                src={'/images/home_page_thumbnails/second.jpg'}
                fill={true}
                alt='image-1'/>
            </span>
            <span className={`w-full ${styles.home_game_3} relative`}>
                <Image 
                className='object-cover '
                src={'/images/home_page_thumbnails/third.jpeg'}
                fill={true}
                alt='image-1'/>
            </span>
        </section>
    )
}
export default function HomePageGamesSection() {

    return (
    <section >
        <h2 className="text-5xl text-headings">Games</h2>
        <div>
            <HomePageGame/>
        </div>
    </section>
  )
}
