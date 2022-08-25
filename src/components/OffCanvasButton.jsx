import React, {useReducer, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import PosOrderCard from './PosOrderCard'
import * as creds from '../credentials/credentials'
import OrderInfo from "./OrderInfo";

function OffCanvasButton({ ...props }) {
    const [showButton, setShowButton] = useState(false);

    const ButtonHandleClose = () => setShowButton(false);
    const ButtonHandleShow = () => setShowButton(true);

    // eslint-disable-next-line
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    let sum = 0

    let truePosOrder = []

    // eslint-disable-next-line
    for (const [key, value] of props.posOrder){
        truePosOrder.push(value)
    }

    let posReload = () => {
        truePosOrder.length = 0
        // eslint-disable-next-line
        for (const [key, value] of props.posOrder){
            truePosOrder.push(value)
        }
        forceUpdate();
    }


    let deletePos = (id) => {
        for (const [key, value] of props.posOrder){
            if (key === id) {
                props.posOrder.get(key).count--
                if (value.count === 0)
                    props.posOrder.delete(key)
            }
        }
        console.log(props.posOrder)
        posReload()

    }

    let tgMessage = (message) => {
        message+= "Order:%0a"
        truePosOrder.map((pos, i) => message += pos.title + "%20" + pos.price + "₽%20X%20" + pos.count + "%0a")
        message+=sum+"₽"
        fetch(creds.default.BotURL + message)
    }

    return (
        <>
            <Button onClick={ButtonHandleShow} variant={"outline"}>
                <FontAwesomeIcon icon={faBasketShopping} style={{height: "1.5em", width: "1.5em"}} />
            </Button>
            <Offcanvas show={showButton} onHide={ButtonHandleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{paddingTop:0, paddingBottom: 0}}>
                    {
                        truePosOrder.map((pos, i) =>{
                            sum+=pos.price*pos.count;
                            return(
                            <PosOrderCard pos={pos} handler={deletePos} imgs={props.imgs} key={i}/>
                            );
                        })
                    }
                </Offcanvas.Body>
                    <div className="LeftRightFlex" style={{padding: "10px", marginBottom: 0, background: "lightblue"}}>
                        <p style={{margin: 0}}>К оплате:</p>
                        <p style={{margin: 0}}>{sum + "₽"}</p>
                    </div>
                <div className="UnderOrderArea">
                   <OrderInfo tgMessage={tgMessage}/>
                </div>
            </Offcanvas>
        </>
    );
}

export default OffCanvasButton;
