"use client";
import React, { useState } from 'react'
import PaymentModel from "./PaymentModel";

const EventPageRegister = ({ close }) => {
    const [isValid, setisValid] = useState(false)

    const [details, setDetails] = useState({
        name: '',
        email: '',
        mobile: '',
        nationality: '',
        gender: '',
        howDidYouFindUs: '',
        quality: '',
        steamAccount: '',
        itchAccount: '',
        educationalDetails: ''
    })
    const [gender, setGender] = useState('')
    const handlesetGender = (event) => {
        const { value } = event.target;
        setGender(value);
    };
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(100); // Set your price accordingly

    const openModal = () => {
        setIsOpen(true);
    };

    const handleSubmit = () => {
        setisValid(true)
        if (details.name === '' || details.email === '' || details.nationality === '' || details.gender === '' || details.howDidYouFindUs === '') {
            alert('Please fill all the required fields');
            return;
        }
        console.log(details);
    }


    return (


        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-50'>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            <div className='z-50 flex flex-col justify-center font-semibold placeholder:text-sm placeholder:font-normal text-[#fff] items-center w-[98%] md:w-[30%] h-full my-4 px-4 py-2 mx-auto shadow shadow-gray-600 bg-zinc-900 rounded-xl'>
                <div className='w-full'>
                    <h1 className='text-xl font-bold text-center'>Register Now</h1>
                </div>
                <div className='overflow-auto'>
                    <div className='flex flex-col mx-auto gap-y-5'>
                        <h3 className='text-lg underline text-center my-4'> Personal Details</h3>
                        <label> Name <span className='text-red-500'>*</span> </label>
                        <input
                            type="text"
                            name='name'
                            value={details.name}
                            onChange={(e) => setDetails({ ...details, name: e.target.value })}
                            className='mx-2 px-2 rounded-lg placeholder:text-sm text-sm font-normal text-white bg-black shadow shadow-gray-600 py-2'
                            placeholder='eg. John Doe'
                        />
                        {details.name === '' && isValid && <p className='text-xs text-red-500'>Please fill out this field</p>}
                        <label> Email <span className='text-red-500'>*</span> </label>
                        <input
                            type="email"
                            name='email'
                            value={details.email}
                            onChange={(e) => setDetails({ ...details, email: e.target.value })}
                            className='mx-2 px-2 rounded-lg placeholder:text-sm text-sm font-normal text-white bg-black shadow shadow-gray-600 py-2'
                            placeholder='eg. johndoe@example.com'
                        />
                        {details.email === '' && isValid && <p className='text-xs text-red-500'>Please fill out this field</p>}

                        <label> Nationality <span className='text-red-500'>*</span> </label>
                        <input
                            type="text"
                            name='nationality'
                            value={details.nationality}
                            onChange={(e) => setDetails({ ...details, nationality: e.target.value })}
                            className='mx-2 px-2 rounded-lg placeholder:text-sm text-sm font-normal text-white bg-black shadow shadow-gray-600 py-2'
                            placeholder='eg. Indian'
                        />
                        {details.nationality === '' && isValid && <p className='text-xs text-red-500'>Please fill out this field</p>}

                        <label> Mobile No. </label>
                        <input
                            type="text"
                            name='mobile'
                            value={details.mobile}
                            onChange={(e) => setDetails({ ...details, mobile: e.target.value })}
                            className='mx-2 px-2 rounded-lg placeholder:text-sm text-sm font-normal text-white bg-black shadow shadow-gray-600 py-2'
                            placeholder='eg. 98765*****'
                        />
                        <label> Gender <span className='text-red-500'>*</span> </label>
                        <select className='outline-none text-sm font-normal shadow shadow-gray-600 text-gray-400 bg-black p-2 mx-2 rounded-md px-2'
                            value={details.gender}
                            onChange={(e) => setDetails({ ...details, gender: e.target.value })}
                        >
                            <option className='w-[10%] lg:w-auto' value="">Please select an option</option>
                            <option className='w-[10%] lg:w-auto' value="male">Male</option>
                            <option className='w-[10%] lg:w-auto' value="female">Female</option>
                            <option className='w-[10%] lg:w-auto' value="non-binary">Non-Binary</option>
                            <option className='w-[10%] lg:w-auto' value="other">Prefer not to say</option>
                        </select>
                        {details.gender === '' && isValid && <p className='text-xs text-red-500'>Please fill out this field</p>}

                        <label className=' w-full'>
                            How did you find out about this event? <span className='text-red-500'>*</span>
                        </label>
                        <select
                            className='outline-none text-sm font-normal shadow shadow-gray-600 text-gray-400 bg-black p-2 mx-2 rounded-md px-2'
                            value={details.howDidYouFindUs}
                            onChange={(e) => setDetails({ ...details, howDidYouFindUs: e.target.value })}
                        >
                            <option value="">Please select an option</option>
                            <option value="friend">From a friend / relative</option>
                            <option value="socialMedia">Social media</option>
                            <option value="website">Website</option>
                            <option value="email">Email</option>
                            <option value="other">Other</option>
                        </select>
                        {details.howDidYouFindUs === '' && isValid && <p className='text-xs text-red-500'>Please fill out this field</p>}


                        <hr />
                        <h3 className='text-lg underline text-center my-4'> Additional Details</h3>
                        <label> What are you awesome at? </label>
                        <input
                            type="text"
                            name='quality'
                            value={details.quality}
                            onChange={(e) => setDetails({ ...details, quality: e.target.value })}
                            className='mx-2 p-2 text-sm font-normal rounded-lg text-white bg-black shadow shadow-gray-600'
                            placeholder='eg. Game Development'
                        />
                        <label> Steam Account </label>
                        <input
                            type="text"
                            name='steamAccount'
                            value={details.steamAccount}
                            onChange={(e) => setDetails({ ...details, steamAccount: e.target.value })}
                            className='mx-2 p-2 text-sm font-normal rounded-lg text-white bg-black shadow shadow-gray-600'
                            placeholder='account name'
                        />
                        <label> Itch io Account </label>
                        <input
                            type="text"
                            name='itchAccount'
                            value={details.itchAccount}
                            onChange={(e) => setDetails({ ...details, itchAccount: e.target.value })}
                            className='mx-2 p-2 text-sm font-normal rounded-lg text-white bg-black shadow shadow-gray-600'
                            placeholder='account name'
                        />
                        <label>Educational Details</label>
                        <input
                            type="text"
                            name='educationalDetails'
                            value={details.educationalDetails}
                            onChange={(e) => setDetails({ ...details, educationalDetails: e.target.value })}
                            className='mx-2 p-2 text-sm font-normal rounded-lg text-white bg-black shadow shadow-gray-600'
                            placeholder='Qualification'
                        />


                    </div>
                    <PaymentModel isOpen={isOpen} setIsOpen={setIsOpen} price={price} />
                    <div className='mx-auto text-center'>
                        <button className='p-2 my-4 mx-2 bg-[#f6df5d] text-black rounded-md' onClick={openModal}>
                            Register
                        </button>
                        <button className='p-2 my-4 mx-2 bg-[#dcd8c2] text-black rounded-md' onClick={close}>
                            close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventPageRegister
