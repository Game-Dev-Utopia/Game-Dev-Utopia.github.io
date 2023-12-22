'use client';

import { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';

const SocialMediaHandle = ({ socialMediaIcon, socialMedia }) => {
    if (socialMedia.length != 2) {
        console.error("Should Provide more than 2 social media handle");
        return <br/>;
    }
    const link = socialMedia[0] + socialMedia[1];
    const handle = socialMedia[1];
    return (
        <a className="flex border-white rounded-lg text-[0.5vw] hover:scale-110 transition-transform border m-2 p-2" href={link} target={"_blank"}> 
            {socialMediaIcon}
            <p><b>{handle}</b></p>
        </a>
    );
}

const Card = ({ data }) => {
    const name = data.name;
    const desc = data.desc;
    const profileImageURL = data.profileImageURL;
    const bgImageURL = data.bgImageURL;

    return (
        <div key={name} className={`Card shadow-red-800 transition-all animate-[cardShuffleIn_1s]`}>
            <img 
                className="w-full CardBGClip"
                src={bgImageURL}
                alt="BG"
            />
            <div className="flex mt-[15%]">
                <img 
                    className="w-1/5 h-1/5 rounded-[50%] flex-1 m-[5%] ml-0"
                    src={profileImageURL}
                    alt="ProfileIMG"
                />
                <div className="flex-[4]">
                    <h1 className="text-gray-200"><b>{name}</b></h1>
                    <p className="text-gray-500">{desc}</p>
                </div>
            </div>
            <br />
            <div className='flex justify-center px-[8%]'>
                <SocialMediaHandle socialMediaIcon={<FaIcons.FaTwitter />} socialMedia={data.twitter} />
                <SocialMediaHandle socialMediaIcon={<FaIcons.FaInstagram />} socialMedia={data.instagram} />
                <SocialMediaHandle socialMediaIcon={<FaIcons.FaGithub />} socialMedia={data.github} />
            </div>
        </div>
    );
}

export default Card;
