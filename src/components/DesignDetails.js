"use client"
import {Image} from 'next/image'
export default function Designs() {
  return (
      <section className="w-[90vw] bg-gray-100 mx-auto mb-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
        <div className="grid grid-cols-2 ">
          <div className="mx-2 p-2 rounded-md">
            <h1 className="text-3xl ml-1">About the Design</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit suscipit sapiente, labore magnam ad numquam ratione amet iusto explicabo ipsum facere iure, voluptatibus consectetur voluptas animi totam voluptatem minima.</p>
            <div className="m-2 p-2 rounded-md">
            <h1 className="text-3xl ml-1">Achivements</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, vero consectetur dolore soluta debitis quis. Voluptatibus minima harum sint dolorum, architecto necessitatibus mollitia iste vero et impedit pariatur quisquam iure a quod alias optio accusamus. Quas tempora nisi officiis ullam!</p>
            <div className="flex flex-row gap-2 m-2">
              <img src="/trophy.svg" alt="trophy" />
              <img src="/trophy.svg" alt="trophy" />
              <img src="/trophy.svg" alt="trophy" />
              <img src="/trophy.svg" alt="trophy" />
            </div>
          </div>
          </div>
          <div>
              <h1 className="text-3xl ml-1">Meet the designers</h1>
              <ul className='flex gap-2 m-2'>
                <li><img width="40" src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="avatar-img" /></li>
                <li><img width="40" src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="avatar-img" /></li>
                <li><img width="40" src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="avatar-img" /></li>
              </ul>
            </div>
        </div>
      </section>
  )
}
