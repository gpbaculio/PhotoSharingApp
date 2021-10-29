import { useLocation } from "react-router";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

const HeaderLink = ({ label, to }: { label: string; to: string }) => {
  const location = useLocation();
  return (
    <Link
      className={classNames("nav-link", { active: location.pathname === to })}
      to={to}>
      {label}
    </Link>
  );
};

const Header = () => (
  <Navbar bg='light' expand='lg'>
    <Container>
      <Navbar.Brand href='#home'>Photo Sharing App</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <HeaderLink label='Fashion' to='/fashion' />
          <HeaderLink label='Architecture' to='/architecture' />
          <HeaderLink label='Nature' to='/nature' />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
