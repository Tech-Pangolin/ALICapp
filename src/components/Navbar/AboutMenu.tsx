import { NavDropdown } from "react-bootstrap";
import type { MenuProps } from "../../types";

const AboutMenu = ({ variant = 'desktop' }: MenuProps) => {
  if (variant === 'mobile') {
    return (
      <NavDropdown title="About" id="mobile-about-dropdown">
        <NavDropdown.Item href="#equitrust">EquiTrust Life Insurance Company</NavDropdown.Item>
        <NavDropdown.Item href="#mbe">Minority Business Enterprise</NavDropdown.Item>
        <NavDropdown.Item href="#partnerships">Partnerships</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#history">History</NavDropdown.Item>
        <NavDropdown.Item href="#community">Our Community</NavDropdown.Item>
        <NavDropdown.Item href="#mission">Mission & Vision</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#leadership">Executive Leadership</NavDropdown.Item>
        <NavDropdown.Item href="#business-dev">Business Development</NavDropdown.Item>
        <NavDropdown.Item href="#actuarial">Actuarial & Risk Management</NavDropdown.Item>
        <NavDropdown.Item href="#community-affairs">Community Affairs</NavDropdown.Item>
        <NavDropdown.Item href="#internship">Internship Program</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#newsroom">Newsroom</NavDropdown.Item>
        <NavDropdown.Item href="#awards">Awards & Recognition</NavDropdown.Item>
      </NavDropdown>
    );
  }

  const devStyles = {
    // Container styles
    menuContainer: {
      padding: '40px 0',
      borderRadius: '8px'
    },
    
    // Image section styles
    imageSection: {
      height: '400px'
    },
    
    heroImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      objectPosition: 'center 30%'
    },
    
    // Text content styles
    textContent: {
      padding: '20px 0'
    },
    
    mainHeading: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#2c3e50',
      textTransform: 'uppercase' as const,
      lineHeight: '1.1',
      marginBottom: '15px'
    },
    
    // Decorative lines styles
    decorativeLines: {
      marginBottom: '20px'
    },
    
    greenLine: {
      width: '60px',
      height: '3px',
      backgroundColor: '#2c5f2d',
      marginBottom: '5px'
    },
    
    orangeLine: {
      width: '80px',
      height: '3px',
      backgroundColor: '#f39c12'
    },
    
    // Styled text styles
    styledText: {
      fontSize: '1.1rem',
      fontWeight: '600',
      textTransform: 'uppercase' as const,
      marginBottom: '8px'
    },
    
    greenText: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#2c5f2d',
      textTransform: 'uppercase' as const,
      marginBottom: '8px'
    },
    
    orangeText: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#f39c12',
      textTransform: 'uppercase' as const,
      marginBottom: '8px'
    },
    
    orangeTextNoMargin: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#f39c12',
      textTransform: 'uppercase' as const
    },
    
    // Right section styles
    rightSection: {
      borderLeft: '1px solid #d1d5db',
      padding: '20px 0'
    },
    
    navGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto auto',
      gap: '25px',
      alignItems: 'start'
    },
    
    // Navigation header styles
    navLinkHeaderText: {
      fontSize: '0.9rem',
      fontWeight: '700',
      color: '#2c3e50',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5px',
      paddingBottom: '0.2rem',
      textAlign: 'left' as const
    },
    
    // Navigation item styles
    navItem: {
      fontSize: '0.85rem',
      color: '#2c3e50',
      marginBottom: '8px',
      textTransform: 'uppercase' as const
    }
  }

  return (
    <div className="about-menu-container w-100" style={devStyles.menuContainer}>
      <div className="row g-0 w-100">
        {/* Left Section - Square Image */}
        <div className="col-lg-4">
          <div className="image-section" style={devStyles.imageSection}>
            <img
              src="public/img/navbar/the-climate-reality-project-Hb6uWq0i4MI-unsplash.jpg"
              alt="About Atlanta Life"
              style={devStyles.heroImage}
            />
          </div>
        </div>
        
        {/* Center Section - Text Content */}
        <div className="col-lg-3">
          <div className="text-content" style={devStyles.textContent}>
            <h2 className="main-heading" style={devStyles.mainHeading}>
              <div>OUR STORY</div>
              <div>MAKES US</div>
              <div>READY FOR</div>
              <div>THE FUTURE</div>
            </h2>
            
            {/* Decorative Lines */}
            <div style={devStyles.decorativeLines}>
              <div style={devStyles.greenLine}></div>
              <div style={devStyles.orangeLine}></div>
            </div>
            
            {/* Styled Text (Not Links) */}
            <div className="styled-text">
              <div style={devStyles.greenText}>
                EXPLORE OUR STORY
              </div>
              <div style={devStyles.orangeText}>
                EXPLORE OUR LEGACY
              </div>
              <div style={devStyles.orangeTextNoMargin}>
                EXPLORE OUR COMMITMENT
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Navigation Grid */}
        <div className="col-lg-5" style={devStyles.rightSection}>
          <div className="nav-grid" style={devStyles.navGrid}>
            {/* CORPORATE PROFILE */}
            <div className="nav-section">
              <h6 className="section-header" style={devStyles.navLinkHeaderText}>
                CORPORATE PROFILE
              </h6>
              <div className="nav-items">
                <div style={devStyles.navItem}>
                  EQUITRUST LIFE INSURANCE COMPANY
                </div>
                <div style={devStyles.navItem}>
                  MINORITY BUSINESS ENTERPRISE
                </div>
                <div style={devStyles.navItem}>
                  PARTNERSHIPS
                </div>
              </div>
            </div>
            
            {/* OUR STORY */}
            <div className="nav-section">
              <h6 className="section-header" style={devStyles.navLinkHeaderText}>
                OUR STORY
              </h6>
              <div className="nav-items">
                <div style={devStyles.navItem}>
                  HISTORY
                </div>
                <div style={devStyles.navItem}>
                  OUR COMMUNITY
                </div>
                <div style={devStyles.navItem}>
                  MISSION & VISION
                </div>
              </div>
            </div>
            
            {/* OUR TEAM */}
            <div className="nav-section">
              <h6 className="section-header" style={devStyles.navLinkHeaderText}>
                OUR TEAM
              </h6>
              <div className="nav-items">
                <div style={devStyles.navItem}>
                  EXECUTIVE LEADERSHIP
                </div>
                <div style={devStyles.navItem}>
                  BUSINESS DEVELOPMENT
                </div>
                <div style={devStyles.navItem}>
                  ACTUARIAL & RISK MANAGEMENT
                </div>
                <div style={devStyles.navItem}>
                  COMMUNITY AFFAIRS
                </div>
                <div style={devStyles.navItem}>
                  INTERNSHIP PROGRAM
                </div>
              </div>
            </div>
            
            {/* MORE ABOUT US */}
            <div className="nav-section">
              <h6 className="section-header" style={devStyles.navLinkHeaderText}>
                MORE ABOUT US
              </h6>
              <div className="nav-items">
                <div style={devStyles.navItem}>
                  NEWSROOM
                </div>
                <div style={devStyles.navItem}>
                  AWARDS & RECOGNITION
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
