import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import Form from '../Letstalk/Form';
import { RxCross2 } from "react-icons/rx";

const WebDevForm = () => {
  const CloseButton = ({ closeToast }) => (
    <RxCross2 className='text-lg me-4' onClick={closeToast} />
  );
  const toastHandler = (message, type = 'success') => {
    const toastOptions = {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      className: 'text-white bg-slate-800 rounded-lg flex items-center shadow-lg p-2 font-bold',
      progressStyle: { backgroundColor: '#26C6DA' },
    };

    if (type === 'success') {
      toast.success(`🎉🎉 ${message}`, toastOptions);
    } else if (type === 'error') {
      toast.error(`${message}`, toastOptions);
    }
  };
    

  const recruitDevelopersForm = {
    title: "Council Heads 2024",
    text: "We are seeking enthusiastic leads to join our team as heads. Please fill out the form below with your details to apply.",
    active: true,
    img: "/images/recruit.png",
    borderColor: "#007bff",
    stepsData: [
      {
        title: "Personal Info",
        fields: [
          {
            fieldName: "Full Name",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your full name",
            max: 200,
          },
          {
            fieldName: "Email",
            inputType: "text",
            datatype: "email",
            placeholder: "Enter your email address",
            max: 200,
          },
          {
            fieldName: "Mobile Number",
            inputType: "text",
            datatype: "number",
            placeholder: "Enter your mobile number",
            max: 10,
          }
        ],
      },
      {
        title: "Education Info",
        fields: [
          {
            fieldName: "College Name",
            inputType: "dropdown",
            datatype: "text",
            options: ["PICT Pune", "IIIT Kottayam", "IIIT Nagpur", "Other"],
            placeholder: "Select your college name",
          },
          {
            fieldName: "Year",
            inputType: "dropdown",
            datatype: "text",
            options: ["SE", "TE", "BE"],
            placeholder: "Select your Engineering year",
          },
          {
            fieldName: "Branch",
            inputType: "dropdown",
            datatype: "text",
            options: ["CS", "IT", "EnTC", "Other"],
            placeholder: "Select your Branch/area of study",
          },
        ]
      },
      {
        title: "Position Info",
        fields: [
          {
            fieldName: "Preferred roles",
            inputType: "multiselect",
            datatype: "text",
            options: ["Content head ", "RnD head"  , "Web and Devops head"],
            placeholder: "Select your area of interest",
          },
          {
            fieldName: "Linkedin",
            inputType: "text",
            datatype: "text",
            placeholder: "URL {Else put NA}",
            max: 200,
          },
          {
            fieldName: "Github ",
            inputType: "text",
            datatype: "text",
            placeholder: "Mandatory for Web&Devops, RnD Head {Else put NA} ",
            max: 200,
          },
          {
            fieldName: "Instagram",
            inputType: "text",
            datatype: "text",
            placeholder: "Mandatory for Content Head {Else put NA}",
            max: 200,
          },
        ],
        
      },
      {
        title: "Experience",
        fields: [
          
          {
            fieldName: "Any Previous Experience",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Describe your previous similar experiences {Else put NA}",
            max: 200,
          }
          
        ],
        
      },
      
    ],
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
      <Form heading={recruitDevelopersForm.title} image={recruitDevelopersForm.img} stepsData={recruitDevelopersForm.stepsData} toastHandler={toastHandler} />

    </>
  )
}

export default WebDevForm
