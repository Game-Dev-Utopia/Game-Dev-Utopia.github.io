import Image from "next/image";

const OrgCard = ({ org }) => {
    return <div className="flex flex-col text-center rounded-lg sm:rounded-xl mb-[1%] mx-[5%] sm:mt-[5%] ">
        <div className="flex-1 flex items-center justify-center p-[1%] py-[2%]">
            <Image
            fill={true}
                src={org.image}
                alt="IMAGE"
                className="w-[50%] sm:w-[20%] rounded-[50%]"
            />
        </div>
        <div className="sm:flex-[1] flex flex-col justify-center">
            <p className="text-xl sm:text-3xl"><b>{org.name}</b></p>
            <p className="text-sm opacity-80">{org.email}</p>
            {/* <p className="text-sm">{org.desc}</p> */}
        </div>
    </div>
}

const Organisers = ({ organisers }) => {
    console.log(organisers);
    return (
        <div className="mb-[5%]">
            <div className="flex justify-center">
                {/* <p className="text-3xl sm:text-[3rem] text-Event-heading"><b>ORGANIZERS</b></p> */}
                {/* <div className="bg-Event-heading w-[90%] h-[1px] mt-[50%] mr-0 ml-auto"></div> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 justify-evenly mt-[5%]">
            {
                organisers.map((org, i) =><OrgCard org={org} key={i}/>)
            }
            </div>
        </div>
    )
}

export default Organisers;
