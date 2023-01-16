import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar fixed-top">
      <Container className="navContainer">
        <Navbar.Brand href="#home" className="logo">
          Mini Games Junction
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbarToggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/chatlandingpage">
              Chat
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
