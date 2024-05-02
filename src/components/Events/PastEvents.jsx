"use client";
import React, { useState } from "react";
import Image from "next/image";
import { images } from "@/data/images";
import Modal from "../Modal";
export default function PastEvents({ past }) {
  const close = () => {
    setIsOpen(false);
  };
  console.log(past);
  const newEvents = past.slice(0, 3);
  const images = past.map((event) => event.imageURL);
  const [isOpen, setIsOpen] = useState(false);
  newEvents.push({ id: -1, title: "", date: "", description: "" });
  return isOpen ? (
    <>
      {" "}
      <button
        className="mx-4 mt-2 text-xl bg-stone-800 p-2 hover:scale-[1.05] hover:bg-white hover:text-black duration-200 transition-all rounded-lg"
        onClick={close}
      >
        &larr; Back
      </button>
      <Modal close={close} past={past} setIsOpen={setIsOpen} />
    </>
  ) : (
    <span className="flex md:flex-row flex-col items-center justify-center md:justify-between space-x-2 space-y-2">
      {newEvents.map((event) => {
        const { id, eventName, imageURL } = event;
        return id !== -1 ? (
          <div
            key={id}
            className="flex flex-col justify-end w-full md:w-[25vw] relative h-[50vh] border-2 rounded-md px-2"
          >
            <h1 className="text-xl z-10">{eventName}</h1>
            <Image
              src={imageURL}
              className="opacity-50"
              fill={true}
              sizes="25vw"
              alt="hello"
            />
          </div>
        ) : (
          <span
            onClick={() => setIsOpen(true)}
            key={id}
            className="text-center h-[50vh] group relative w-screen md:w-[25vw] border-2 rounded-md border-dashed scale-90 hover:bg-white hover:scale-100 duration-200 cursor-pointer"
          >
            <p className="absolute inset-0 m-auto w-fit group-hover:text-black text-2xl h-fit">
              See More &rarr;
            </p>
          </span>
        );
      })}
    </span>
  );
}
