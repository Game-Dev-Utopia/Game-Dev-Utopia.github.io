import React, { useState, useEffect } from 'react';
import "./AboutUs.css";
import MemberCard from './MemberCard';
import MobileComp from './MobileComp';

const TeamSection = ({ data }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Initialize selected item with the first item from data array
    useEffect(() => {
        if (data.length > 0) {
            setSelectedItem(data[0]);
        }
    }, [data]);

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
                <div className="dropdown-options text-center bg-gray-800 sm:w-9/12 md:w-1/2  mx-auto px-4">
                    {data.map((section, index) => (
                        <div key={index} onClick={() => handleSelectItem(section)} className="dropdown-option txt-grad font-bold md:text-2xl sm:text-xl border-b-2 border-slate-500 p-2 cursor-pointer">
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
            <div className="mb-4">
                <div className="container flex justify-center mx-auto pt-8">
                    <div>
                        {data.length > 1 ? (
                            <div className="dropdown">
                                <button onClick={toggleDropdown} className="md:text-4xl sm:text-2xl text-center txt-grad font-extrabold mx-auto">
                                    {selectedItem ? selectedItem.title : data[0].title} <span className="dropdown-arrow">{isDropdownOpen ? '▲' : '▼'}</span>
                                </button>
                            </div>
                        ) : (
                            <h1 className="md:text-4xl sm:text-2xl text-center txt-grad font-extrabold mx-auto">{data[0].title}</h1>
                        )}
                    </div>
                </div>

                {renderDropdown()}

                <div className="bg-slate-800 sm:py-4 md:py-16  transition-all my-2 ease-in-out overflow-x-hidden overflow-y-scroll rounded-md mx-9 max-h-[70vh]">
                    <div className="mx-5">
                        <div className='sm:hidden flex items-center justify-between flex-wrap'>
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
