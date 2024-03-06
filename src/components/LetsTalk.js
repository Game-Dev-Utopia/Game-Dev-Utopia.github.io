import React from "react";
import Accordion from "./Accordion";

export default function LetsTalk({ data }) {
  const accData = data;
  

  return (
    <main className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-no-repeat bg-cover backdrop-saturate-100 bg-hero">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-24">
        <h1 className="text-2xl font-bold text-white-900 mb-4">CONTACT US</h1>
        <div>
          {accData.map((tile, index) => (
            <Accordion
              key={index}
              title={tile.title}
              img={tile.img}
              id={`tiles-${index}`}
              active={tile.active}
              borderColor={tile.borderColor}
              stepsData={tile.stepsData} // Pass stepsData here
            />
          ))}
        </div>
      </div>
    </main>
  );
}
