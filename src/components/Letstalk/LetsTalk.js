import React, { useState } from "react";
import Accordion from "./Accordion";
import { Bounce, ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import { IoMdCloseCircle } from 'react-icons/io';

export default function LetsTalk({ data }) {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  const CloseButton = ({ closeToast }) => (
    <IoMdCloseCircle className='text-2xl me-4' onClick={closeToast} />
    );

  const toastHandler = () => {
    console.log("toast"),

      toast('🎉🎉 Form Submitted!!!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        className: 'text-white bg-slate-900 rounded-lg shadow-lg p-2 font-bold',
        progressStyle: { backgroundColor: '#06b6d4' }
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeButton={CloseButton}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <main className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-no-repeat bg-cover backdrop-saturate-100 bg-hero">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <h1 className="text-2xl font-bold text-white-900 mb-4">CONTACT US</h1>
          <div>
            {data.map((tile, index) => (
              <Accordion
                key={index}
                title={tile.title}
                img={tile.img}
                id={index}
                active={tile.active}
                borderColor={tile.borderColor}
                stepsData={tile.stepsData}
                isOpen={index === openAccordionIndex}
                onClick={() => handleAccordionClick(index)}
                toastHandler={toastHandler}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
