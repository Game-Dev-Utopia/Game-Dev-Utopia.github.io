import Card from "./Card";

const StaticDropDown = ({ data, index }) => {
    return (
        <div className={`block rounded-full bg-black p-5`}>
            <b>{data.title}</b>
        </div>
    );
}


const CardHolder = ({ datas, selectedNum = 0 }) => {
    const data = datas[selectedNum];
    return (
        <div>
            <div className={`w-fit h-fit m-auto text-3xl`}>
                <StaticDropDown data={data} index={selectedNum}/>
            </div>
            {/* <div className="min-h-screen relative">
                <div className={`flex justify-center absolute top-1/2 -translate-y-1/2`}>
                    { data.data.map((val,i) => <Card data={val} key={i}/>) }
                </div>
            </div> */}
            <div className="min-h-screen relative overflow-x-auto">
                <div className={`flex justify-center absolute top-1/2 -translate-y-1/2 p-[10%] sm:p-0`}>
                    { data.data.map((val,i) => <Card data={val} key={i}/>) }
                </div>
            </div>
        </div>
    );
}

export default CardHolder;
