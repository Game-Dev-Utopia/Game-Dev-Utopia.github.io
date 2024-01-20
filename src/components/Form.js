'use client';

export default function Form({heading,image}) {
  return (
    
    <div className="body-font relative bg-clip-padding backdrop-filter bg-white bg-opacity-10 backdrop-blur flex">

    <div className="w-1/3">
      {/* Add your image here */}
      <img src={image} alt="Your Image" className=" m-auto mt-20" />
    </div>
  
    <div className="w-2/3 container mx-auto px-5 py-12">
  
      <div className="mb-8 flex w-full flex-col text-center">
        <h1 className="title-font  text-2xl font-medium text-white sm:text-3xl">{heading}</h1>
      </div>
  
      <div className="mx-auto md:w-3/4 lg:w-4/5">
        <div className="-m-2 flex flex-wrap">
          <div className="w-1/2 p-2">
            <div className="relative">
              <input type="text" id="firstname" name="firstname" className="peer py-1 px-3 w-full bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md outline-none text-base leading-8 text-gray-300 placeholder-transparent  ease-in-out " placeholder="Firstname" style={{ borderTop: `3px solid yellow`, borderLeft: `2px solid yellow`, borderRight: `2px solid yellow`, borderBottom:`3px solid gray` }} />
              <label htmlFor="firstname" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300">Firstname</label>
            </div>
          </div>
          <div className="w-1/2 p-2">
          <div className="relative">
              <input type="text" id="lastname" name="lastname" className="peer py-1 px-3 w-full bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md outline-none text-base leading-8 text-gray-300 placeholder-transparent  ease-in-out"  placeholder="Lastname" style={{ borderTop: `3px solid orange`, borderLeft: `2px solid orange`, borderRight: `2px solid orange`, borderBottom:`3px solid gray` }} />
              <label htmlFor="lastname" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300">Lastname</label>
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative">
              <input type="text" id="email" name="email" className="peer py-1 px-3 w-full bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md outline-none text-base leading-8 text-gray-300 placeholder-transparent  ease-in-out focus:border-slate-500  focus:ring-2 focus:ring-yellow-400" placeholder="Email" />
              <label htmlFor="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300">Email</label>
            </div>
          </div>
          <div className="w-1/2 p-2">
          <div className="relative">
              <input type="text" id="phone" name="phone" className="peer py-1 px-3 w-full bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md outline-none text-base leading-8 text-gray-300 placeholder-transparent  ease-in-out focus:border-slate-500  focus:ring-2 focus:ring-yellow-400" placeholder="Phone" />
              <label htmlFor="phone" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300">Phone</label>
            </div>
          </div>


          <div className="mt-2 w-full p-2">
            <div className="relative">
              <textarea id="message" name="message" className="peer py-1 px-3 w-full bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md outline-none text-base leading-8 text-gray-300 placeholder-transparent  ease-in-out focus:border-slate-500 resize-none" placeholder="Message" style={{ borderTop: `3px solid gray`, borderLeft: `2px solid orange`, borderRight: `2px solid orange`, borderBottom:`3px solid orange` }}></textarea>
              <label htmlFor="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300">Address</label>
            </div>
          </div>

          <div className="w-full p-2">
            <button className='mx-auto flex bg-slate-500 bg-opacity-30 rounded-md shadow-md text-white font-bold w-34 h-12 relative shadow-slate-600/70 py-3 px-16
            before:w-full before:h-full before:scale-x-[1.05] before:scale-y-[1.15]  before:absolute before:top-[50%] before:left-[50%]
            before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
            before:from-yellow-500 before:to-yellow-200 before:bg-gradient-to-br
            before:rounded-md 
            hover:bg-opacity-40 hover:bg-gray-600 transition-all duration-300 
        '>
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}