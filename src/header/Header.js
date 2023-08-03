import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from "../images/century21-label.png";

const Header = () => {
  return (
    <>
      <Navbar style={{ display: 'flex', flexDirection: 'row', paddingLeft: '120px', paddingRight: '120px', justifyContent: 'space-between', width: '100%', backgroundColor: "#C6B68B" }}>
        <Nav>
          <Nav.Link href="#">C21 GLOBAL</Nav.Link>
          <Nav.Link href="#">LOG IN</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#">FRANCHISE</Nav.Link>
          <Nav.Link href="#">COMPANY</Nav.Link>
        </Nav>
      </Navbar>
      <Navbar bg="dark" data-bs-theme="dark" style={{ display: 'flex', flexDirection: 'row', paddingLeft: '120px', width: '100%', height: '100px', backgroundColor: "#C6B68B" }}>
          <Nav style={{ display: 'flex', alignItems: 'center'}}>
            <Nav.Link href="#"><img src={icon} alt="loading..." style={{ marginRight: '104.63px'}} /></Nav.Link>
            <Nav.Link href="#" style={{ color: "#ffffff", fontWeight: 500, fontSize: '15px', lineHeight: '14px' }}>FIND A HOME</Nav.Link>
            <Nav.Link href="#" style={{ color: "#ffffff", fontWeight: 500, fontSize: '15px', lineHeight: '14px' }}>SELL A HOME</Nav.Link>
            <Nav.Link href="#" style={{ color: "#ffffff", fontWeight: 500, fontSize: '15px', lineHeight: '14px' }}>JOIN C21</Nav.Link>
            <Nav.Link href="#" style={{ color: "#ffffff", fontWeight: 500, fontSize: '15px', lineHeight: '14px' }}>BLOG</Nav.Link>
            <Nav.Link href="/contact-us" style={{ color: "#ffffff", fontWeight: 500, fontSize: '15px', lineHeight: '14px' }}>CONTACT</Nav.Link>
          </Nav>
      </Navbar>
    </>
  );
}

export default Header;