import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from "react";

function NavScroll() {
    return (
        <Navbar expand="lg" className="NavBarLg">
            <Container style={{padding: 0}} fluid>
                <Navbar.Toggle aria-controls={`Navbar-expand-lg`} />
                <Navbar.Offcanvas
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
            </Container>
        </Navbar>
    );
}

export default NavScroll;
