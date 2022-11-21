import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquarePlus} from "@fortawesome/free-regular-svg-icons";
import Button from "react-bootstrap/Button";

const PosLine = (props) => {
    let image
    if (props.imgs[props.pos.id + '.png'] != null)
        image = props.imgs[props.pos.id + '.png']
    else
        image = props.imgs['placeholder.png']
    return (
        <div className="IndivPos">
            <img src={image} className="PosImg" alt="position"/>
            <div className="TopBotFlex">
                <div className="IndivPosDataTop">
                    <h3> {props.pos.title} </h3>
                    <p className="BodyText">{props.pos.body}</p>
                </div>
                <div className="LeftRightFlex">
                    <p className="PriceText">{props.pos.price + "₽"}</p>
                    <Button className="IconButton"
                        onClick={() => props.handler(props.pos.id, props.pos.title, props.pos.body, props.pos.price)}
                        variant={"outline"} style={{padding: 0, border: 0}}>
                        <FontAwesomeIcon icon={faSquarePlus} style={{height: "1.5em", width: "1.5em"}}/>
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default PosLine;
