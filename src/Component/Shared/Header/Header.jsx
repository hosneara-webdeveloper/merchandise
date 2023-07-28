/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Navbar expand="lg" className="HNavB bg-secondary">
      <Container>
        <Navbar.Brand to="/home"><div className='logo'><img src="/src/assets/merchandise.png" alt="" /></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link className='text-black fw-bold text-decoration-none' to={"/"}>Home</Link></Nav.Link>
            <Nav.Link ><Link className='text-black fw-bold text-decoration-none' to={"/about"}>About</Link></Nav.Link>
            <Nav.Link ><Link className='text-black fw-bold text-decoration-none' to={"/user"}>User</Link></Nav.Link>
            <NavDropdown className='fw-bold' title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">
                About
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user">User</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contact">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;