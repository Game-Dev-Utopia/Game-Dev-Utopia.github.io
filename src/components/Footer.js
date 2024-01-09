"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { IconContext } from 'react-icons';
import { socials, footerContents } from "../utilities/FooterData";
import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";


const SocialSection = ({ logo, classes = "", onHover, path }) => {
    const [hover, setHover] = useState(false);
    return <div className={`mx-1 flex px-1 py-0 h-9 rounded-md items-center ${classes}`} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <Link href={`${path}`}> {!hover ? logo : onHover} </Link>
        {/* {logo} */}
    </div>
}

export default function App() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: "25" }}>
            <div className="bg-purple-500 h-96 text-center text-white">
                <Parallax pages={2}>
                    <ParallaxLayer
                        offset={0}
                        speed={2.5}
                        style={{
                            backgroundColor: "#f53d3d",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "568px"
                        }}
                    />
                    <ParallaxLayer
                        offset={1}
                        speed={2}
                        style={{
                            backgroundColor: "#be3df5",
                            position: "relative",
                        }}
                    />
                    <ParallaxLayer
                        offset={1}
                        speed={1}
                        style={{
                            backgroundColor: "#000",
                            color: "white",
                            display: "flex",
                            justifyContent: "space-evenly",
                            height: "400px",
                        }}

                    >
                        {footerContents.map((ele) =>
                            <div key={ele.title} className="w-1/6 flex flex-col text-left relative">
                                <h2 className="text-2xl font-semibold my-4">{ele.title}</h2>
                                <div className="">
                                    {ele.content.map((list) =>
                                        <div key={list.name} className="my-4 text-lg">
                                            {list.name !== "" ? <Link href={`${list.link}`}>{list.name}</Link> : ""}
                                            <ul className="my-2 text-white list-disc text-justify relative left-10">
                                                {list.arr ? list.arr.map((e) =>
                                                    <li key={e.display} className="text-base my-2">
                                                        <Link href={`${e.link}`}>{e.display}</Link>
                                                    </li>
                                                ) : ""}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="w-1/4">
                            <div className="w-full">
                                <h1 className="text-3xl font-extrabold my-4">GameDevUtopia</h1>
                                <div className="flex">
                                    <Image src="/gdu" alt="gdu logo" width={44} height={44} className="w-44 h-44 mx-auto py-4 my-10 bg-white text-black" />
                                    <div className="grid grid-cols-3 grid-rows-3 py-4 my-10">
                                        {socials.map((e) =>
                                            <SocialSection
                                                key={e.handle}
                                                logo={e.logo}
                                                classes={e.classes}
                                                onHover={e.onHover ? e.onHover : e.logo}
                                                path={e.path}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>


                        </div>


                    </ParallaxLayer>
                </Parallax >
            </div >
        </IconContext.Provider >
    );
}