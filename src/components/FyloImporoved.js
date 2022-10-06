import React from "react";

function FyloImproved(props) {
    return(
        <div className=" py-4 px-3 rounded stish text-white col-md-3 bg-gray-800 col-12">
            <h4 className="text-sm pb-3">{props.title}</h4>
            <div className="cart d-flex gap-2 justify-content-start align-items-center">
                <img src={props.image} alt={props.alt}/>
                <div className="cart-text d-inline">
                    <h6 className="text-sm mb-0">{props.name}</h6>
                    <p className="text-xs text-white-50 mb-0">{props.descrpshan}</p>
                </div>
            </div>
        </div>
    )
}
export default FyloImproved;