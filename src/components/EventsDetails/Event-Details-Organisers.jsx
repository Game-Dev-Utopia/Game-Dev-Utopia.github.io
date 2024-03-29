const OrgCard = ({ org }) => {
    return <div className="relative text-center w-[30vw] py-[5%] bg-gray-900 last:rounded-br-3xl first:rounded-tl-3xl border-Event-outline border-2 hover:scale-110 transition-all">
        <img
            src={org.image}
            alt="IMAGE"
            className="w-[30%] absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-[50%] border-Event-outline border-2"
        />
        <p className="text-3xl">{org.name}</p>
        <p className="text-xl">{org.email}</p>
        <p className="mt-10 mx-4">{org.desc}</p>
    </div>
}

const Organisers = ({ organisers }) => {

    return (
        <div className="mx-7">
            <div className="flex">
                <p className="text-3xl text-Event-heading"><b>Organisers</b></p>
                {/* <div className="bg-Event-heading w-[90%] h-[1px] mt-[50%] mr-0 ml-auto"></div> */}
            </div>
            <div className="flex justify-evenly my-20">
            {
                organisers.map((org, i) => <OrgCard org={org}/>)
            }
            </div>
        </div>
    )
}

export default Organisers;