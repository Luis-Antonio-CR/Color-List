import React from "react";
import StarRating from "./StarRating";

const Color = ({title, color, rating}) => {
    return (
        <div style={{backgroundColor : color, padding: "15px"}}>
            <h2>{title}</h2>
            <StarRating selectedStars={rating} />
        </div>
    )
}

export default Color;