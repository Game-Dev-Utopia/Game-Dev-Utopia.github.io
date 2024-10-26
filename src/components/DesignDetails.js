/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React from "react";

export default function GameDesignDetails({ designData }) {
	const [selectedAwardIndex, setSelectedAwardIndex] = React.useState(0);
	const acheivementArray = designData.achievements;
	return (
		<section className="game-design-details mx-2 pt-4">
			<div className="grid md:grid-cols-2 grid-cols-1 gap-3">
				<div className="section-content p-6 rounded-2xl bg-[url('/images/games_section_bg_illustration.jpg')] bg-no-repeat bg-right hover:scale-[1.01] hover:shadow-md hover:shadow-[#fdb714] duration-200">
					<h1 className="text-3xl text-headings font-semibold py-2">
						About the Design
					</h1>
					<div className="glass_bar flex justify-between items-center py-2">
						<div className="glass1"></div>
						<div className="glass3"></div>
						<div className="glass2"></div>
					</div>
					<p className="py-6 text-white">{designData.description}</p>
				</div>
				{acheivementArray.length > 0 ? (
					<div className="section-content p-6 h-full rounded-2xl bg-[url('/images/games_section_bg_illustration.jpg')] bg-no-repeat bg-right  hover:scale-[1.01] hover:shadow-md hover:shadow-[#fdb714] duration-200">
						<h1 className="text-3xl text-headings font-semibold py-2">
							Achievements
						</h1>
						<div className="glass_bar flex justify-between items-center py-2">
							<div className="glass1"></div>
							<div className="glass3"></div>
							<div className="glass2"></div>
						</div>
						<div className=" gap-2 my-6 ">
							<div className="flex flex-row">
								{"1234".split("").map((item, i) => (
									<span
										onClick={() => setSelectedAwardIndex(i)}
										className={`relative p-3 rounded-md mx-2 duration-100 ${
											selectedAwardIndex === i
												? "border-2 border-[#fdb714] border-opacity-50"
												: "border-2 border-transparent"
										}`}
										key={item}
									>
										<Image fill={true} src="/trophy.svg" alt="trophy" />
										<p className="text-lg absolute p-2 -top-2 -right-2">🥇</p>
									</span>
								))}
							</div>
						</div>
						<p className="py-6 text-white">
							{acheivementArray[selectedAwardIndex]}
						</p>
					</div>
				) : (
					<></>
				)}
			</div>
		</section>
	);
}
