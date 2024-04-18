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

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number')
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const scale = numberWithinRange(tweenValue, 0, 1).toString()
        const tweenNode = tweenNodes.current[slideIndex]
        tweenNode.style.transform = `scale(${scale})`
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
  }, [emblaApi, tweenScale, setTweenFactor, setTweenNodes])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className={`embla__container ${slides.length > 0 ? "h-[350px]" : ""}`}>
          {slides.map((item, i) => (
            <>
              {/* <div className="embla__slide" key={index}>
              <div className="embla__slide__number relative">
                <Image src={item.thumbnail} fill={true} alt="carousel-img" />
                <span className='absolute z-10 bottom-0 px-2 bg-slate-900/30 w-full '>
                <Collaborators developersArray={item.developer_ids}/>
                <div className='absolute w-full bottom-0 border-transparent left-0 px-5 w-full overflow-hidden my-4'>
                  <Collaborators developersArray={item.developer_ids} />
                </div>
                <h1 className='text-xl'>{item.title}</h1>
                </span>
              </div>
            </div> */}
              <div key={i} className='embla__slide flex justify-center items-center z-20 font-bold '>
                {/* <div className='max-w-[16rem] max-h-16 font-bold border-white animate-glow border-2 px-3 rounded-xl py-1 pb-3 text-overflow-ellipsis whitespace-no-wrap overflow-hidden text-center'>{item.title}
                </div> */}
                <div
                  className="embla__slide__number relative flex-col group rounded-2xl  overflow-hidden bg-slate-800 duration-500 w-64 h-[20.5rem] shadow shadow-gray-600 mx-5 text-gray-50 p-2.5 grid justify-items-center bottom-3 z-10 "
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
                      <p className="w-56 font-normal line-clamp-2">
                        {item.description}
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
