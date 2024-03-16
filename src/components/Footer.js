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
            console.log(visible);
            setShowSidebar(!visible);
        }

        window.addEventListener("scroll", check)
    })


    return (
        <IconContext.Provider value={{ color: '#fff', size: "27" }}>
            <div ref={footer} id="footer"
                // className="bg-[#602778] text-center text-white flex rounded-3xl lg:justify-between justify-center h-screen lg:py-10 border-y-2 border-gray-400"
                className="bg-[#602778] text-center gap-y-1 text-white grid grid-cols-1 lg:grid-cols-8 rounded-3xl h-screen lg:h-fit border-y-2 border-gray-400"
                style={{
                    backgroundColor: "#000",
                    padding: "3% 0 1% 0",
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
                    style={{ backgroundImage: "linear-gradient(to right top, #10254f,  #1f2035, #1f1e29, #000000)" }}
                    className="grid grid-cols-1 lg:grid-cols-6 lg:col-span-6 col-span-1 col-start-1 bg-inherit items-center lg:h-fit lg:py-4 gap-4 bg-black lg:px-20 rounded-xl">


                    {footerContents.map((ele) =>
                        <div key={ele.title} className="col-span-1 lg:col-span-2 w-full h-fit flex flex-col gap-4 lg:text-left relative">
                            <h2 className="text-2xl font-semibold my-4">{ele.title}</h2>
                            <div className="">
                                {ele.content.map((list) =>
                                    <div key={list.name} className="my-4 text-lg">
                                        {list.name !== "" ? <Link href={`${list.link}`}>{list.name}</Link> : ""}
                                        <ul className="my-2 text-white text-justify relative lg:left-0 ">
                                            {list.arr ? list.arr.map((e) =>
                                                <li key={e.display}
                                                    className="flex text-center justify-center lg:justify-start gap-2 items-center text-base my-2 rounded-lg mx-auto lg:mx-0">
                                                    {e.icon && <FontAwesomeIcon icon={e.icon} />}
                                                    {e.reactIcon && <e.reactIcon size={17} />}
                                                    <Link href={`${e.link}`} className="text-left text-base rounded-lg px-4 py-1 w-44">{e.display}</Link>
                                                </li>
                                            ) : ""}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="lg:w-1/4 w-full text-center col-span-1 pb-8">
                        <div className="relative col-start-4 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[4]">
                            <h1 className="text-3xl w-full font-extrabold lg:mt-7 h-full">GameDevUtopia</h1>
                        </div>
                    </div>
                </div>



                <div className="lg:w-[180px] my-4 lg:my-0 grid justify-center items-center px-2 col-start-1 col-span-2 lg:col-span-1"
                >
                    <div className="flex lg:grid lg:grid-cols-3 lg:grid-rows-3">
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