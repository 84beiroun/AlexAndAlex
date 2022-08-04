import React from "react";
import imgPlaceholder from "../icons/Placeholder.png"
import addIcon from "../icons/add.png"
const PosLine = (props) => {

    return (
        <div className="IndivPos">
            <img src={imgPlaceholder} className="PosImg" alt="position"/>
            <div className="IndivPosData">
                <div className="IndivPosDataTop">
                    <h3> {props.pos.title} </h3>
                    <p className="BodyText">{props.pos.body}</p>
                </div>
                <div className="IndivPosDataBot">
                   <p className="PriceText">{props.pos.price}</p>
                    <img src={addIcon} className="AddIcon" alt="add"/>
                </div>
            </div>
        </div>
    );
};
export default PosLine;
