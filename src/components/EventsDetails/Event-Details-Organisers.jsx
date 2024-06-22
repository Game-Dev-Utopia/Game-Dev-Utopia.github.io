import Image from "next/image";
import GDULogo from "../../../public/GduLogo.png";

const organisersDefault = [
    {
        name: "GameDevUtopia PICT",
        email: "gamedevutopia@gmail.com"
    },
]

const OrgCard = ({ org }) => {
    return <div className=" w-full grid grid-cols-5 sm:grid-cols-12 rounded-lg sm:rounded-xl mb-[1%] mx-[5%] sm:mt-[5%] ">
        <div className="flex items-center col-span-1 sm:col-span-2 justify-center">
            <Image
                src={org.image ? org.image : GDULogo}
                alt="IMAGE"
                className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
            />
        </div>
        <div className="flex flex-col sm:col-start-3 justify-center w-[90%]">
            <p className="text-base sm:text-3xl w-full"><b>{org.name}</b></p>
            <p className="text-xs opacity-80">{org.email}</p>
            {/* <p className="text-sm">{org.desc}</p> */}
        </div>
    </div>
}

const Organisers = ({ organisers }) => {
    console.log(organisers);
    return (
        <div className="mb-[5%]">
            <div className="justify-evenly mt-[5%] w-full">
                {
                    organisers.length ?
                        organisers.map((org, i) => <OrgCard org={org} key={i} />) :
                        organisersDefault.map((org, i) => <OrgCard org={org} key={i} />)
                }
            </div>
        </div>
    )
}

export default Organisers;
