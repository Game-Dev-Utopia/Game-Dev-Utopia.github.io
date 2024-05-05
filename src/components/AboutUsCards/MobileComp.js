import { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhoneSquare } from 'react-icons/fa';
import Link from 'next/link';

const MobileComp = ({ data }) => {
    var profile = data.profileImageURL ? data.profileImageURL : "https://pics.craiyon.com/2023-07-20/4e251c98f18f4fbf904265d4f2f02e2b.webp";
    const [modalOpen, setModalOpen] = useState(false);
    const designation = data.bodies[0].responsibilities.join(" | ");

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className='mt-5 mx-2'>
                <div className="w-20 h-20 m-auto items-center" onClick={openModal}>
                    <img src={profile} alt="Member Photo" role="img" className="rounded-full object-fit h-full w-full shadow-md" />
                </div>
                <div className="mt-1">
                    <h1 className="font-bold text-white text-[10px] text-center ">{data.name}</h1>
                    <p className="text-white font-semibold text-[8px] text-center">{designation.substring(0,10) }...</p>
                </div>
            </div>

            {modalOpen && (
                <div
                    className="fixed inset-0 bg-gray-600 bg-opacity-90 flex justify-center items-center"
                    onClick={closeModal}
                >
                    <div className="relative w-4/5">

                        <div className="rounded overflow-hidden shadow-md bg-gradient-to-br from-slate-900 via-slate-700 to-slate-600">
                            <div className="absolute -mt-20 w-full flex justify-center">
                                <div className="h-32 w-32">
                                    <img src={profile} alt="Member Photo" role="img" className="rounded-full object-fit h-full w-full shadow-md" />
                                </div>
                            </div>
                            <div className="px-6 mt-16">
                                <h1 className="font-bold text-white text-3xl text-center mb-1">{data.name}</h1>
                                <p className="text-white font-semibold text-sm text-center">{designation}</p>

                                <p className="text-center text-gray-200 text-base pt-3 font-normal h-32 overflow-x-scroll">{data.intro}</p>

                                <div className="w-full flex justify-center pt-5 pb-5">
                                    {data.linkedin && <Link href={data.linkedin} className="mx-3">
                                        <div aria-label="LinkedIn" role="img">
                                            <FaLinkedin className='text-cyan-500 h-5 w-5' />
                                        </div>
                                    </Link>
                                    }
                                    {data.github && <Link href={data.github} className="mx-3">
                                        <div aria-label="Github" role="img">
                                            <FaGithub className='text-cyan-500 h-5 w-5' />
                                        </div>
                                    </Link>
                                    }
                                    {data.instagram && <Link href={data.instagram} className="mx-3">
                                        <div aria-label="Instagram" role="img">
                                            <FaInstagram className='text-cyan-500 h-5 w-5' />
                                        </div>
                                    </Link>
                                    }
                                    {data.email && <Link href={data.email} className="mx-3">
                                        <div aria-label="Email" role="img">
                                            <MdEmail className='text-cyan-500 h-5 w-5' />
                                        </div>
                                    </Link>
                                    }
                                    {data.phone && <Link to={data.phone} className="mx-3">
                                        <div aria-label="Phone" role="img">
                                            <FaPhoneSquare className='text-cyan-500 h-5 w-5' />
                                        </div>
                                    </Link>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default MobileComp;
