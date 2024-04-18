import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate }from 'react-router-dom'

function CollapsibleExample() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary p-3">
      <Container>
        <Navbar.Brand href="#home">BOOKLIB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavigate('/users')}>Users</Nav.Link>
         </Nav>
         <Nav>
            <Nav.Link onClick={() => handleNavigate('/')}>Logout</Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;