import React, { useState, useEffect, useRef } from 'react';
import "./AboutUs.css";
import MemberCard from './MemberCard';
import MobileComp from './MobileComp';

const TeamSection = ({ data }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrollEnabled, setIsScrollEnabled] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (data.length > 0) {
            setSelectedItem(data[0]);
        }
    }, [data]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsScrollEnabled(entry.intersectionRatio >= 1);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 1.0,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSelectItem = (item) => {
        setSelectedItem(item);
        setIsDropdownOpen(false);
    };

    const renderDropdown = () => {
        if (isDropdownOpen) {
            return (
                <div className="dropdown-options text-center bg-gray-900 sm:w-9/12 md:w-1/3  mx-auto px-4">
                    {data.map((section, index) => (
                        <div key={index} onClick={() => handleSelectItem(section)} className="dropdown-option txt-grad font-bold md:text-2xl sm:text-sm border-b-2 border-slate-500 md:p-2 sm:p-1 cursor-pointer">
                            {section.title}
                        </div>
                    ))}
                </div>
            );
        }
    };

    const renderData = () => {
        if (data.length === 1) {
            return data[0].data.map((item, i) => <MemberCard data={item} key={i} />);
        } else if (selectedItem) {
            return selectedItem.data.map((item, i) => <MemberCard data={item} key={i} />);
        }
    };

    const renderDatamob = () => {
        if (data.length === 1) {
            return data[0].data.map((item, i) => <MobileComp data={item} key={i} />);
        } else if (selectedItem) {
            return selectedItem.data.map((item, i) => <MobileComp data={item} key={i} />);
        }
    };

    return (
        <>
        
            <div className="mb-2">
                <div className="container flex justify-center mx-auto pt-8">
                    <div>
                        {data.length > 1 ? (
                            <div className="dropdown">
                                <button onClick={toggleDropdown} className="md:text-4xl sm:text-xl text-center txt-grad font-extrabold mx-auto">
                                    {selectedItem ? selectedItem.title : data[0].title} <span className="dropdown-arrow md:text-2xl sm:text-lg">{isDropdownOpen ? '▲' : '▼'}</span>
                                </button>
                            </div>
                        ) : (
                            <h1 className="md:text-4xl sm:text-3xl text-center txt-grad font-extrabold mx-auto">{data[0].title}</h1>
                        )}
                    </div>
                </div>

                {renderDropdown()}

                <div ref={containerRef} className={`bg-slate-900 sm:pt-4 md:pt-16 transition-all mt-2 ease-in-out overflow-x-hidden overflow-y-${isScrollEnabled ? 'scroll' : 'hidden'} rounded-md mx-9 max-h-[70vh]`}>
                    <div className="md:mx-5">
                        <div className='sm:hidden grid grid-cols-2 justify-between'>
                            {renderDatamob()}
                        </div>

                        <div className="hidden lg:flex md:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                            {renderData()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamSection;
