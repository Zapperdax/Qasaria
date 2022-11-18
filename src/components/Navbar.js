import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
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
            <Nav.Link href="#home" className="link">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="link">
              Chat
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
