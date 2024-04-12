"use client"
import Image from 'next/image'
import { register } from 'swiper/element/bundle'
import styles from '../styles/HomePageGame.module.css'
import { useEffect, useState } from 'react'
export default function HomePageGamesSection() {
    useEffect(() => {
        register();
    },[])
    return (
        <section >
            <h2 className="text-5xl text-headings">Games</h2>
            <div className='flex flex-col md:flex-row'>
                <div className='max-w-md md:max-w-2xl mx-auto'>
                    <swiper-container 
                    speed="500"
                    css-mode="true" 
                    navigation='true'
                    style={{display:'flex',gap:'3rem'}}
                    effect="coverflow" grab-cursor="true" centered-slides="true"
                    slides-per-view="3" 
                    rotate="50" 
                    stretch="10" 
                    depth="100"
                    modifier="1"
                    scale="2"
                    >
                        {"1234567".split('').map((item,index)=>(
                            <swiper-slide key={index}>
                            <Image src={"https://plus.unsplash.com/premium_photo-1678112180588-5d4ed9eabeea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbWVzfGVufDB8MHwwfHx8MA%3D%3D"} width={1600} height={900} alt={"image"} layout='responsive' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, recusandae?</p>
                        </swiper-slide>
                        ))}
                        
                        {/* <swiper-slide>
                            <Image src={"https://plus.unsplash.com/premium_photo-1678112180588-5d4ed9eabeea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbWVzfGVufDB8MHwwfHx8MA%3D%3D"} width={1600} height={900} alt={"image"} layout='responsive' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, recusandae?</p>
                        </swiper-slide>
                        <swiper-slide>
                            <Image src={"https://plus.unsplash.com/premium_photo-1678112180588-5d4ed9eabeea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbWVzfGVufDB8MHwwfHx8MA%3D%3D"} width={1600} height={900} alt={"image"} layout='responsive' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, recusandae?</p>
                    </swiper-slide> */}
                    </swiper-container> 
                </div>
            </div>
        </section>
    )
}
