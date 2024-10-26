import React, { useState, useEffect, useRef } from 'react'
import './AboutUs.css'
import MemberCard from './MemberCard'
import MobileComp from './MobileComp'
import Carousel from './Carousel'

const TeamSection = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrollEnabled, setIsScrollEnabled] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (data.length > 0) {
      setSelectedItem(data[0])
    }
  }, [data])

  const renderData = () => {
    if (data.length === 1) {
      return data[0].data.map((item, i) => (
        <MemberCard data={item} key={i} className='box' />
      ))
    } else if (selectedItem) {
      return selectedItem.data.map((item, i) => (
        <MemberCard data={item} key={i} />
      ))
    }
  }

  const renderDatamob = () => {
    if (data.length === 1) {
      return data[0].data.map((item, i) => <MobileComp data={item} key={i} />)
    } else if (selectedItem) {
      return selectedItem.data.map((item, i) => (
        <MobileComp data={item} key={i} />
      ))
    }
  }

  return (
    <>
      <div className='mb-2 min-h-fit'>
        {/* <div className="flex justify-center mx-auto pt-8">
                    <div> */}
        {/* {data.length > 1 ? (
                            <div className="dropdown">
                                <button onClick={toggleDropdown} className="md:text-4xl text-2xl text-center txt-grad font-extrabold mx-auto">
                                    {selectedItem ? selectedItem.title : data[0].title} <span className="dropdown-arrow md:text-2xl sm:text-lg">{isDropdownOpen ? '▲' : '▼'}</span>
                                </button>
                            </div>
                        ) : (
                        )} */}
        {/* <h1 className="md:text-4xl text-2xl text-center txt-grad font-extrabold mx-auto">{data[0].title}</h1>
                    </div>
                </div> */}

        {/* {renderDropdown()} */}

        {/* <div ref={containerRef} className={`bg-slate-900 sm:pt-4 md:pt-16 transition-all mt-2 ease-in-out rounded-md mx-9`}>
                    <div className="md:mx-5">
                        <div className='sm:hidden grid grid-cols-2 justify-between'>
                            {renderDatamob()}
                        </div>

                        <div className="hidden sm:justify-around lg:flex lg:justify-around md:flex md:justify-evenly xl:justify-between items-start carousel-1">
                            {renderData()}
                        </div>
                    </div>
                </div> */}

        {data.map((section, index) => (
          <div
            key={index}
            className='bg-slate-900 sm:pt-4 md:pt-16 transition-all mt-2 rounded-md mx-9'
          >
            <div className=''>
              <h1 className='md:text-4xl text-2xl text-center txt-grad font-extrabold mx-auto'>
                {section.title}
              </h1>
            </div>

            {/* <div class='group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)] min-w-screen'>
              <div class='animate-slide-left-infinite group-hover:animation-pause flex w-full space-x-4'>

                {
                  section.data.map((item, i) => (
                    <MemberCard data={item} key={i} className='mx-4 inline' />
                  ))
                }
                {
                  section.data.map((item, i) => (
                    <MemberCard data={item} key={i} className='mx-4 inline' />
                  ))
                }
                {
                  section.data.map((item, i) => (
                    <MemberCard data={item} key={i} className='mx-4 inline' />
                  ))
                }
              </div>
            </div> */}

            <Carousel>
              {section.data.map((item, i) => (
                <MemberCard data={item} key={i} className='mx-4 inline' />
              ))}
              {section.data.map((item, i) => (
                <MemberCard data={item} key={i} className='mx-4 inline' />
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </>
  )
}

export default TeamSection
