import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

function OffCanvasButton({ name, ...props }) {
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
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasButton;
