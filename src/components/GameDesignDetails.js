/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"
export default function GameDesignDetails() {
  return (
    <section className="w-[90vw] bg-clip-padding">
      <div className="grid grid-cols-2 gap-6">
        <div className=" p-8 rounded-2xl bg-gradient-to-tr from-[#202020] to-[#151515] hover:shadow-md hover:shadow-[#fdb714] duration-200">
          <h1 className="text-3xl font-semibold text-[#fdb714] mb-2">About the Game</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit suscipit sapiente, labore magnam ad numquam ratione amet iusto explicabo ipsum facere iure, voluptatibus consectetur voluptas animi totam voluptatem minima.</p>
        </div>
        <div className="p-8 rounded-2xl bg-gradient-to-tr from-[#202020] to-[#151515] hover:shadow-md hover:shadow-[#fdb714] duration-200">
          <h1 className="text-3xl font-semibold text-[#fdb714] mb-2">Achievements</h1>
          <div className="flex flex-row gap-2 my-2">
            <img width={40} src="/trophy.svg" alt="trophy" />
            <img width={40} src="/trophy.svg" alt="trophy" />
            <img width={40} src="/trophy.svg" alt="trophy" />
            <img width={40} src="/trophy.svg" alt="trophy" />
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, vero consectetur dolore soluta debitis quis. Voluptatibus minima harum sint dolorum, architecto necessitatibus mollitia iste vero et impedit pariatur quisquam iure a quod alias optio accusamus. Quas tempora nisi officiis ullam!</p>
        </div>
      </div>
      <div className="my-6 p-8 rounded-2xl bg-gradient-to-tr from-[#202020] to-[#151515] hover:shadow-md hover:shadow-[#fdb714] duration-200">
        <h1 className="text-3xl font-semibold text-[#fdb714] mb-2">System Requirements</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem iure recusandae veritatis nulla placeat tempore aliquid pariatur corrupti! Reprehenderit soluta minus sequi voluptas mollitia fugit atque quia. Pariatur ipsa laudantium fuga consequatur eius ullam nesciunt.</p>
      </div>
      <div className="my-6 p-8 rounded-2xl bg-gradient-to-tr from-[#202020] to-[#151515] hover:shadow-md hover:shadow-[#fdb714] duration-200">
        <h1 className="text-3xl font-semibold text-[#fdb714] mb-2">Developer's Desk</h1>
        <div>
          <h3 className="text-xl mb-2">Created By:</h3>
          <div className="flex gap-2 my-2">
            {"123".split('').map((item)=>(
              <img key={item} width={'40px'} src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTExXzMuanBn.jpg" alt={item} />
            ))}
          </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem iure recusandae veritatis nulla placeat tempore aliquid pariatur corrupti! Reprehenderit soluta minus sequi voluptas mollitia fugit atque quia. Pariatur ipsa laudantium fuga consequatur eius ullam nesciunt.</p>
      </div>
    </section>
  )
}
