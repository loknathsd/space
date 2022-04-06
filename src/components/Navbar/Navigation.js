import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'
import Vector from '../../images/Vector.png'

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='d-flex'>
                            <img className='w-50 h-50' src={Vector} alt="" />
                            <h4 className='mt-2 ms-3'>SPACE</h4>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link className='px-4 text-light' href="#features">Home</Nav.Link>
                            <Nav.Link className='px-4 text-light' href="#pricing">About us</Nav.Link>
                            <Nav.Link className='px-4 text-light' href="#pricing">Story</Nav.Link>
                            <Nav.Link className='px-4 text-light' href="#pricing">Blog</Nav.Link>
                            <Nav.Link  className='contact-us px-4 py-1 text-light' href="#pricing">Contact Us</Nav.Link>

                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;