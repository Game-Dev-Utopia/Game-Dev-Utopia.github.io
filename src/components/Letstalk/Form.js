import { useEffect, useState } from 'react';
import Stepper from './Stepper';
import { postRequestJson } from '@/api/api';
import Image from 'next/image';

export default function Form({ heading, image, stepsData, toastHandler }) {
  const handleSubmit = async (formData) => {
    try {
      let formName = heading.toLowerCase();
      formName = formName.replace(/\s/g, '');

      const responseObj = { formName: formName, response: formData };
      
      const response = await postRequestJson(`/api/form/addform`, responseObj);
      
      // Trigger the toastHandler for success
      toastHandler('Form submitted successfully!', 'success');

      // Redirect to the home page
      window.location.href = '/';
      
    } catch (error) {
      // Handle specific 400 error for email already existing
      if (error.response && error.response.status === 400 && error.response.data.error === "A form with this email already exists") {
        toastHandler("A form with this email already exists. Please use a different email.", 'error');
      } else {
        // Handle other errors
        toastHandler("Something went wrong. Please try again.", 'error');
      }
    }
  };

  return (
    <div className="body-font relative bg-clip-padding backdrop-filter bg-[#0f172a] flex flex-col md:flex-row">
      <div className="w-full md:w-4/12">
        <Image src={image} height={100} width={300} alt="Your Image" className="h-3/5 m-auto mt-20" />
      </div>

      <div className="w-full md:w-4/6 container mx-auto px-5 py-12">
        <Stepper onSubmit={handleSubmit} stepsData={stepsData} />
      </div>
    </div>
  );
}
