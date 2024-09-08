import React from 'react';

function Marquee() {
    return (
        <div className="w-full overflow-hidden whitespace-nowrap bg-[#121213] text-white py-1 fixed top-14 z-40">
            <pre className="inline-block animate-marquee pl-full font-semibold">
             ️💻  The website is under development... Stay Tuned ! ️💻      The website is under development... Stay Tuned ! ️💻        The website is under development... Stay Tuned ! ️💻         The website is under development... Stay Tuned ! ️💻
            </pre>
        </div>
    );
}

export default Marquee;
