import React from "react";
import imgPlaceholder from "../icons/Placeholder.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquarePlus} from "@fortawesome/free-regular-svg-icons";
import Button from "react-bootstrap/Button";
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
                   <p className="PriceText">{props.pos.price + "₽"}</p>
                    <Button onClick={() => props.handler(props.pos.id, props.pos.title, props.pos.body, props.pos.price)} variant={"outline"} style={{padding: 0}}>
                        <FontAwesomeIcon icon={faSquarePlus} style={{height: "1.5em", width: "1.5em"}} />
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default PosLine;
