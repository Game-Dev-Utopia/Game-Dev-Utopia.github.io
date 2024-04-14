"use client";

import Image from "next/image";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

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

function extractUsername(url) {
    let username = null;
    const githubRegex = /github.com\/([^/]+)/;
    const instagramRegex = /instagram.com\/([^/]+)/;
    const linkedinRegex = /linkedin.com\/in\/([^/]+)/;
    const emailRegex = /(?:mailto:)?([^@]+)/;

    if (githubRegex.test(url)) {
        username = url.match(githubRegex)[1];
    } else if (instagramRegex.test(url)) {
        username = url.match(instagramRegex)[1];
    } else if (linkedinRegex.test(url)) {
        username = url.match(linkedinRegex)[1];
    } else if (emailRegex.test(url)) {
        username = url.match(emailRegex)[1];
    }

    return username;
}

const SocialMediaHandle = ({ socialMediaIcon, socialMedia }) => {
//console.log("social media " + socialMedia);


  var handle = socialMedia;
  console.log("handle " + handle);
  var link = handle;
  var fullhandle = extractUsername(socialMedia);
  console.log("full handle " + fullhandle);

  return (
    <Link
      title={fullhandle}
      className="flex text-[2.2vw] sm:text-[0.7vw] border-white rounded-lg hover:scale-125 transition-transform m-1 sm:p-1"
      href={link && ""}
      target={"_blank"}
    >
      <div className="text-xl">{socialMediaIcon}</div>
      <div className="pl-1 text-[2.8vw] mx-1 my-auto sm:text-[0.6vw]  block hover:block ">
        <b>{fullhandle}</b>
      </div>
    </Link>
  );
};

const Card = ({ data, index, cardsCount }) => {
  const ref = useRef(0);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const isFirstCard = index == cardsCount - 1;

  const WinSize = useWindowSize();

  const onTouchStart = (e) => {
    // if(WinSize.width >= 768)
    //     return;
    setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
    if (isFirstCard) setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    // if(WinSize.width >= 768)
    //     return;
    if (isFirstCard) {
      setTouchEnd(e.targetTouches[0].clientX);
      // e.target.style.transform = `translateX(${(-100 * (touchStart - touchEnd)/100)}%)`;
      if (touchStart > touchEnd) {
        ref.current.style.transform = `translate(${
          (-100 * (touchStart - touchEnd)) / 100
        }%, -50%)`;
        ref.current.style.width = "80vw";
      }
    }
  };

  const onTouchEnd = () => {
    if (WinSize.width >= 768) return;
    setTouchStart(0);
    setTouchEnd(0);
    ref.current.style.transform = `translate(12.5%, -50%)`;
  };

  const name = data.name;
  const designation = data.responsibilities.join(" | ");;
  const desc = data.intro;
  const profileImageURL = data.profileImageURL ? data.profileImageURL : "https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg";

  const bgImageURL = data.bgImageURL  ? data.bgImageURL : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8aa232c4-f9c7-4417-984d-226afb4e830d/dar360x-9d1aa30d-55fb-42df-a9b9-47fd1a84decf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhYTIzMmM0LWY5YzctNDQxNy05ODRkLTIyNmFmYjRlODMwZFwvZGFyMzYweC05ZDFhYTMwZC01NWZiLTQyZGYtYTliOS00N2ZkMWE4NGRlY2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7O1V8vunJyfSW8A56UVGCeYvNu87jRaU1_CtmZTQrY0";

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      key={name}
      ref={ref}
      className={`Mobile-Card Card backdrop-blur-3xl bg-cyan-500 sm:w-[16.667%] sm:transition-all sm:animate-[cardShuffleIn_1s] rounded-lg`}
    >
      <div className="bg-slate-800 transition-all duration-300 p-[5%] rounded-lg">
        <div className="w-full h-auto">
          {
            <Image
              width={640}
              height={360}
              className="CardBGClip aspect-video"
              src={bgImageURL}
              alt="BG"
            />
          }
        </div>
        <div
          className={`relative ${!profileImageURL ? "mt-[0%]" : "mt-[15%]"}`}
        >
          {profileImageURL && (
            <div className="absolute w-1/4 h-auto -translate-y-[150%] flex-1 m-[5%] ml-[1%]">
              <Image
                className="rounded-[50%] "
                width={640}
                height={360}
                src={profileImageURL}
                alt="ProfileIMG"
              />
            </div>
          )}
          <div className="flex-[4] p-3 text-white">
            <h1
              className={`text-3xl sm:text-xl ${
                !designation && "pb-3 text-4xl sm:text-2xl"
              }`}
            >
              <b>{name}</b>
            </h1>
            {designation != "" && (
              <h3 className="text-xl sm:text-sm text-gray-400">
                {designation}
              </h3>
            )}
            <p
              className={`text-xl max-h-[8rem] overflow-y-scroll sm:text-lg ${
                !designation && "text-2xl sm:text-xl leading-8"
              }`}
            >
              {desc}
            </p>
          </div>
        </div>
        <br />
        { (
          <>
            <div className="flex justify-evenly px-[8%]">
              <SocialMediaHandle
                socialMediaIcon={<FaIcons.FaEnvelopeSquare />}
                socialMedia={data.email}
              />
              <SocialMediaHandle
                socialMediaIcon={<FaIcons.FaPhoneSquare />}
                socialMedia={data.contact}
              />
            </div>
            <div className="flex justify-center px-[8%]">
              <SocialMediaHandle
                socialMediaIcon={<FaIcons.FaLinkedin />}
                socialMedia={data.linkedin}
              />
              <SocialMediaHandle
                socialMediaIcon={<FaIcons.FaGithub />}
                socialMedia={data.github}
              />
              <SocialMediaHandle
                socialMediaIcon={<FaIcons.FaInstagram />}
                socialMedia={data.instagram}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
