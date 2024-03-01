'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
     
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  return windowSize;
}

const SocialMediaHandle = ({ socialMediaIcon, socialMedia }) => {
    if (socialMedia.length != 2) {
        return <br/>;
    }

    const link = socialMedia[0] + socialMedia[1];
    const fullhandle = socialMedia[1];
    var handle = socialMedia[1];
    const handle_size = socialMedia[1].length;
    const max_handle_size = 7; 

    if(handle_size > max_handle_size)
        handle = socialMedia[1].substring(0, max_handle_size-1) + "...";
    
    return (
        <Link title={fullhandle} className="flex text-[2.2vw] sm:text-[0.7vw] border-white rounded-lg hover:scale-125 transition-transform m-1 sm:p-1" href={link && ""} target={"_blank"}> 
            <div className='text-xl'>{socialMediaIcon}</div>
            <div className='pl-1 text-[2.8vw] mx-1 my-auto sm:text-[0.6vw]  block hover:block '><b>{handle}</b></div>
        </Link>
    );
}

const Card = ({ data, index, cardsCount}) => {
    const ref = useRef(0);

    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const isFirstCard = (index == cardsCount-1);


    const WinSize = useWindowSize();


    const onTouchStart = (e) => {
        // if(WinSize.width >= 768)
        //     return;
        setTouchEnd(0) // otherwise the swipe is fired even with usual touch events
        if (isFirstCard) setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchMove = (e) => {
        // if(WinSize.width >= 768)
        //     return;
        if (isFirstCard) {
            setTouchEnd(e.targetTouches[0].clientX);
            // e.target.style.transform = `translateX(${(-100 * (touchStart - touchEnd)/100)}%)`;
            ref.current.style.transform = `translate(${(-100 * (touchStart - touchEnd)/100)}%, -50%)`;
            ref.current.style.width = "80vw";
        }
    };

    const onTouchEnd = () => {
        if(WinSize.width >= 768)
            return;
        setTouchStart(0);
        setTouchEnd(0);
        ref.current.style.transform = `translate(12.5%, -50%)`;
    }

    const name = data.name;
    const designation = data.designation;
    const desc = data.desc;
    const profileImageURL = data.profileImageURL;
    const bgImageURL = data.bgImageURL;

    return (
        <div 
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            key={name} 
            ref={ref}
            className={`Mobile-Card sm:Card sm:w-[16.667%] sm:transition-all sm:animate-[cardShuffleIn_1s] rounded-lg`}
        >
            <div className='bg-card-background-primary sm:hover:bg-[#00000055] transition-all duration-300 backdrop-blur-xl p-[5%] rounded-lg'> 
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
