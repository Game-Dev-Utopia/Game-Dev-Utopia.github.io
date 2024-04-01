/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';
export default function GameDesignDetails() {
  const [selectedAwardIndex, setSelectedAwardIndex] = React.useState(0);
  const acheivementArray = [
    "This is a placeholder sentence created for the purpose of filling space in a document or visual presentation.",
    "Placeholder text helps to demonstrate what the final content might look like in the finished product or design.",
    "The quick brown fox jumps over the lazy dog, providing a sentence that uses every letter in the alphabet.",
    "Lorem ipsum is a type of placeholder text used in the publishing and typesetting industry for previewing layouts."
  ];
  return (
    <section className="game-design-details">
      <div className="grid grid-cols-2 gap-3 mx-2">
        <div className="section-content p-6 rounded-2xl bg-[url('/images/games_section_bg_illustration.jpg')] bg-no-repeat bg-right hover:scale-[1.01] hover:shadow-md hover:shadow-[#fdb714] duration-200">
          <h1 className="text-3xl text-headings font-semibold py-2">About the Game</h1>
          <div className='glass_bar'>
            <div className='glass1'></div>
            <div className='glass3'></div>
            <div className='glass2'></div>
          </div>
          <p className='py-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit
            suscipit sapiente, labore magnam ad numquam ratione amet iusto
            explicabo ipsum facere iure, voluptatibus consectetur voluptas animi
            totam voluptatem minimainim.
          </p>
        </div>
        <div className="section-content p-6 h-full rounded-2xl bg-[url('/images/games_section_bg_illustration.jpg')] bg-no-repeat bg-right  hover:scale-[1.01] hover:shadow-md hover:shadow-[#fdb714] duration-200">
          <h1 className="text-3xl text-headings font-semibold py-2">Achievements</h1>
          <div className='glass_bar'>
            <div className='glass1'></div>
            <div className='glass3'></div>
            <div className='glass2'></div>
          </div>
          <div className=" gap-2 my-6">
            <div className='flex flex-row'>{"1234".split("").map((item, i) => (
              <span
                onClick={() => setSelectedAwardIndex(i)}
                className={`relative p-3 rounded-md mx-2 duration-100 ${(selectedAwardIndex === i) ? 'border-2 border-[#fdb714] border-opacity-50' : 'border-2 border-transparent'}`} key={item}>
                <img src="/trophy.svg" alt="trophy" />
                <p className='text-lg absolute p-2 -top-2 -right-2'>
                  🥇
                </p>
              </span>
            ))}</div>
          </div>
          <p className='py-6'>
            {acheivementArray[selectedAwardIndex]}
          </p>
        </div>
      </div>
      <div className="section-content m-2 my-4 p-6 rounded-2xl bg-[url('/images/games_section_bg_illustration.jpg')] bg-no-repeat bg-right  hover:scale-[1.01] hover:shadow-md hover:shadow-[#fdb714] duration-200">
        <h1 className="text-3xl text-headings font-semibold py-2">System Requirements</h1>
        <div className='glass_bar'>
          <div className='glass1'></div>
          <div className='glass3'></div>
          <div className='glass2'></div>
        </div>
        <p className='py-6'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem iure
          recusandae veritatis nulla placeat tempore aliquid pariatur corrupti!
          Reprehenderit soluta minus sequi voluptas mollitia fugit atque quia.
          Pariatur ipsa laudantium fuga consequatur eius ullam nesciunt.
        </p>
      </div>
      <div className="section-content mx-2 my-4 p-6 rounded-2xl bg-[url('/images/games_section_bg_illustration.jpg')] bg-no-repeat bg-right  hover:scale-[1.01] hover:shadow-md hover:shadow-[#fdb714] duration-200">
        <h1 className="text-3xl text-headings font-semibold py-2">Developer&apos;s Desk</h1>
        <div className='glass_bar'>
          <div className='glass1'></div>
          <div className='glass3'></div>
          <div className='glass2'></div>
        </div>

        <span className='flex gap-2 my-6'>
          <img src="/trophy.svg" alt="" />
          <img src="/trophy.svg" alt="" />
          <img src="/trophy.svg" alt="" />
        </span>
        <p className='py-6'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem iure
          recusandae veritatis nulla placeat tempore aliquid pariatur corrupti!
          Reprehenderit soluta minus sequi voluptas mollitia fugit atque quia.
          Pariatur ipsa laudantium fuga consequatur eius ullam nesciunt.
        </p>
      </div>
    </section>
  );
}
