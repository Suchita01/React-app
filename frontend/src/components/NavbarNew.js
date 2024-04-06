import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary p-3">
      <Container>
        <Navbar.Brand href="#home">E-BOOK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">All PDFs</Nav.Link>
            <Nav.Link href="#">Best Sellers</Nav.Link>
            <Nav.Link href="#">New Arrivals</Nav.Link>
            
            
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
          <Nav.Link href="#">Request a Book</Nav.Link>
            <Nav.Link eventKey={2} href="#">
              Featured Authors
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;