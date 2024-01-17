"use client";
import {Image} from 'next/image'
export default function DesignDetails() {
  return (
    <div>
        <section className="w-full bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
      <div className="grid grid-cols-2 ">
        <div className="mx-2 p-2 rounded-md">
          <h1 className="text-3xl ml-1">About the Design</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit suscipit sapiente, labore magnam ad numquam ratione amet iusto explicabo ipsum facere iure, voluptatibus consectetur voluptas animi totam voluptatem minima.</p>
        </div>
        <div className="m-2 p-2 rounded-md">
          <h1 className="text-3xl ml-1">Achivements</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, vero consectetur dolore soluta debitis quis. Voluptatibus minima harum sint dolorum, architecto necessitatibus mollitia iste vero et impedit pariatur quisquam iure a quod alias optio accusamus. Quas tempora nisi officiis ullam!</p>
          <div className="flex flex-row gap-2 m-2">
            <Image src="/trophy.svg" alt="trophy" />
            <Image src="/trophy.svg" alt="trophy" />
            <Image src="/trophy.svg" alt="trophy" />
            <Image src="/trophy.svg" alt="trophy" />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
