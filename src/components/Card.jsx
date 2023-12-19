'use client'
import { useEffect, useState } from "react"
import Image from "next/image";
const Card = ({size_var,data,width,domDisplayStyle}) => {
    const [click,setClick] = useState(false);
    const [hover,setHover] = useState(false);

    useEffect(()=>{
        if(!hover)
            setClick(false);
    },[hover])

    return (
        <div
            onClick={()=>setClick(true)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`${domDisplayStyle} text-center bg-green-200 w-32 h-32 ${click ? "z-10" : "z-0"} 
                 shadow-xl hover:w-44 hover:h-44 hover:shadow-2xl transition-all duration-300 m-auto`}
             style={click ? {left : `${size_var + width/2}px`}:{left:`${size_var}px`}}
        >
            Card {data}
            <Image width={hover?"150":"120"} height={"0"} className="m-auto duration-300" src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICAgICAgICAgICAoICAgICBAICQgKIBEgICAREyAYMEAvGDEvLx8fL0AwMT5CQD9CHzBLUEFCT0BBPUIBCgoKDQ0NDg0NDisZFRkrKysrKysrKysrKysrLSsrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAIUAyAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAAIDBAb/xAAmEAEBAQABAwMEAwEBAAAAAAAAAREhAjFBElFhcYGR8KHB0fGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7LODBjUiCxYeQAxNWcDOwCNYZCDOGRrNGAzYrG8H+gzisarIM58LI0JQZsWNZtHYGR9Ws4Zs5FUgs54b6ewwGRa1WLAVnfsGumd0DtnloQwRKQwgsWEAsM6dU/hqQFJFYUDFisbwYDOCxvFgOdgs+rpjN7gxgdKM9wc5FnduzgAx2ibzhmzAZz4GOkZvgVnwlUDpK0ocEUMUiwCkpAanC2gyAYcUhALCgArTNAM2NRCs4rNaFkBnGa3Wb3EAxqjuDI6vY1jqtAW/tTOb57oV6YlDBCkoC9msZjUgLuZFDATQQGoUwBYK0zRWc+UQC1X4QBmg9VZAhSi0QXv3c+q+G7XPr76Kdz7pnZ/GoHpkLMaghhGrQMxpmNAUFQJ35ZIKmDCCoX4IrNQnfVgCif8NrGgb++Wer+UKA3gS6tUAWs9V5+zTF7gz5B9vqgeosxqCFcBUDK25xuAZSCCURAaeGaZQIvPnBern+12wVaN4Vz98s9V/4CtY7q1Tz7gtH73V92dn+Apgt4V7MdQG/A6r4Ylu2nrufgFvz2A8ages6zpghlLJAxtgy4B1qVjToHTazqtA8LfwzqvyKNnzwr1WQL97AvV+RrHVfM+5l4BWmTgf0N7gr9wPUrfryDPVrG7xs+Guquc8g1+F1XVudOs9VyAxbbvPZM+L+4Ae71RqVy1vpojXqMrGzToNSmVjcMBsaz6laDcv4NrlOo+oGtVrn69uefY6DfqHq/dYvVjPquXfwK3eb/nZOfqO0DbwfDO2/0tyX4AWC/uL1ax1dQHdmZz7MduP2DqvacTRtB0t9/sxbs5/B9c86PV8Axbkvf2DXVeP/ABA9Cl5k+6QjU74dSFWZe94W8pCC3n7rUgFve/A2pAZ5/Jt7JAx6tVtwIVfLXSkCtv4qvb3CBj/NZ6vf3SBlTwEC3N+qtzAgF6ikD//Z"}
                alt="BG Image"/>
            <Image width={hover?"45":"30"} height={"30"} className="ml-3 rounded-full p-2 duration-300" src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICAgICAgICAgICAoICAgICBAICQgKIBEgICAREyAYMEAvGDEvLx8fL0AwMT5CQD9CHzBLUEFCT0BBPUIBCgoKDQ0NDg0NDisZFRkrKysrKysrKysrKysrLSsrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAIUAyAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAAIDBAb/xAAmEAEBAQABAwMEAwEBAAAAAAAAAREhAjFBElFhcYGR8KHB0fGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7LODBjUiCxYeQAxNWcDOwCNYZCDOGRrNGAzYrG8H+gzisarIM58LI0JQZsWNZtHYGR9Ws4Zs5FUgs54b6ewwGRa1WLAVnfsGumd0DtnloQwRKQwgsWEAsM6dU/hqQFJFYUDFisbwYDOCxvFgOdgs+rpjN7gxgdKM9wc5FnduzgAx2ibzhmzAZz4GOkZvgVnwlUDpK0ocEUMUiwCkpAanC2gyAYcUhALCgArTNAM2NRCs4rNaFkBnGa3Wb3EAxqjuDI6vY1jqtAW/tTOb57oV6YlDBCkoC9msZjUgLuZFDATQQGoUwBYK0zRWc+UQC1X4QBmg9VZAhSi0QXv3c+q+G7XPr76Kdz7pnZ/GoHpkLMaghhGrQMxpmNAUFQJ35ZIKmDCCoX4IrNQnfVgCif8NrGgb++Wer+UKA3gS6tUAWs9V5+zTF7gz5B9vqgeosxqCFcBUDK25xuAZSCCURAaeGaZQIvPnBern+12wVaN4Vz98s9V/4CtY7q1Tz7gtH73V92dn+Apgt4V7MdQG/A6r4Ylu2nrufgFvz2A8ages6zpghlLJAxtgy4B1qVjToHTazqtA8LfwzqvyKNnzwr1WQL97AvV+RrHVfM+5l4BWmTgf0N7gr9wPUrfryDPVrG7xs+Guquc8g1+F1XVudOs9VyAxbbvPZM+L+4Ae71RqVy1vpojXqMrGzToNSmVjcMBsaz6laDcv4NrlOo+oGtVrn69uefY6DfqHq/dYvVjPquXfwK3eb/nZOfqO0DbwfDO2/0tyX4AWC/uL1ax1dQHdmZz7MduP2DqvacTRtB0t9/sxbs5/B9c86PV8Axbkvf2DXVeP/ABA9Cl5k+6QjU74dSFWZe94W8pCC3n7rUgFve/A2pAZ5/Jt7JAx6tVtwIVfLXSkCtv4qvb3CBj/NZ6vf3SBlTwEC3N+qtzAgF6ikD//Z"}
                alt="BG Image"/>
        </div> 
    )   
}

export default Card
