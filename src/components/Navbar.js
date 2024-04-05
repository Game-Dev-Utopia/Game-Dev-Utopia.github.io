"use client";
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from '../utilities/SidebarData';
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebar } from '@/contexts/SidebarContextProvider';
import GduLogo from "../../public/GduLogo.png"
import Image from 'next/image';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
    const [navDescp, setNavDescp] = useState(false)
    const { showSidebar } = useSidebar();
    // console.log(isFooterVisible);

    const bellButtonHandler = () => (
        toast('🎉🎉Coming Soon!!!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        })
    )

    const navToggle = () => {
        setNavDescp(!navDescp)
    }
    const pathname = usePathname();

    const navClasses = "w-[5px] text-xl h-4 sm:h-12 text-white rotate-90 sm:rotate-0"

    return (
        <>
            <div className='bg-black justify-between h-[4.3rem] px-2 flex fixed items-center w-full z-50'>
                <div className='flex justify-center items-center'>

                    <Image
                        src={GduLogo}
                        alt="gdulogo"
                        width={35}
                        height={35}
                        className="mx-4 aspect-auto object-contain text-black"
                    />
                    <span className='text-white text-2xl'>GameDevUtopia</span>
                </div>
                <FaIcons.FaBell className='absolute right-12' size={25} onClick={bellButtonHandler} />
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>



            {showSidebar && <nav
                className={'sm:w-fit sm:h-[30rem] items-center w-full max-sm:bottom-3 fixed sm:top-[20%] bg-black z-50 pt-4 pb-1 sm:py-4 rounded-2xl cursor-default shadow-sm shadow-white sm:mx-1'}>
                <ul className='w-full max-h-fit flex sm:gap-y-3 sm:flex-col items-center sm:items-start justify-evenly   '>
                    {!navDescp ? (<li
                        onClick={navToggle}
                        className='sm:flex justify-start hidden gap-5 items-center pl-6 pr-6 pt-0 pb-1 text-xl my-1.5'>
                        <FaIcons.FaBars color='white' />

                    </li>)
                        :
                        (<li
                            onClick={navToggle}
                            className='flex justify-start gap-5 items-center sm:px-6 pt-0 pb-1 text-xl my-0.5 text-white'>
                            <RxCross2 onClick={navToggle} fontWeight={900} /> <span>Close</span>
                        </li>)}
                    {SidebarData.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col-reverse sm:flex-row sm:justify-start sm:gap-4 items-center'>
                                <li

                                    className={pathname == item.path ? "rounded-lg bg-[#f3bc12]  " + navClasses : navClasses}
                                >
                                </li>
                                <Link href={item.path}>
                                    <div className={pathname == item.path ? 'flex justify-center sm:gap-7 text-[#f3bc12] items-center text-2xl' : 'flex justify-center sm:gap-7 items-center text-2xl text-white'}>
                                        {item.icon}
                                        {navDescp ? <div className='text-lg pr-4 w-40'>{item.title}</div> : null}
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </ul>
            </nav>}

        </>
    );
}

export default Navbar;