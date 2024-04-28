import { FaInstagram, FaXTwitter, FaLinkedinIn, FaDiscord } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { VscOrganization } from "react-icons/vsc";
import { faGamepad, faComments, faHandshakeSimple, faUserPlus, faPalette, faHandHoldingDollar, faTrophy, faCalendarCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
{/* <FontAwesomeIcon icon={faGamepad} /> */ }

const socials = [
    {
        handle: "LinkedIn",
        logo: <FaLinkedinIn />,
        classes: "linkedin col-start-2 col-span-2",
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
                display: "Achievements",
                link: "/achievements",
                icon: faTrophy
            },
            {
                display: "Game Shelf",
                link: "/games",
                reactIcon: IoGameController
            },
            {
                display: "Art Works",
                link: "/designs",
                icon: faPalette
            },
            {
                display: "About Us",
                link: "/about-us",
                icon: faUsers
            },
            {
                display: "Events",
                link: "/events",
                icon: faCalendarCheck
            }

        ]
    },
    {
        title: "Let's Talk",
        content: [

            {
                display: "FAQs",
                link: "/letsTalk",
                icon: faComments
            },
            {
                display: "Join Us",
                link: "/letsTalk",
                icon: faUserPlus
            },
            {
                display: "Support Us",
                link: "/letsTalk",
                icon: faHandHoldingDollar
            },
            {
                display: "Become Our Partner",
                link: "/letsTalk",
                icon: faHandshakeSimple
            }

            // {
            //     name: "CopyRights and Patents",
            //     link: "/copyrights"
            // },
            // {
            //     name: "Privacy Policy",
            //     link: "/privacypolicy"
            // }
        ]
    }
];


export { socials, footerContents }