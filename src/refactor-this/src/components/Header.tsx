import { useState } from "react";

// import Collapse from "./Collapse";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>Photo Sharing App</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Link className='nav-link active' to='/fashion'>
            Fashion
          </Link>
          <Link className='nav-link' to='/architecture'>
            Architecture
          </Link>
          <Link className='nav-link' to='/nature'>
            Nature
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Example;
