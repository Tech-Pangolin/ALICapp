import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useRef } from "react";
import alicLogo from '/img/atl-logo.png';
import AboutMenu from './AboutMenu';
import LiveBalancedMenu from './LiveBalancedMenu';
import CommunityMenu from './CommunityMenu';
import NewsMenu from './NewsMenu';

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

              {/* Desktop Mega Menu Navigation - Hidden on mobile/tablet */}
              <div className="d-none d-lg-block">
                {/* About */}
                <div 
                  className="nav-item dropdown d-inline-block"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a className="nav-link dropdown-toggle" href="#" role="button">
                    About
                  </a>
                </div>

                {/* LiveBalanced */}
                <div 
                  className="nav-item dropdown d-inline-block"
                  onMouseEnter={() => handleMouseEnter('livebalanced')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a className="nav-link dropdown-toggle" href="#" role="button">
                    LiveBalanced
                  </a>
                </div>

                {/* Community Engagement */}
                <div 
                  className="nav-item dropdown d-inline-block"
                  onMouseEnter={() => handleMouseEnter('community')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a className="nav-link dropdown-toggle" href="#" role="button">
                    Community Engagement
                  </a>
                </div>

                {/* News & Media */}
                <div 
                  className="nav-item dropdown d-inline-block"
                  onMouseEnter={() => handleMouseEnter('news')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a className="nav-link dropdown-toggle" href="#" role="button">
                    News & Media
                  </a>
                </div>
              </div>

              {/* Mobile/Tablet Simple Dropdown Navigation - Hidden on desktop */}
              <div className="d-lg-none">
                <AboutMenu variant="mobile" />
                <LiveBalancedMenu variant="mobile" />
                <CommunityMenu variant="mobile" />
                <NewsMenu variant="mobile" />
              </div>

              {/* Contact */}
              <Nav.Link href="index.html#contact" style={{ color: "#CC8F11" }}>
                Contact
              </Nav.Link>
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
            {activeMegaMenu === 'livebalanced' && <LiveBalancedMenu variant="desktop" />}
            {activeMegaMenu === 'community' && <CommunityMenu variant="desktop" />}
            {activeMegaMenu === 'news' && <NewsMenu variant="desktop" />}
          </Container>
        </div>
      )}
    </>
  );
}

export default NavbarComponent;