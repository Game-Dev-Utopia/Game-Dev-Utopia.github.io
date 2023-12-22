import Card from "./Card";

const StaticDropDown = ({ data, index }) => {
    return (
        <div className={`block rounded-full bg-black p-10 text-5xl`}>
            <b>{data.title}</b>
        </div>
    );
}


const CardHolder = ({ datas, selectedNum = 0 }) => {
    const data = datas[selectedNum];
    return (
        <div>
            <div className={`w-fit h-fit m-auto`}>
                <StaticDropDown data={data} index={selectedNum}/>
            </div>
            <div className="min-h-screen relative">
                <div className={`flex justify-center absolute top-1/2 -translate-y-1/2`}>
                    { data.data.map((val) => <Card data={val}/>) }
                </div>
            </div>
        </div>
    );
}

export default CardHolder;
