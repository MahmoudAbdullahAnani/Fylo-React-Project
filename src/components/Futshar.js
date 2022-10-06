import React from "react";
function Futshar(props) {
    return(
        <div className={props.defoultClass}>
            <img src={props.image} alt="..."/>
            <h1 className="whitespace-nowrap py-2">{props.header}</h1>
            <p className="text-lg-center text-left ">{props.text}</p>
        </div>
    )
}
export default Futshar;