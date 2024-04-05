import React from 'react';
import { IoGameController } from "react-icons/io5";
import { VscOrganization } from "react-icons/vsc";
import { faComments, faPalette, faTrophy, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

{/* <FontAwesomeIcon icon={faCalendarCheck} /> */ }

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Games',
        path: '/games',
        icon: <IoGameController />,
        cName: 'nav-text'
    },
    {
        title: 'Designs',
        path: '/designs',
        icon: <FontAwesomeIcon icon={faPalette} />,
        cName: 'nav-text'
    },
    {
        title: 'Events',
        path: '/events',
        icon: <FontAwesomeIcon icon={faCalendarCheck} />,
        cName: 'nav-text'
    },
    {
        title: 'Achievements',
        path: '/achievements',
        icon: <FontAwesomeIcon icon={faTrophy} />,
        cName: 'nav-text'
    },
    {
        title: 'Lets Talk',
        path: '/letsTalk',
        icon: <FontAwesomeIcon icon={faComments} />,
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/about-us',
        icon: <VscOrganization />,
        cName: 'nav-text'
    }
];
