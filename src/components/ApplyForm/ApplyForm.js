import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import Form from '../Letstalk/Form';
import { RxCross2 } from "react-icons/rx";

const ApplyForm = () => {
    const CloseButton = ({ closeToast }) => (
        <RxCross2 className='text-lg me-4' onClick={closeToast} />
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
                className: 'text-white bg-slate-800 rounded-lg flex items-center shadow-lg p-2 font-bold',
                progressStyle: { backgroundColor: '#26C6DA' }
            });
    };

    const recruitDevelopersForm = {
        title: "Recruitment ",
        text: "We are seeking enthusiastic students to join our development team. Please fill out the form below with your details to apply.",
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
              },
              {
                fieldName: "Branch",
                inputType: "text",
                datatype: "text",
                placeholder: "Enter your branch (e.g., Computer Science, IT)",
                max: 100,
              },
              {
                fieldName: "Class",
                inputType: "text",
                datatype: "text",
                placeholder: "Enter your class (e.g., SE1, TE1)",
                max: 50,
              },
            ],
          },
          {
            title: "Technical Info",
            fields: [
              {
                fieldName: "Interest",
                inputType: "dropdown",
                datatype: "text",
                options: ["Frontend", "Backend", "Design"],
                placeholder: "Select your area of interest",
              },
              {
                fieldName: "Programming Languages Known",
                inputType: "textarea",
                datatype: "text",
                placeholder: "List the programming languages you know (e.g., JavaScript, Python, Java)",
                max: 1000,
              },
              {
                fieldName: "Years of Experience",
                inputType: "text",
                datatype: "number",
                placeholder: "Enter your years of experience (if any)",
                max: 50,
              },
            ],
          },
          {
            title: "Portfolio & Resume",
            fields: [
              {
                fieldName: "Portfolio URL",
                inputType: "text",
                datatype: "url",
                placeholder: "Enter the URL to your portfolio or GitHub repository",
                max: 200,
              },
              {
                fieldName: "Resume URL",
                inputType: "text",
                datatype: "url",
                placeholder: "Enter the URL to your resume",
                max: 200,
              },
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

export default ApplyForm