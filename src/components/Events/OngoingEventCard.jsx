import React from "react";
import Image from "next/image";
import {imageContainer} from '../../styles/events_page.module.css'
import Timer from "../Timer";
import Carousel from '@/components/Carousel';
/**
 *
 * @param {Array} props
 * @returns
 */
export default function EventCard({ events }) {
  return events.map((event) => {
    const { id, title, date, description, imgUrl } = event;
    const deadline = new Date(date);
    return ( 
      <main key={id} className="bg-slate-950 rounded-lg relative h-fit py-2 md:py-0 md:h-[85dvh] gap-12 z-[1] shadow-lg shadow-headings">
        <div className=" flex items-center flex-col md:flex-row justify-around">
          <div className=" space-y-6 pl-2 py-2">
            <h1 className="montserrat-subrayada-bold text-4xl text-[#f1dc90]">
              {title.toUpperCase()}
            </h1>
            <p className="max-w-xl">
              {description.length > 100
                ? description.slice(0, 100) + "... "
                : description+" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt commodi veniam ipsum quia ex a laboriosam, placeat nostrum cum.
            </p>
          </div>
            <Timer deadline={deadline}/> 
        </div>
        <div className="w-fit mx-auto relative mb-2 md:top-10">
        <Carousel />
        </div>
        <Image src={imgUrl} fill={true} sizes="100%" alt="image" className="z-[-1] opacity-60 object-cover"/>
      </main>
    );
  });
}
