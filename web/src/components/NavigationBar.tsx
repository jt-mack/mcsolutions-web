import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import McCormickLogo from '../assets/logo.png'
import {Container} from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar className={'p-1'} bg="light" data-bs-theme="light" expand={'md'}>
      <Navbar.Brand href="/"> <img src={McCormickLogo} className="logo" alt="McCormick Solutions"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navigation-bar"/>
      <Navbar.Collapse id='navigation-bar'>
        <Container>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar;