import { FaTrophy } from "react-icons/fa";

const Prize = ({ name, prize, index }) => {
    var color = "text-amber-400"
    if (index == 1) {
        color = "text-lime-50"
    } else if (index == 2) {
        color = "text-yellow-700"
    }

    var place = "1st";
    if (index == 1) place = "2nd"
    if (index == 2) place = "3rd"

    var size = "text-[4rem]";
    if (index == 1) size = "text-[3rem]"
    if (index == 2) size = "text-[2rem]"

    var sm_size = "sm:text-[8rem]";
    if (index == 1) sm_size = "sm:text-[6rem]"
    if (index == 2) sm_size = "sm:text-[4rem]"

    return (
        <div className="flex flex-col w-[30%] text-xl items-center">
            <FaTrophy className={`${size} ${sm_size} ${color}`} />
            <p>{place}</p>
            <p>{prize}</p>
        </div>
    )
}

const Prizes = ({ prizes }) => {
    return (
        <>
            <div className="flex justify-center mb-[5%]">
                <p className="text-3xl sm:text-[3rem] text-white"><b>PRIZES</b></p>
            </div>
            <div className="w-full flex justify-center items-end">
                <Prize
                    name={prizes[1].PrizeName}
                    prize={prizes[1].Prize}
                    index={1}
                    key={1}
                />
                <Prize
                    name={prizes[0].PrizeName}
                    prize={prizes[0].Prize}
                    index={0}
                    key={0}
                />
                <Prize
                    name={prizes[2].PrizeName}
                    prize={prizes[2].Prize}
                    index={2}
                    key={2}
                />
            </div>
        </>
    )
}

export default Prizes;
