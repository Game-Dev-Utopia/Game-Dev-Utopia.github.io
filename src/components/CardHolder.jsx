import Card from "./Card";

const CardHolder = ({ datas }) => {
    const data = datas[0];
    return (
        <div className="min-h-screen relative">
            <div className={`flex justify-center absolute top-1/2 -translate-y-1/2`}>
                { data.data.map((val) => <Card data={val}/>) }
            </div>
        </div>
    );
}

export default CardHolder;
