import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from "../images/century21-label.png";
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar className="navbar-1">
        <Nav>
          <Nav.Link href="#">C21 GLOBAL</Nav.Link>
          <Nav.Link href="#">LOG IN</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#">FRANCHISE</Nav.Link>
          <Nav.Link href="#">COMPANY</Nav.Link>
        </Nav>
      </Navbar>
      <Navbar bg="dark" data-bs-theme="dark" className="navbar-2">
          <Nav className="nav-mid">
            <Nav.Link href="#"><img src={icon} alt="loading..." className="icon-img" /></Nav.Link>
            <Nav.Link href="#" className="navlink">FIND A HOME</Nav.Link>
            <Nav.Link href="#" className="navlink">SELL A HOME</Nav.Link>
            <Nav.Link href="#" className="navlink">JOIN C21</Nav.Link>
            <Nav.Link href="#" className="navlink">BLOG</Nav.Link>
            <Nav.Link href="/contact-us" className="navlink">CONTACT</Nav.Link>
          </Nav>
      </Navbar>
    </>
  );
}

export default Header;