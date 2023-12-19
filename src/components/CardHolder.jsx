import Card from "./Card";

const CardHolder = () => {

    //From 4 cards onwards things will start stacking 

    const arr = [1,2,3,4]//Kinda card Array
    const width = -60; 
    let domDisplayStyle = "flex"
    let changeDisplay = (arr.length > 3);
    if(changeDisplay)
        domDisplayStyle = "relative" 

    console.log()
    return (
        <div className={`${changeDisplay ? "flex" : "block"} justify-around`}>
            <div className="flex justify-around" 
                style={changeDisplay ? {paddingLeft : `${-width * (arr.length - 1)}px`} : {paddingLeft: `0px`}}>
                {
                    arr.map((data,i) =>{
                        const size_var = i * width; 
                        console.log(size_var);
                        return(
                            <Card size_var={size_var} data = {data} domDisplayStyle={domDisplayStyle} key={i}/>
                        );
                    }
                    )
                }
            </div>
        </div>
    )
}

export default CardHolder
