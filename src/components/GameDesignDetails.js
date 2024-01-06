/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"
export default function GameDesignDetails({ isGame }) {
  return (
    <section className="w-full bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
      <div className="grid grid-cols-2 ">
        <div className="mx-2 p-2 rounded-md">
          <h1 className="text-3xl ml-1">About the Game</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit suscipit sapiente, labore magnam ad numquam ratione amet iusto explicabo ipsum facere iure, voluptatibus consectetur voluptas animi totam voluptatem minima.</p>
        </div>
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
      <div className="m-2 p-2 rounded-md">
        <h1 className="text-3xl ml-1">System Requirements:-</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem iure recusandae veritatis nulla placeat tempore aliquid pariatur corrupti! Reprehenderit soluta minus sequi voluptas mollitia fugit atque quia. Pariatur ipsa laudantium fuga consequatur eius ullam nesciunt.</p>
      </div>
      <div className="mx-2 p-2 rounded-md">
        <h1 className="text-3xl ml-1">Developer's Desk</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem iure recusandae veritatis nulla placeat tempore aliquid pariatur corrupti! Reprehenderit soluta minus sequi voluptas mollitia fugit atque quia. Pariatur ipsa laudantium fuga consequatur eius ullam nesciunt.</p>
      </div>
    </section>
  )
}
