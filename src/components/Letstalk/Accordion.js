import React, { useEffect, useState } from "react";
import Form from "./Form";

function Accordion({
  title,
  id,
  img,
  active = false,
  borderColor,
  stepsData,
  isOpen,
  onClick,
}) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(isOpen);
  }, [isOpen]);

  const handleClick = () => {
    onClick();
    setAccordionOpen(!accordionOpen);
  };

  return (
    <>
      <div className="rounded-3xl drop-shadow-xl overflow-hidden px-7 my-5 bg-slate-800 bg-clip-padding backdrop-filter backdrop-blur-sm shadow-md shadow-cyan-500">
        <h2>
          <div
            className="flex items-center justify-between w-full text-left font-semibold py-2  text-white outline-none"
            onClick={handleClick}
            aria-expanded={accordionOpen}
            aria-controls={`accordion-text-${id}`}
          >
            <span className="flex items-center font-bold text-xl ">
              <span className="w-20 h-20 rounded-full mr-2">
                <img src={img} alt="Profile" />
              </span>
              {title}
            </span>
            <svg
              className="shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: `${borderColor}` }}
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${accordionOpen ? "rotate-180" : ""
                  }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${!accordionOpen ? "rotate-90" : ""
                  }`}
              />
            </svg>



          </div>
        </h2>



        <div
          id={`accordion-text-${id}`}
          role="region"
          aria-labelledby={`accordion-title-${id}`}
          className={`grid text-sm text-white overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen
            ? "grid-rows-[1fr] opacity-100 rounded-lg mb-10 overflow-hidden bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
            : "grid-rows-[0fr] opacity-0 px-7"
            }`}
        >
          <div className="overflow-hidden">
            <Form heading={title} image={img} stepsData={stepsData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
