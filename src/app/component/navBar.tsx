'use client';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Brand as={Link} href='/'>
                        北歐神話
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto mb-2 mb-lg-0'>
                            <Nav.Link as={Link} href='/heros'>
                                英雄
                            </Nav.Link>
                            <Nav.Link as={Link} href='/areas'>
                                區域
                            </Nav.Link>
                            <NavDropdown title='其他' id='basic-nav-dropdown' menuVariant='dark'>
                                <NavDropdown.Item as={Link} href='/rune'>
                                    盧恩符文
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
