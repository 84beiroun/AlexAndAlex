import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffCanvasButton from './OffCanvasButton'
import React, {useState} from "react";

function NavScroll() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Navbar expand="false" className="NavBarLg" expanded={show}>
            <Container style={{padding: 0}} fluid>
                <Navbar.Toggle aria-controls={`Navbar-expand-lg`} onClick={handleShow} style={{width: "44px", height: "38px", alignContent: "center", padding: 0}}/>
                <Navbar.Offcanvas onHide={handleClose}
                    id={`Navbar-expand-lg`}
                    aria-labelledby={`NavbarLabel-expand-lg`}
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`NavbarLabel-expand-lg`}>
                            Example Bar Name
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-lg-start flex-grow-1 pe-3">
                          NAVCONTENT
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                    <Navbar.Brand style={{margin: 0}} className="justify-content-lg-center">Example Bar Name</Navbar.Brand>
                    <OffCanvasButton placement={'end'} name={'end'}/>
            </Container>
        </Navbar>
        </>
    );
}

export default NavScroll;
