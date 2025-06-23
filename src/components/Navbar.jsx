import { use, useState } from "react";
import { Navbar, Container } from "react-bootstrap";

export const Navbar = () => {}
const [activeLink, setActiveLink] = useState('home');
const [scolled, seScrolled] = useState(false);

useState(() => {
    const onScroll = () =>{
        if (window.scrollY > 50){
            seScrolled(true);
        }else{
            seScrolled(false);
    }
}}
window.addEventListener("scroll", onscroll);

return () => window.removeEventListener("scroll", onScroll);
},[])


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src="" alt="main logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Skill">Skill</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src="" alt="" /></a>
                <a href="#"><img src="" alt="" /></a>
                <a href="#"><img src="" alt="" /></a>
            </div>
            <button className="vvd" onClick={ => console.log('connect')}><span>Let`s Connect` </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;