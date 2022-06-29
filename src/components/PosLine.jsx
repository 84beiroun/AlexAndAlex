import React from "react";
import imgPlaceholder from "F:/Programs/Projects/js/alex_v1/src/icons/Placeholder.png"
import "F:/Programs/Projects/js/alex_v1/src/styles/App.css"
const PosLine = (props) => {
    return (
        <div className="IndivPos">
            <img src={imgPlaceholder} className="PosImg" alt="position"/>
            <div className="IndivPosData">
                <div className="IndivPosDataTop">
                    <h3> {props.pos.title} </h3>
                    <p>{props.pos.body}</p>
                </div>
                <div className="IndivPosDataBot">
                    {props.pos.price}
                </div>
            </div>
        </div>
    );
};
export default PosLine;
