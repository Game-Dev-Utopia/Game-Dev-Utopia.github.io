import Card from "./Card";

const CardHolder = () => {

    //From 4 cards onwards things will start stacking 

    const arr = [1,2,3,4,5,6]//Kinda card Array
    const width = -60; 
    let domDisplayStyle = "flex"
    let changeDisplay = (arr.length > 3);
    if(changeDisplay)
        domDisplayStyle = "relative" 

    console.log()
    return (
        <div className={`${changeDisplay ? "flex" : "block"} justify-around p-5`}>
            <div className="flex justify-around m-auto" 
                style={changeDisplay ? {paddingLeft : `${-width * (arr.length - 1)}px`} : {paddingLeft: `0px`}}>
                {
                    arr.map((data,i) =>{
                        const size_var = (i+1) * width; 
                        return(
                            <Card   size_var={size_var} 
                                    width={width} 
                                    data = {data} 
                                    domDisplayStyle={domDisplayStyle} 
                                    key={i}/>
                        );
                    }
                    )
                }
            </div>
        </div>
    )
}

export default CardHolder
