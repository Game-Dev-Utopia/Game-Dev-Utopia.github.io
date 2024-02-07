'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as FaIcons from 'react-icons/fa';

const SocialMediaHandle = ({ socialMediaIcon, socialMedia }) => {
    if (socialMedia.length != 2) {
        console.error("Should Provide more than 2 social media handle");
        return <br/>;
    }
    const link = socialMedia[0] + socialMedia[1];
    const fullhandle = socialMedia[1];
    var handle = socialMedia[1];
    const handle_size = socialMedia[1].length;
    const max_handle_size = 7; 

    if(handle_size > max_handle_size)
        handle = socialMedia[1].substring(0,max_handle_size-1) + "...";
        
    
    return (
        <a title={`${fullhandle}`} className="flex text-[2.2vw] sm:text-[0.7vw] border-white rounded-lg hover:scale-110 transition-transform m-1 sm:p-1" href={link} target={"_blank"}> 
            <div className='text-xl'>{socialMediaIcon}</div>
            <div className='pl-1 text-[2.8vw] mx-1 my-auto sm:text-[0.6vw]  block hover:block '><b>{handle}</b></div>
        </a>
    );
}

const Card = ({ data }) => {
    const name = data.name;
    const designation = data.designation;
    const desc = data.desc;
    const profileImageURL = data.profileImageURL;
    const bgImageURL = data.bgImageURL;

    return (
        <div key={name} className={`ml-[3%] sm:Card w-[85vw] sm:w-[16.667%] overflow-hidden transition-all animate-[cardShuffleIn_1s]`}>
            <div className='bg-[#23141D] sm:hover:bg-[#23141d72] transition-all duration-300 backdrop-blur-xl p-[5%] shadow-[-20px_5px_30px_0px_rgba(0,0,0,0.7)] rounded-[10px] '> 
                <div className="w-full h-auto" >   
                    {<Image
                        width={640}
                        height={360}
                        className='CardBGClip aspect-video'
                        src={bgImageURL}
                        alt="BG"
                    />} 
                </div>
                <div className={`relative ${!profileImageURL ? "mt-[0%]" : "mt-[15%]"}`}>

                    {profileImageURL && <div className="absolute w-1/4 h-auto -translate-y-[150%] flex-1 m-[5%] ml-[1%]">
                        <Image
                            className='rounded-[50%] '
                            width={640}
                            height={360}
                            src={profileImageURL}
                            alt="ProfileIMG"
                        /> 
                    </div>}
                    <div className="flex-[4] p-3 text-white">
                        <h1 className={`text-3xl sm:text-xl ${!designation && "pb-3 text-4xl sm:text-2xl"}`}><b>{name}</b></h1>
                        {designation != "" &&
                            <h3 className='text-xl sm:text-sm text-gray-400'>{designation}</h3>
                        }
                        <p className={`text-xl sm:text-lg ${!designation && "text-2xl sm:text-xl leading-8"}`} >{desc}</p>
                    </div>
                </div>
                <br />
                {designation &&
                    <div className='flex justify-center px-[8%]'>
                        <SocialMediaHandle socialMediaIcon={<FaIcons.FaLinkedin />} socialMedia={data.linkedin} />
                        <SocialMediaHandle socialMediaIcon={<FaIcons.FaGithub />} socialMedia={data.github} />
                        <SocialMediaHandle socialMediaIcon={<FaIcons.FaInstagram />} socialMedia={data.instagram} />
                    </div>
                }
            </div>
        </div>
    );
}

export default Card;
