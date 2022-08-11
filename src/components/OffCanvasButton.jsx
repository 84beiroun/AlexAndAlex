import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import PosOrderCard from './PosOrderCard'
import {forEach} from "react-bootstrap/ElementChildren";

function OffCanvasButton({ name, posOrder, ...props }) {
    const [showButton, setShowButton] = useState(false);

    const ButtonHandleClose = () => setShowButton(false);
    const ButtonHandleShow = () => setShowButton(true);

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
                     Array.from(posOrder.posOrder).map((pos, i) => <PosOrderCard pos={pos[1]} key={i}/>)
                    //   posOrder.posOrder.map((pos, key) => <PosOrderCard key={key} pos={pos}/>)
                    }
                </Offcanvas.Body>
                <div style={{background:"black", height:"200px"}}>a</div>
            </Offcanvas>
        </>
    );
}

export default OffCanvasButton;
