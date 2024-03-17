import React from "react";
import Image from "next/image";
import {imageContainer} from '../../styles/events_page.module.css'
import { FaDiscord, FaInstagram } from "react-icons/fa";
/**
 *
 * @param {Array} props
 * @returns
 */
export default function EventCard({ events }) {
  return events.map((event) => {
    const { id, title, date, description, imgUrl } = event;
    return (
      <main key={id} className="bg-slate-950 rounded-lg">
        <div className="flex h-auto gap-28 ">
          <div className="w-1/2 space-y-12 pl-2 py-2">
            <h1 className="montserrat-subrayada-bold text-4xl text-[#f1dc90]">
              {title.toUpperCase()}
            </h1>
            <p>
              The coat layer is placed on top of all base layers, including the
              emission layer. This can be used e.g. to simulate emissive
              textures behind glass like a phone screen. Coat tint and IOR
              inputs were added, so that it can be used for. The coat layer is
              placed on top of all base layers, including the emission layer.
            </p>
            <span className="flex gap-6 text-[4rem]">
              <FaDiscord className="border-2 border-[#f1dc90] p-2 text-white" />
              <FaInstagram className="border-2 border-[#f1dc90] p-2 text-white" />
            </span>
          </div>
          <div className={"relative w-1/2 rounded-lg "+imageContainer}>
            <Image
              src={imgUrl}
              fill={true}
              sizes="(max-width: 768px) 0%, (max-width: 1200px) 0%, 100%"
              className="rounded-lg"
              alt="img"
            />
          </div>
        </div>
      </main>
    );
  });
}
