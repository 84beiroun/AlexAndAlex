import React from "react";
import imgPlaceholder from "../icons/Placeholder.png"
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRectangleXmark} from "@fortawesome/free-regular-svg-icons";
const PosOrderCard = (props) => {
    return (
        <div className="IndivPosOrder">
            <img src={imgPlaceholder} className="PosImg" alt="position"/>
            <div className="TopBotFlex">
                <div className="IndivPosDataTop">
                    <div className="LeftRightFlex">
                        <h3> {props.pos.title} </h3>
                        <Button onClick={()=> props.handler(props.pos.id)} variant={"outline"} style={{padding: 0}}>
                            <FontAwesomeIcon icon={faRectangleXmark} style={{height: "1.2em", width: "1.2em"}}  />
                        </Button>
                    </div>
                    <p className="BodyText">{props.pos.body}</p>
                </div>
                <div className="LeftRightFlex">
                    <p className="PriceText">{props.pos.price + "₽ X " + props.pos.count}</p>
                    <p className="PriceText">{"price: " + props.pos.price * props.pos.count + "₽"}</p>
                </div>
            </div>
        </div>
    );
};
export default PosOrderCard;
