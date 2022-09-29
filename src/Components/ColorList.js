import React from "react";
import Color from "./Color";

const ColorList = ({colors = []}) => {
    if(!colors.length){return <h2>Not colors in the list</h2>}
    return (
        <>
            {colors.map(color => {
                return <Color key={color.id} {...color} />
            })}
        </>
    )
}

export default ColorList;