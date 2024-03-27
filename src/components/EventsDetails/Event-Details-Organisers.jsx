const Organisers = ({ organisers }) => {
    const isOrganization = ('email' in organisers[0]);
    const organization = organisers[0];

    return (
        <div>
            <p className="text-3xl"><b>Organisers</b></p>
            (isOrganization) ? (
            <div className="flex flex-row">
                <img
                    src={organization.image}
                    alt="IMAGE"
                    className="w-[10%]"
                />
                <div className="flex">
                    <p>{organization.name}</p>
                    <p>{organization.email}</p>
                </div>
            </div>
            ) : (
            <div>

            </div>
            )
        </div>
    )
}

export default Organisers;