"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { IconContext } from 'react-icons';
import { socials, footerContents } from "../utilities/FooterData";
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import GduLogo from "../../public/GduLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSidebar } from "@/contexts/SidebarContextProvider";


const SocialSection = ({ logo, classes = "", onHover, path }) => {
    const [hover, setHover] = useState(false);
    return <div
        className={`flex my-1 h-12 w-12 shadow-white shadow-sm rounded-full items-center justify-center bg-black ${classes}`} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}
    // style={{ background: "linear-gradient(207deg, rgba(124,124,124,1) 0%, rgba(0,0,0,1) 37%)" }}
    >
        <Link href={`${path}`}> {!hover ? logo : onHover} </Link>
        {/* {logo} */}
    </div>
}

export default function App() {

    const { setShowSidebar } = useSidebar();

    const footer = useRef();
    useEffect(() => {
        const check = () => {
            const visible = footer.current.getBoundingClientRect().top <= window.innerHeight;
            setShowSidebar(!visible);
        }

        window.addEventListener("scroll", check)
    })


    return (
        <IconContext.Provider value={{ size: "27" }}>
            <div ref={footer} id="footer"
                // className="bg-[#602778] text-center text-white flex rounded-3xl lg:justify-between justify-center h-screen lg:py-10 border-y-2 border-gray-400"
                className="text-center gap-y-1 relative top-[3.8rem] text-white grid grid-cols-1 lg:grid-cols-8 rounded-3xl h-screen lg:h-fit border-y-2 border-gray-400"
                style={{
                    backgroundColor: "#000",
                    padding: "3% 0 1% 0",
                    margin: "1% 0.2% ",
                }}>


                <div className="lg:w-[180px] mx-auto flex col-span-1 lg:col-span-1 my-4 lg:my-0">
                    <Image
                        src={GduLogo}
                        alt="gdu logo"
                        width={100}
                        height={100}
                        className="mx-auto aspect-auto object-contain text-black"
                    />
                </div>



                {/* <div className="w-full py-5 h-screen lg:h-fit px-0 lg:col-span-6 gap-4 text-center rounded-3xl flex flex-col"
                > */}
                <div
                    // style={{ backgroundImage: "linear-gradient(to right top, #10254f,  #1f2035, #1f1e29, #000000)" }}
                    className="grid bg-slate-900 grid-cols-1 lg:grid-cols-6 lg:col-span-6 col-span-1 col-start-1 bg-inherit items-center lg:h-fit lg:py-4 gap-4 lg:px-20 rounded-xl">


                    {footerContents.map((ele, id) =>
                        <div key={id} className="col-span-1 lg:col-span-2 w-full h-fit lg:h-full flex flex-col gap-4 lg:text-left relative">
                            <h2 className="text-2xl font-semibold my-4">{ele.title}</h2>
                            <div className="">
                                {ele.content.map((list, i) =>
                                    <div key={i} className="sm:my-4 text-lg group">
                                        <Link href={`${list.link}`} className="flex gap-1 text-base max-sm:my-2 rounded-lg lg:mx-0 mx-auto">
                                            <li className="hover:text-cyan-400 text-white px-4 py-1 flex sm:justify-center gap-2 items-center mx-auto text-base my-2 lg:my-0 lg:mx-0">
                                                {list.icon && <FontAwesomeIcon icon={list.icon} />}
                                                {list.reactIcon && <list.reactIcon size={17}
                                                    className="text-white group-hover:text-cyan-400"
                                                />}
                                                {list.display}
                                            </li>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="lg:w-1/4 w-full text-center col-span-1 pb-8 ">
                        <div
                            className="relative col-start-4 flex place-items-center before:absolute before:h-[300px] before:w-[80px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-[80px] after:translate-x-full after:bg-gradient-conic after:from-sky-400 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[4]">
                            <h1 className="text-3xl w-full font-extrabold lg:mt-7 text-white h-full">GameDevUtopia</h1>
                        </div>
                    </div>
                </div>



                <div className="lg:w-[180px] my-4 lg:my-0 grid justify-center items-center px-2 col-start-1 col-span-2 lg:col-span-1"
                >
                    <div className="flex max-sm:gap-2 lg:grid lg:grid-cols-3 lg:grid-rows-3 text-white">
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


                <div className=" gap-2 lg:gap-4 rounded-b-xl col-start-1 col-span-8 flex flex-col lg:flex-row my-5 lg:my-0 w-full justify-center lg:text-base text-sm">
                    <h2 className="">GameDevUtopia</h2>
                    <h2 className="hidden lg:inline">|</h2>
                    <h2 className="">Copyright &#169; 2024 All rights reserved</h2>
                    <h2 className="hidden lg:inline">|</h2>
                    <h2 className="">Privacy Policy</h2>
                </div>
                {/* </div> */}

            </div >
        </IconContext.Provider >
    );
}