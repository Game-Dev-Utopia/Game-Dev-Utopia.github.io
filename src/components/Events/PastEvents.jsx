import React from "react";
import Image from 'next/image'
export default function PastEvents({ past }) {
  const newEvents = past.slice(0, 3);
  newEvents.push({ id: -1, title: "", date: "", description: "" });
  return (
    <span className="flex items-center justify-between space-x-2">
      {newEvents.map((event) => {
        const { id, title, date, description } = event;
        return id !== -1 ? (
          <div key={id} className="flex flex-col justify-end w-[25vw] relative h-[50vh] border-2 rounded-md px-2">
            <h1 className="text-4xl z-10">{title}</h1>
            <p className="z-10">{description}</p>
            <Image src="https://picsum.photos/id/237/536/354" className="opacity-50" fill={true} sizes="25vw" alt="hello" />
          </div>
        ) : (
            <span key={id} className="text-center h-[50vh] group relative w-[25vw] border-2 rounded-md border-dashed scale-90 hover:bg-white hover:scale-100 duration-200 cursor-pointer">
              <p className="absolute inset-0 m-auto w-fit group-hover:text-black text-2xl h-fit">
                See More &rarr;
              </p>
            </span>
        );
      })}
    </span>
  );
}
