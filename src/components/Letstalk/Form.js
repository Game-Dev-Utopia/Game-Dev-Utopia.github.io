import { useEffect, useState } from 'react';
import Stepper from './Stepper';
import { postRequestJson } from '@/api/api';
import Image from 'next/image';

export default function Form({ heading, image, stepsData, toastHandler }) {
  const handleSubmit = async (formData) => {
    try {
      console.log(formData);
      let formName = heading.toLowerCase();
      formName = formName.replace(/\s/g, '');
      console.log(formName);

      const responseObj = { formName: formName, response: formData };
      console.log(responseObj);
      const response = await postRequestJson(`/api/form/addform`, responseObj);
      console.log(response);

      // Trigger the toastHandler for success
      toastHandler('Form submitted successfully!', 'success');

      // Redirect to the home page
      window.location.href = '/';

    } catch (error) {
      // Handle specific 400 error for email already existing
      if (error.response && error.response.status === 400 && error.response.data.error === "A form with this email already exists for the same form") {
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
        <Image src={image} height={100} width={300} alt="Your Image" className="h-[250px] m-auto mt-32" />
      </div>

      <div className="w-full md:w-4/6 container mx-auto px-5 py-12">
        <Stepper onSubmit={handleSubmit} stepsData={stepsData} />
      </div>
    </div>
  );
}
