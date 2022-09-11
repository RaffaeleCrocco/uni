import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" style={{background: "#000000"}} variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ESSE4 &nbsp; Ingegneria informatica</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Corsi</Nav.Link>
                            <Nav.Link href="#info">Info e FAQ</Nav.Link>                  
                            <Nav.Link href="#share">Contribuisci</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default Navigation;