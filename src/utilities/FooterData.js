import { FaInstagram, FaXTwitter, FaLinkedinIn, FaDiscord } from "react-icons/fa6";

const socials = [
    {
        handle: "LinkedIn",
        logo: <FaLinkedinIn />,
        classes: "linkedin col-start-2 row-start-1",
        path: "https://www.linkedin.com/company/gamedevutopia/",
    },
    {
        handle: "Instagram",
        logo: <FaInstagram />,
        classes: "insta col-start-1 row-start-2",
        path: "https://www.instagram.com/gamedevutopia/",
    },
    {
        handle: "Twitter",
        logo: <FaXTwitter />,
        classes: "twitter col-start-3 row-start-2",
        path: "https://twitter.com/GameDevUtopia1",
        onHover: <FaXTwitter color="black" />
    },
    {
        handle: "Discord",
        logo: <FaDiscord />,
        classes: "discord col-start-2 row-start-3",
        path: "https://discord.com/channels/815263614474125382/815263614474125385",
    }
]

const footerContents = [
    {
        title: "Quick Links",
        content: [
            {
                name: "Achievements",
                link: "/achievements"
            },
            {
                name: "Projects",
                arr: [
                    {
                        display: "Game Shelf",
                        link: "/gameshelf"
                    },
                    {
                        display: "ArtWorks",
                        link: "/artworks"
                    }
                ]
            },
            {
                name: "About Us",
                link: "/aboutus"
            },
            {
                name: "Teams",
                link: "/teams"
            }
        ]
    },
    {
        title: "Let's Talk",
        content: [
            {
                name: "",
                arr: [

                    {
                        display: "FAQs",
                        link: "/faqs"
                    },
                    {
                        display: "Join Us",
                        link: "/joinus"
                    },
                    {
                        display: "Support Us",
                        link: "/supportus"
                    },
                    {
                        display: "Become Our Partner",
                        link: "/partner"
                    }
                ]
            },
            {
                name: "CopyRights and Patents",
                link: "/copyrights"
            },
            {
                name: "Privacy Policy",
                link: "/privacypolicy"
            }
        ]
    }
];


export { socials, footerContents }