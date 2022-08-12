import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import PosOrderCard from './PosOrderCard'
import * as creds from '../credentials/credentials'

let buttonPushCounter = 0

function OffCanvasButton({ name, posOrder, ...props }) {
    const [showButton, setShowButton] = useState(false);

    const ButtonHandleClose = () => setShowButton(false);
    const ButtonHandleShow = () => setShowButton(true);

    let truePosOrder = []
    for (const [key, value] of posOrder.posOrder){
        truePosOrder.push(value)
    }

    // const posOrderJson = JSON.stringify(truePosOrder);
    //
    // const request = {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: posOrderJson
    // };

    function tgMessage() {
     // fetch(creds.default.PyServerUrl, request)
        buttonPushCounter++
        let message = "Order number: " + buttonPushCounter + "%0a"
        truePosOrder.map((pos, i) => message += pos.title + "%20" + pos.price + "₽%20X%20" + pos.count + "%0a")
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
                        truePosOrder.map((pos, i) => <PosOrderCard pos={pos} key={i}/>)
                    //   posOrder.posOrder.map((pos, key) => <PosOrderCard key={key} pos={pos}/>)
                    }
                </Offcanvas.Body>
                <div style={{background:"lightgray", height:"200px", width:"100%"}}>
                    <Button onClick={()=>tgMessage()} variant={"outline-primary"}>
                        something
                    </Button>
                </div>
            </Offcanvas>
        </>
    );
}

export default OffCanvasButton;
