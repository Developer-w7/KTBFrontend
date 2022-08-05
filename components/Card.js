import { useState, useEffect, useRef, React } from "react"

const Card = ({children}) =>{

    console.log(children)
return (
    <div>
        {children}
    </div>
)
}


const Header=({children, style, ...other})=>(
    <div style={{...style}}>
        {children}
    </div>

);
Header.displayName="Header";
Card.Header=Header;


export default Card;