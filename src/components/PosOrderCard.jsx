import React from "react";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRectangleXmark} from "@fortawesome/free-regular-svg-icons";

const PosOrderCard = (props) => {
    let image
    if (props.imgs[props.pos.id + '.png'] != null)
        image = props.imgs[props.pos.id + '.png']
    else
        image = props.imgs['placeholder.png']


    return (
        <div className="IndivPosOrder">
            <img src={image} className="PosImg" alt="position"/>
            <div className="TopBotFlex">
                <div className="IndivPosDataTop">
                    <div className="LeftRightFlex" style={{marginBottom: "8px"}}>
                        <h3 style={{marginBottom: 0}}> {props.pos.title} </h3>
                        <Button id="deleteButton" className="IconButton" onClick={() => props.handler(props.pos.id)} variant={"outline"}
                                style={{padding: 0, border: 0}}>
                            <FontAwesomeIcon icon={faRectangleXmark} style={{height: "1.2em", width: "1.2em"}}/>
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
