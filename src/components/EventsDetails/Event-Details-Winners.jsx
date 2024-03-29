import { useEffect, useState } from "react";
import { FaMedal } from "react-icons/fa";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const WinnerCard = ({ winner, place }) => {
    const title = (winner.leader) ? winner.teamName : winner.name;
    const image = (winner.leader) ? winner.leader.image : winner.image;

    const [scale, setScale] = useState('40%');
    const [height, setHeight] = useState('20vh');
    const [round, setRound] = useState('rounded-t-3xl');
    const [border, setBorder] = useState('');
    const [color, setColor] = useState('#FFD700');

    useEffect(() => {
        if (place == 'first') {
            setScale('60%');
            setHeight('30vh');
        }
        else if (place == 'second') {
            setHeight('25vh');
            setScale('50%');
            setRound('rounded-tl-3xl');
            setBorder('border-r-0');
            setColor('#C0C0C0');
        } else if (place == 'third') {
            setRound('rounded-tr-3xl');
            setBorder('border-l-0');
            setColor('#CD7F32');
        }
    }, [scale, height, round, border, color])



    return <div className={`Box bg-Event-Accordian w-[30vw] text-center h-[${height}] relative ${round} transition-all border-white border-2 ${border}`}>
        <div className="relative">
            <img
                className={`w-[${scale}] rounded-[50%] absolute bottom-0 left-1/2 -translate-x-1/2  ${place == 'first' ? 'FirstPlaceShadow' : ""}`}
                src={image}
                alt="IMAGE" />
        </div>
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2">
            {/* <p className={`text-[${color}] text-3xl ml-[1rem]`} >
                <FaMedal />
            </p> */}
            <p className="text-Event-heading text-3xl">{capitalizeFirstLetter(place)}</p>
            <p>{title}</p>
        </div>
    </div>
}

const Winners = ({ winners }) => {
    console.log(winners);

    const first = winners[0];
    const second = winners[1];
    const third = winners[2];

    return <div className="flex justify-center mt-[15%] py-[10%] items-end">
        <WinnerCard place={'second'} winner={second} />
        <WinnerCard place={'first'} winner={first} />
        <WinnerCard place={'third'} winner={third} />
    </div>
}

export default Winners;