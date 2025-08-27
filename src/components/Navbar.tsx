import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import alicLogo from '/img/atl-logo.png';


function NavbarComponent() {
  return (
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container fluid className="container-xl">
        {/* Logo */}
        <Navbar.Brand href="index.html" className="d-flex align-items-center">
          <img
            src={alicLogo}
            alt="Atlanta Life Logo"
            height="40"
            className="me-2"
          />
          <span>Atlanta Life</span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="index.html#hero" active>
              Home
            </Nav.Link>

            {/* About */}
            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item href="#team">Meet the Team</NavDropdown.Item>
              <NavDropdown.Item href="#about">History & Legacy</NavDropdown.Item>
              <NavDropdown.Item href="#platform">Our Platform</NavDropdown.Item>
            </NavDropdown>

            {/* LiveBalanced */}
            <NavDropdown title="LiveBalanced" id="livebalanced-dropdown">
              <NavDropdown.Item href="livebalanced.html">
                About LiveBalanced
              </NavDropdown.Item>
              <NavDropdown.Item href="healthandproductivity.html">
                Health & Productivity
              </NavDropdown.Item>
              <NavDropdown.Item href="financialwellness.html">
                Financial Wellness
              </NavDropdown.Item>
              <NavDropdown.Item href="physicalwellness.html">
                Physical Wellness
              </NavDropdown.Item>
              <NavDropdown.Item href="socialwellness.html">
                Social Wellness
              </NavDropdown.Item>
              <NavDropdown.Item href="mentalwellness.html">
                Mental Wellness
              </NavDropdown.Item>
            </NavDropdown>

            {/* Community Engagement */}
            <NavDropdown title="Community Engagement" id="community-dropdown">
              <NavDropdown.Item href="childrensbooks.html">
                Essential Reads for Every Child
              </NavDropdown.Item>
            </NavDropdown>

            {/* News & Media */}
            <NavDropdown title="News & Media" id="news-dropdown">
              <NavDropdown.Item href="publications.html">
                Publications
              </NavDropdown.Item>
              <NavDropdown.Item href="eblf.html">EBLF 2025</NavDropdown.Item>
            </NavDropdown>

            {/* Contact */}
            <Nav.Link href="index.html#contact" style={{ color: "#CC8F11" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;