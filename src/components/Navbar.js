"use client";
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from '../utilities/SidebarData';
import { IconContext } from 'react-icons';
import { ImCross } from "react-icons/im";
import Link from 'next/link';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [navDescp, setNavDescp] = useState(false)

    const navToggle = () => {
        setSidebar(true)
        setNavDescp(!navDescp)
    }


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='bg-black h-16 flex justify-start items-center'>
                    <span className='text-white px-4 text-xl'>GameDevUtopia</span>
                </div>
                <nav
                    className={sidebar ? 'bg-black flex justify-center fixed top-1/4 py-4 rounded-2xl left-1' : 'bg-black flex justify-center fixed top-1/4 py-4 rounded-2xl -left-full'}
                    onMouseEnter={() => setSidebar(true)}
                    onMouseLeave={() => { setSidebar(false); setNavDescp(false) }}>
                    <ul className='w-full'>
                        {!navDescp ? (<li
                            onClick={navToggle}
                            className='flex justify-start gap-5 items-center pl-6 pr-6 pt-0 pb-4 text-xl my-1.5'>
                            <FaIcons.FaBars />
                        </li>)
                            :
                            (<li
                                onClick={navToggle}
                                className='flex justify-start gap-5 items-center pl-6 pr-6 pt-0 pb-4 text-xl my-1.5 text-white'>
                                <ImCross onClick={navToggle} /> close
                            </li>)}
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className='flex justify-between gap-6 items-center pl-6 pr-6 pt-0 pb-4 text-xl my-1.5 h-12 text-white'>
                                    <Link href={item.path}>
                                        <div className='flex gap-5 items-center'>{item.icon}
                                            {navDescp ? <div className=''>{item.title}</div> : null}
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
            <div>
                {!sidebar ? (<div className="font-semibold absolute top-1/2 text-xl text-white bg-black rounded-r-full pr-2.5 py-2 left-1 pl-1.5" onMouseOver={() => setSidebar(true)} onMouseLeave={() => setSidebar(false)}>&gt;</div>) : ("")}
            </div>
        </>
    );
}

export default Navbar;
