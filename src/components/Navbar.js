"use client";
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from '../utilities/SidebarData';
import { IconContext } from 'react-icons';
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebar } from '@/contexts/SidebarContextProvider';

function Navbar() {
    const [navDescp, setNavDescp] = useState(false)
    const { showSidebar } = useSidebar();
    // console.log(isFooterVisible);

    const navToggle = () => {
        setNavDescp(!navDescp)
    }
    const pathname = usePathname();

    const navClasses = "w-[5px] text-xl h-4 sm:h-12 text-white rotate-90 sm:rotate-0"

    return (
        <>
            {/* <div className='bg-black h-16 flex justify-start items-center w-full z-50'>
                <span className='text-white px-4 text-xl'>GameDevUtopia</span>
            </div> */}
            {showSidebar && <nav
                className={'sm:w-fit w-full max-sm:bottom-3 fixed sm:top-[20%] bg-black z-50 pt-4 pb-1 sm:py-4 rounded-2xl shadow-sm shadow-white sm:mx-1'}>
                <ul className='w-full max-h-fit flex sm:flex-col items-center sm:items-start justify-evenly   '>
                    {!navDescp ? (<li
                        onClick={navToggle}
                        className='sm:flex justify-start hidden gap-5 items-center pl-6 pr-6 pt-0 pb-1 text-xl my-1.5'>
                        <FaIcons.FaBars color='white' />

                    </li>)
                        :
                        (<li
                            onClick={navToggle}
                            className='flex justify-start gap-5 items-center pl-6 pr-6 pt-0 pb-1 text-xl my-1.5 text-white'>
                            <RxCross2 onClick={navToggle} fontWeight={900} />
                        </li>)}
                    {SidebarData.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col-reverse sm:flex-row sm:justify-start sm:gap-4 items-center'>
                                <li

                                    className={pathname == item.path ? "rounded-lg bg-[#3d64ff]  " + navClasses : navClasses}
                                >
                                </li>
                                <Link href={item.path}>
                                    <div className={pathname == item.path ? 'flex justify-center sm:gap-7 text-[#3d64ff] items-center text-xl' : 'flex justify-center gap-7 items-center text-xl text-white'}>{item.icon}
                                        {navDescp ? <div className='text-lg pr-4 w-32'>{item.title}</div> : null}
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