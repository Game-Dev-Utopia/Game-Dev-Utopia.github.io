"use client"
import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Image from 'next/image'
import Collaborators from '../GamePage/Collaborators'

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)


  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className={`embla__container ${slides.length > 0 ? "h-[325px]" : ""}`}>
          {slides.map((item, i) => (
            <>
              <div key={i} className='embla__slide flex justify-center items-center z-20 font-bold '>
                {/* <div className='max-w-[16rem] max-h-16 font-bold border-white animate-glow border-2 px-3 rounded-xl py-1 pb-3 text-overflow-ellipsis whitespace-no-wrap overflow-hidden text-center'>{item.title}
                </div> */}
                <div
                  className="embla__slide__number relative flex-col group rounded-2xl  overflow-hidden bg-slate-800 duration-500 w-60 h-[18rem] shadow shadow-gray-600 mx-5 text-gray-50 p-2.5 grid justify-items-center bottom-3 z-10 "
                >
                  <div className="text-center absolute"></div>
                  <div className="">
                    <div
                      className=" rounded-3xl w-full h-[12rem] bg-blue-400"
                    >


                      {/* make image fir according to landscape also */}
                      {/* https://images.firstpost.com/uploads/2022/10/BGMI-was-banned-in-July-this-year.-Will-the-battle-royale-make-a-comeback-this-year.jpg?im=FitAndFill=(596,336) */}
                      <img src={item.thumbnail} className='h-full w-full rounded-xl border-solid aspect-video'></img>
                      {/* <div className='-left-24 relative bottom-2 px-2'><Like /></div>
                      <div className='-right-1 relative bottom-2 px-2'><Save /></div> */}
                    </div>
                    <div
                      className="absolute w-full left-0 px-5 overflow-hidden my-4">
                      {/* <div className="absolute -z-10 left-0 w-64 h-28 ">
              </div> */}

                      <Collaborators developersArray={item.developer_ids} />
                      <p className="w-56 font-bold text-lg">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>

              </div></>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default EmblaCarousel
