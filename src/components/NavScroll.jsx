import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffCanvasButton from './OffCanvasButton'
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function NavScroll(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Navbar expand="false" className="NavBarLg" style={{background: "lightgray"}} sticky="top">
            <Container style={{paddingLeft: "20px", paddingRight:"20px"}} fluid>
                <Button onClick={handleShow} variant={"outline"}>
                    <FontAwesomeIcon icon={faBars} style={{height: "1.5em", width: "1.5em"}} />
                </Button>
                <Offcanvas show={show} onHide={handleClose} placement={'start'}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
                    <Navbar.Brand style={{margin: 0}} className="justify-content-lg-center">Example Bar Name</Navbar.Brand>
                    <OffCanvasButton placement={'end'} name={'end'} posOrder={props.posOrder} imgs={props.imgs}/>
            </Container>
        </Navbar>
        </>
    );
}

export default NavScroll;
