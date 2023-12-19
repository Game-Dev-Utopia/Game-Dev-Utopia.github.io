const Card = ({size_var,data,domDisplayStyle}) => {
    return (
        <div className={`${domDisplayStyle} text-center bg-green-200 w-32 h-32 
                 shadow-xl hover:w-48 hover:h-48 hover:shadow-2xl transition-all duration-300 m-auto`}
             style={{left:`${size_var}px` }}
        >
            Card {data}
        </div> 
    )   
}

export default Card
