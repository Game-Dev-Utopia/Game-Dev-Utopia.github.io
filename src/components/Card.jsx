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
    const handle = socialMedia[1];
    return (
        <a className="flex text-[2.2vw] sm:text-[0.7vw] border-white rounded-lg hover:scale-110 transition-transform border m-2 p-2" href={link} target={"_blank"}> 
            {socialMediaIcon}
            <p className='text-[1.8vw] sm:text-[0.5vw] '><b>{handle}</b></p>
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
                    <Image
                        width={640}
                        height={360}
                        className='CardBGClip aspect-video'
                        src={bgImageURL}
                        alt="BG"
                    /> 
                </div>
                <div className="relative mt-[15%]">
                    <div className="absolute w-1/4 h-auto -translate-y-[150%] flex-1 m-[5%] ml-[1%]">
                        <Image
                            className='rounded-[50%] '
                            width={640}
                            height={360}
                            src={profileImageURL}
                            alt="ProfileIMG"
                        /> 
                    </div>
                    <div className="flex-[4] p-3 text-white">
                        <h1 className='text-3xl sm:text-xl'><b>{name}</b></h1>
                        <h3 className='text-xl sm:text-sm text-gray-400'>{designation}</h3>
                        <p className='text-xl sm:text-lg' >{desc}</p>
                    </div>
                </div>
                <br />
                <div className='flex justify-center px-[8%]'>
                    <SocialMediaHandle socialMediaIcon={<FaIcons.FaTwitter />} socialMedia={data.twitter} />
                    <SocialMediaHandle socialMediaIcon={<FaIcons.FaInstagram />} socialMedia={data.instagram} />
                    <SocialMediaHandle socialMediaIcon={<FaIcons.FaGithub />} socialMedia={data.github} />
                </div>
            </div>
        </div>
    );
}

export default Card;
