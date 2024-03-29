import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { useState } from "react";

const Rating = ({ rating }) => {
    const low= Math.floor(rating);
    const high = Math.ceil(rating);

    const stars = [1, 2, 3, 4, 5];

    const [hovered, setHovered] = useState(false);

    // Could have been done better
    return (
        <div className="flex float-right transition-all" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <p className={`${hovered ? 'opacity-100' : 'opacity-0 -translate-x-[100%]'} transition-all`}>{rating}</p>
            {
                stars.map((val, i) => {
                    if (i + 1 <= low)
                        return <FaStar key={i}/>
                    if (low != high)
                        if (i + 1 == high)
                            return <FaStarHalfStroke key={i}/>
                        else
                            return <FaRegStar key={i}/>
                    else
                        return <FaRegStar key={i}/>
                })
            }
        </div>
    );
}

const Title = ({ name, rating }) => {
    return (
        <div className="text-3xl mx-7">
            <iframe
                src="https://www.youtube.com/embed/wNe9RP2yP2Y?si=a8FakfPTkFuBlZMa"
                frameborder="0"
                width="1920"
                height="1080"
                className="w-full"
                allowfullscreen
            />
            <div className="text-Event-heading p-4">
                <b>{name}</b>
                <Rating rating={rating} />
            </div>
        </div>
    )
}

export default Title;