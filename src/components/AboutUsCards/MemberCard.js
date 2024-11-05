import React, { useState, useEffect } from 'react'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneSquare
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'

const MemberCard = ({ data }) => {
  const [imageSrc, setImageSrc] = useState(`/images/aboutus/${data.name}.jpg`)

  useEffect(() => {
    setImageSrc(`/images/aboutus/${data.name}.jpg`)
  }, [data])

  const handleImageError = () => {
    setImageSrc('/images/aboutus/profile.webp')
  }

  const designation = data.bodies[0].responsibilities.join(' | ')

  return (
		// use flex-none to prevent the card from shrinking
    <div className='w-64 h-96 relative my-20 sm:mb-24 flex-none'>
      <div className='rounded shadow-md bg-gradient-to-br from-slate-900 via-slate-700 to-slate-600 h-full w-full'>
        <div className='absolute -mt-20 w-full flex justify-center'>
          <div className='h-32 w-32'>
            <Image
              src={imageSrc}
              alt='Member Photo'
              role='img'
              className='rounded-full object-cover h-full w-full shadow-md'
              width='128'
              height='128'
              onError={handleImageError}
            />
          </div>
        </div>

        <div className='px-6 pt-20 w-full flex flex-col h-full'>
          <h1 className='font-bold text-white text-3xl text-center mb-1 whitespace-break-spaces'>
            {data.name}
          </h1>
          <p className='text-white font-semibold text-sm text-center whitespace-break-spaces'>
            {designation}
          </p>

          <p className='whitespace-pre-wrap overflow-y-scroll text-gray-200 text-base pt-3 font-normal w-full flex-grow'>
            {data.intro}
          </p>

          <div className='w-full flex justify-center pt-5 pb-5'>
            {data.linkedin && (
              <Link href={data.linkedin} className='mx-3'>
                <div aria-label='LinkedIn' role='img'>
                  <FaLinkedin className='text-cyan-500 h-5 w-5' />
                </div>
              </Link>
            )}
            {data.github && (
              <Link href={data.github} className='mx-3'>
                <div aria-label='Github' role='img'>
                  <FaGithub className='text-cyan-500 h-5 w-5' />
                </div>
              </Link>
            )}
            {data.instagram && (
              <Link href={data.instagram} className='mx-3'>
                <div aria-label='Instagram' role='img'>
                  <FaInstagram className='text-cyan-500 h-5 w-5' />
                </div>
              </Link>
            )}
            {data.email && (
              <Link href={`mailto:${data.email}`} className='mx-3'>
                <div aria-label='Email' role='img'>
                  <MdEmail className='text-cyan-500 h-5 w-5' />
                </div>
              </Link>
            )}
            {data.phone && (
              <Link href={`tel:${data.phone}`} className='mx-3'>
                <div aria-label='Phone' role='img'>
                  <FaPhoneSquare className='text-cyan-500 h-5 w-5' />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberCard
