"use client"
import Link from 'next/link'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function NavbarSite() {
    return (
        <>
            <Navbar expand="md" bg="dark" variant="dark" className="mb-5" sticky='top'>
                <Container>
                    {/* Titre de la navbar */}
                    <Navbar.Brand href="#">
                        <img src="/images/me.jpg" id="photo" alt="photo" className='img-fluid' />
                        <span className='ms-1 fw-bold'>Eric-dev</span>
                    </Navbar.Brand>

                    {/* Bouton pour ouvrir le Offcanvas sur petits écrans */}
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />

                    {/* Contenu du Offcanvas */}
                    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Accueil</Nav.Link>
                                <Nav.Link href="#about">A propos</Nav.Link>
                                <Nav.Link href="#competences">Compétences</Nav.Link>
                                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                                <Nav.Link href="#cv">Cv</Nav.Link>
                                <Nav.Link href="#blog">Blog</Nav.Link>
                                <Nav.Link href="#contact">Contacts</Nav.Link>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarSite
