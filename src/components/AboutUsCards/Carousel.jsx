'use client'

const Carousel = (props) => {
  return (
    <>
      <div class='carousel group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)] min-w-screen'>
        <div class='animate-slide-left-infinite group-hover:animation-pause flex w-full space-x-4'>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Carousel
