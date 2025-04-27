"use client";
import React, { useState, useEffect } from 'react';
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
import Marquee from './Marquee';
import Cookies from 'js-cookie';
import { DropdownMenu, DropdownMenuLabel, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuSeparator } from './ui/dropdown-menu';
import Modal from './ui/modal';
import axios from '../api/axios';
import { ChevronDown } from 'lucide-react';

function Navbar() {
    const [navDescp, setNavDescp] = useState(false)
    const { showSidebar } = useSidebar();
    // console.log(isFooterVisible);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const [username, setUsername] = useState(null);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [profileInfo, setProfileInfo] = useState(null);

    useEffect(() => {
        // Check if the UID cookie exists
        const uid = Cookies.get('uid');
        // console.log(avatarCookie);
        console.log(uid);

        if (uid) {
            const avatarCookie = (JSON.parse(uid)).avatar;
            const usernameCookie = (JSON.parse(uid)).username;
            setIsLoggedIn(true);
            setAvatar(avatarCookie);
            console.log(avatarCookie);
            setUsername(usernameCookie);
            axios.get('/api/auth/discord/getUserData', {
                headers: {
                    'User-Id': Cookies.get('uid'),
                }
            }).then((response) => {
                let ModalData = response.data;
                setProfileInfo(ModalData);
            });
        }
    }, []);

    const handleProfileClick = () => {
        setShowProfileModal(true); // Show the modal when "Profile" is clicked
    };

    const closeModal = () => {
        setShowProfileModal(false); // Close the modal
    };

    const joinUserToGuild = async () => {
        setProfileInfo({ ...profileInfo, buttonText: "Joining..." });
        const addToGuildResponse = await axios.get('/api/auth/discord/addToGuild', {
            headers: {
                'User-Id': Cookies.get('uid'),
            }
        });
        console.log(addToGuildResponse.data);
        if (addToGuildResponse.data.message == "User added to guild successfully") {
            setProfileInfo({ ...profileInfo, buttonText: "Close" });
            toast('🎉🎉 Successfully joined the guild!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "coloured",
                transition: Bounce,
                className: 'text-white bg-slate-800 rounded-lg flex items-center shadow-lg p-2 font-bold',
                progressStyle: { backgroundColor: '#26C6DA' }
            });
        } else {
            toast('❌ Failed to join the guild!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "coloured",
                transition: Bounce,
                className: 'text-white bg-slate-800 rounded-lg flex items-center shadow-lg p-2 font-bold',
                progressStyle: { backgroundColor: '#26C6DA' }
            });
        }
    };

    const CloseButton = ({ closeToast }) => (
        <RxCross2 className='text-lg me-4' onClick={closeToast} />
    );

    const bellButtonHandler = () => (
        toast('🎉🎉 Coming Soon!!!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "coloured",
            transition: Bounce,
            className: 'text-white bg-slate-800 rounded-lg flex items-center shadow-lg p-2 font-bold',
            progressStyle: { backgroundColor: '#26C6DA' }

        })
    )

    const navToggle = () => {
        setNavDescp(!navDescp)
    }
    const pathname = usePathname();

    const navClasses = "w-[5px] text-xl h-4 sm:h-12 text-white rotate-90 sm:rotate-0"

    return (
        <>
            <div className='bg-black justify-between h-[3.5rem] px-2 flex fixed items-center w-full z-50'>
                <Link href={"/"}>
                    <div className='flex justify-center items-center'>

                        <Image
                            src={GduLogo}
                            alt="gdulogo"
                            width={30}
                            height={30}
                            className="mx-4 aspect-auto object-contain text-black"
                        />
                        <span className='text-white text-lg sm:text-2xl'>GameDevUtopia</span>
                    </div>
                </Link>
                <div className='ml-auto'>
                    {isLoggedIn ? (
                        // Show avatar if logged in
                        <div className='flex items-center'>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <div className='flex'>
                                        <Image
                                            src={avatar} // Replace with the actual avatar path
                                            alt="User Avatar"
                                            width={30}
                                            height={30}
                                            className="rounded-full"
                                        />
                                        <span className='text-white ml-2 mt-1'>{username?.split(" ")[0]}</span>
                                        <ChevronDown className='text-white ml-1 mt-1.5' size={20} />
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                                    <DropdownMenuItem onClick={handleProfileClick}>
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => alert("Settings clicked!")}>
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => {
                                        Cookies.remove('uid');
                                        setIsLoggedIn(false);
                                        toast('🎉🎉 Logged out successfully!', {
                                            position: "top-right",
                                            autoClose: 1000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "coloured",
                                            transition: Bounce,
                                            className: 'text-white bg-slate-800 rounded-lg flex items-center shadow-lg p-2 font-bold',
                                            progressStyle: { backgroundColor: '#26C6DA' }
                                        });
                                        window.location.href = (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8080") + "/api/auth/logout";
                                        console.log("Logged out!");
                                    }}>
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    ) : (
                        // Show Discord login button if not logged in
                        <Link href={(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8080") + "/api/auth/login"}>
                            <div className='flex items-center justify-center bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-all duration-300'>
                                <FaIcons.FaDiscord size={20} className='mr-2' />
                                <span className='text-sm sm:text-lg font-semibold'>Login</span>
                            </div>
                        </Link>
                    )}
                </div>
                {/* <FaIcons.FaBell className='absolute sm:right-12 right-6 max-sm:w-5 max-sm:h-5' size={25} onClick={bellButtonHandler} /> */}
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeButton={CloseButton}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>


            <Marquee />

            {showSidebar && <nav
                className={'sm:w-fit sm:h-[30rem] items-center w-full max-sm:bottom-0.5 fixed sm:top-[17%] bg-black z-50 pt-4 pb-1 sm:py-4 rounded-xl cursor-default shadow-sm shadow-white sm:mx-0.5'}>
                <ul className='w-full h-full flex sm:gap-y-3 sm:flex-col sm:items-start items-center justify-evenly sm:justify-center'>


                    {!navDescp ?
                        (<li
                            onClick={navToggle}
                            className='sm:flex hidden gap-5 px-4 pt-0 pb-1 text-lg my-1.5'>
                            <FaIcons.FaBars color='white' />

                        </li>)
                        :
                        (<li
                            onClick={navToggle}
                            className='flex gap-5 sm:items-center sm:px-4 pt-0 pb-0.5 text-lg my-0.5 text-white'>
                            <RxCross2 onClick={navToggle} fontWeight={900} /> <span>Close</span>
                        </li>)}


                    {SidebarData.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col-reverse sm:flex-row justify-center sm:gap-y-4 sm:gap-x-2 items-center'>
                                <li
                                    className={pathname === item.path ? "rounded-lg bg-grad " + navClasses : navClasses}
                                >
                                </li>
                                <Link href={item.path}>
                                    <div className={pathname == item.path ? 'flex justify-center sm:gap-7 text-cyan-400 items-center text-[1.35rem]'
                                        :
                                        'flex justify-center sm:gap-7 items-center text-[1.35rem] text-white'}>
                                        {item.icon}
                                        {navDescp ? <div className='text-lg pr-4 w-40'>{item.title}</div> : null}
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </ul>
            </nav>}

            {/* Profile Modal */}
            {showProfileModal && (
                <Modal onClose={closeModal}>
                    <div className="flex flex-col items-center p-6">
                        <Image
                            src={avatar}
                            alt="User Avatar"
                            width={80}
                            height={80}
                            className="rounded-full mb-4"
                        />
                        <h2 className="text-xl font-bold text-white">{username}</h2>
                        <p className="text-gray-400">{profileInfo?.displayText || "Unable to show profile info for now!"}</p>
                        <button
                            onClick={(profileInfo?.buttonText == "Join Server")? joinUserToGuild : closeModal}
                            className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-all"
                        >
                            {profileInfo?.buttonText || "Close"}
                        </button>
                    </div>
                </Modal>
            )}

        </>
    );
}

export default Navbar;