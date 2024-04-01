import React from 'react'
import { GoSearch } from "react-icons/go";
export default function SearchBar() {
  return (
    <section className='flex justify-end p-2'>
        <div className='relative w-fit'>
            <input type="text" className='text-lg border-2 border-gray-400 bg-transparent indent-2 py-2 rounded-full' placeholder='Search'/>
            <GoSearch className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl ' />
        </div>
    </section>
  )
}
