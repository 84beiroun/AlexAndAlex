import React from "react";
import imgPlaceholder from "../icons/Placeholder.png"
const PosOrderCard = (pos) => {
    return (
        <div className="IndivPos">
            <img src={imgPlaceholder} className="PosImg" alt="position"/>
            <div className="IndivPosData">
                <div className="IndivPosDataTop">
                    <h3> {pos.pos.title} </h3>
                    <p className="BodyText">{pos.pos.body}</p>
                </div>
                <div className="IndivPosDataBot">
                    <p className="PriceText">{pos.pos.price + "₽ X " + pos.pos.count}</p>
                    <p>{"price: " + pos.pos.price * pos.pos.count + "₽"}</p>
                </div>
            </div>
        </div>
    );
};
export default PosOrderCard;
