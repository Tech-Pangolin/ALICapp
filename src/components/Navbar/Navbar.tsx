import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import alicLogo from '/img/atlifelogo.png';
import years from '/img/navbar/120years.png';
import AboutMenu from './AboutMenu';
import SolutionsMenu from './SolutionsMenu';
import ResourcesMenu from './ResourcesMenu';
import ContactMenu from './ContactMenu';
import './Navbar.css'

function NavbarComponent() {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (menuType: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMegaMenu(menuType);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150); // 150ms delay before closing
  };

  const handleMegaMenuEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMegaMenuLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150); // 150ms delay before closing
  };

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            
            <img
              src={alicLogo}
              alt="Atlanta Life Logo"
              height="60"
              className="me-2 my-3"
            />
            
            <img
              src={years}
              alt="Celebrating 120 years"
              height="45"
              className="me-2 my-3 d-none d-lg-block"
            />
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              
              {/* Desktop Mega Menu Navigation - Hidden on mobile/tablet */}
              <div className="d-none d-lg-block">

                {/* About */}
                <div 
                  className="nav-item dropdown d-inline-block"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a className="nav-link dropdown-toggle" href="#" role="button">
                    About Us
                  </a>
                </div>

                {/* Solutions */}
                <div 
                  className="nav-item dropdown d-inline-block"
                  onMouseEnter={() => handleMouseEnter('solutions')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a className="nav-link dropdown-toggle" href="#" role="button">
                    Solutions
                  </a>
                </div>

                {/* Resources */}
                <div 
                  className="nav-item dropdown d-inline-block"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a className="nav-link dropdown-toggle" href="#" role="button">
                    Resources
                  </a>
                </div>

                {/* Contact Us */}
                <div 
                  className="nav-item dropdown d-inline-block"
                  onMouseEnter={() => handleMouseEnter('contact')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a className="nav-link dropdown-toggle" href="#" role="button" style={{color: 'var(--primary-gold)'}}>
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Mobile/Tablet Simple Dropdown Navigation - Hidden on desktop */}
              <div className="d-lg-none">
                <AboutMenu variant="mobile" />
                <SolutionsMenu variant="mobile" />
                <ResourcesMenu variant="mobile" />
                <ContactMenu variant="mobile" />
              </div>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Desktop Mega Menu Row - Hidden on mobile/tablet */}
      {activeMegaMenu && (
        <div 
          className="mega-menu-row d-none d-lg-block"
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
        >
          <Container fluid className="container-xl">
            {activeMegaMenu === 'about' && <AboutMenu variant="desktop" />}
            {activeMegaMenu === 'solutions' && <SolutionsMenu variant="desktop" />}
            {activeMegaMenu === 'resources' && <ResourcesMenu variant="desktop" />}
            {activeMegaMenu === 'contact' && <ContactMenu variant="desktop" />}
          </Container>
        </div>
      )}
    </>
  );
}

export default NavbarComponent;