import { useEffect, useState } from "react";
import Stepper from "./Stepper";
import { postRequestJson } from "@/api/api";
import Image from "next/image";

export default function Form({ heading, image, stepsData , toastHandler}) {
  //console.log("lits"+formattedCountries)

  const handleSubmit = async (formData) => {
    console.log(formData);
    let formName = heading.toLowerCase();
    formName = formName.replace(/\s/g, '');
    console.log(formName);

    const responseObj = {formName: formName, response:formData};
    console.log(responseObj);
    const response = await postRequestJson(`/api/form/addform`, responseObj);
    //console.log(response);

    toastHandler();

  };

  return (
    <>


      <div className="body-font relative bg-clip-padding backdrop-filter bg-[#0f172a] flex flex-col md:flex-row">
        <div className="w-full md:w-4/12">
          <Image src={image} fill={true} alt="Your Image" className="h-3/5 m-auto mt-20" />
        </div>

        <div className="w-full md:w-4/6 container mx-auto px-5 py-12">
          <Stepper onSubmit={handleSubmit} stepsData={stepsData} />
        </div>
      </div>


    </>
  );
}
