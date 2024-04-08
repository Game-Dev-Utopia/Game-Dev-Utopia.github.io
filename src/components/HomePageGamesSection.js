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
import { useState } from 'react'
const HomePageGame = () => {
    const [video,setVideo]  = useState([false,false,false])
    const [hover, setHover] = useState(false)
    const handleLeave = (e) => {
        setVideo(
            ()=>{
                let temp = [false,false,false]
                return temp
            }
        )
        setHover(false)
    }

    const toggleVideo = (i) => {
        setVideo(
            (prev)=>{
                let temp = [false,false,false]
                temp[i] = !prev[i]
                return temp
            }
        )
        setHover(true)
    }
    return (
        <section className={'flex h-[80dvh] relative bg-white hover:bg-transparent'}>
            <span onMouseEnter={()=>toggleVideo(0)}
                onMouseLeave={handleLeave}
                onClick={()=>toggleVideo(0)}
                className={`w-full ${!hover && styles.home_game_1} group bg-slate-950 relative`}>
                {!video[0]?(<Image
                    className={'object-fill group-hover:opacity-30 opactiy-100'}
                    src={'/images/home_page_thumbnails/first.png'}
                    fill={true}
                    alt='image-1' />):(
                    <video className={'object-fill absolute w-[33vw] h-[80vh] left-0  bg-slate-950 group-hover:opacity-30 opactiy-100 duration-200'} src={'/videos/video_1.mp4'} autoPlay={true} loop={true} muted={true} />
                    )}
                    <p className={'absolute text-justify px-2 z-10 bottom-1 duration-200 opacity-0 group-hover:opacity-100'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus ullam ratione laborum reiciendis distinctio perferendis culpa at. Pariatur, quasi.</p>
            </span>
            <span onMouseEnter={()=>toggleVideo(1)}
                onMouseLeave={handleLeave}
                className={`w-full group ${!hover && styles.home_game_2}`} >
                {!video[1]?(<Image
                    className='object-fill absolute -z-10 bg-slate-950 group-hover:opacity-30 opactiy-100 duration-200'
                    src={'/images/home_page_thumbnails/second.jpg'}
                    fill={true}
                    alt='image-2' />):(<video className={'object-fill w-[80vw] h-[80vh] absolute -z-10 bg-slate-950 group-hover:opacity-30 left-[10vw] opactiy-100 duration-200'} src={'/videos/video_1.mp4'} autoPlay={true} loop={true} muted={true} />)}
                    <p className={'absolute text-justify px-2 z-10 bottom-1 duration-200 opacity-0 group-hover:opacity-100 w-[33%]'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus ullam ratione laborum reiciendis distinctio perferendis culpa at. Pariatur, quasi.</p>
            </span>
            <span
                onClick={()=>toggleVideo(2)}
                onMouseLeave={handleLeave}
                onMouseEnter={()=>toggleVideo(2)} className={` bg-slate-950 w-full group ${!hover && styles.home_game_3} relative`}>
                {!video[2]?(<Image
                    className={'object-fill group-hover:opacity-30 opactiy-100'}
                    src={'/images/home_page_thumbnails/third.jpeg'}
                    fill={true}
                    alt='image-1' />):(
                    <video className={'object-fill absolute w-[33vw] h-[80vh] left-0 group-hover:opacity-30 opactiy-100 duration-200'} src={'/videos/video_1.mp4'} autoPlay={true} loop={true} muted={true} />
                    )}
                    <p className={'absolute text-justify px-2 z-10 bottom-1 duration-200 opacity-0 group-hover:opacity-100'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus ullam ratione laborum reiciendis distinctio perferendis culpa at. Pariatur, quasi.</p>
            </span>
        </section>
    )
}
export default function HomePageGamesSection() {

    return (
        <section >
            <h2 className="text-5xl text-headings">Games</h2>
            
            <div>
                <HomePageGame />
            </div>
        </section>
    )
}
