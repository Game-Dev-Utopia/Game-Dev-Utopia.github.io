import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { useState } from "react";

const Rating = ({ rating }) => {
    const low = Math.floor(rating);
    const high = Math.ceil(rating);

    const stars = [1, 2, 3, 4, 5];

    const [hovered, setHovered] = useState(false);

    // Could have been done better
    return (
        <div className="flex float-right transition-all items-center text-cyan-500" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <p className={`${hovered ? 'opacity-100 mx-3' : 'opacity-0 -translate-x-[100%]'} transition-all justify-center`}>{rating}</p>
            {
                stars.map((val, i) => {
                    if (i + 1 <= low)
                        return <FaStar key={i} />
                    if (low != high)
                        if (i + 1 == high)
                            return <FaStarHalfStroke key={i} />
                        else
                            return <FaRegStar key={i} />
                    else
                        return <FaRegStar key={i} />
                })
            }
        </div>
    );
}

const Title = ({ name, rating, imgURL, vidURL }) => {
    return (
        <>
            {imgURL ? 
                <div>
                    <img src={imgURL} alt={name} />
                </div> :
                <div className="text-3xl relative pt-[56.25%] w-full overflow-hidden">
                    <iframe
                        src={vidURL}
                        frameborder="0"
                        width="1920"
                        height="1080"
                        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
                        allowfullscreen
                    />
                </div>
            }
            <div className="text-white text-2xl p-4">
                <b>{name}</b>
                <Rating rating={rating} />
            </div>
        </>
    )
}

export default Title;
