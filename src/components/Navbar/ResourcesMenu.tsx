import { NavDropdown } from "react-bootstrap";
import type { MenuProps } from "../../types";

const ResourcesMenu = ({ variant = 'desktop' }: MenuProps) => {
  if (variant === 'mobile') {
    return (
      <NavDropdown title="Resources" id="mobile-resources-dropdown">
        <NavDropdown.Item href="childrensbooks.html">Essential Reads for Every Child</NavDropdown.Item>
        <NavDropdown.Item href="#education">Education Initiatives</NavDropdown.Item>
        <NavDropdown.Item href="#volunteer">Volunteer Opportunities</NavDropdown.Item>
        <NavDropdown.Item href="#partnerships">Community Partnerships</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#foundation">Atlanta Life Foundation</NavDropdown.Item>
        <NavDropdown.Item href="#grants">Grant Programs</NavDropdown.Item>
        <NavDropdown.Item href="#events">Community Events</NavDropdown.Item>
        <NavDropdown.Item href="#stories">Impact Stories</NavDropdown.Item>
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
    
    blueLine: {
      width: '60px',
      height: '3px',
      backgroundColor: '#2c3e50',
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
    
    blueText: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#2c3e50',
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
    
    // Right section text styles
    rightSectionText: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#2c3e50',
      textTransform: 'uppercase' as const,
      marginBottom: '8px'
    },
    
    rightSectionSubText: {
      fontSize: '0.9rem',
      fontWeight: '500',
      color: '#2c3e50',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5px'
    }
  }

  return (
    <div className="resources-menu-container w-100" style={devStyles.menuContainer}>
      <div className="row g-0 w-100">
        {/* Left Section - Square Image */}
        <div className="col-lg-4">
          <div className="image-section" style={devStyles.imageSection}>
            <img
              src="/img/navbar/hannah-busing-Zyx1bK9mqmA-unsplash.jpg"
              alt="Community Resources"
              style={devStyles.heroImage}
            />
          </div>
        </div>
        
        {/* Center Section - Text Content */}
        <div className="col-lg-3">
          <div className="text-content" style={devStyles.textContent}>
            <h2 className="main-heading" style={devStyles.mainHeading}>
              <div>WE ARE HERE</div>
              <div>TO SECURE</div>
              <div>YOUR</div>
              <div>FUTURE</div>
            </h2>
            
            {/* Decorative Lines */}
            <div style={devStyles.decorativeLines}>
              <div style={devStyles.blueLine}></div>
              <div style={devStyles.orangeLine}></div>
            </div>
            
            {/* Styled Text (Not Links) */}
            <div className="styled-text">
              <div style={devStyles.blueText}>
                EXPLORE OUR <span style={{ color: '#f39c12' }}>RESOURCES</span>
              </div>
              <div style={devStyles.orangeText}>
                EXPLORE OUR <span style={{ color: '#f39c12' }}>APPROACH</span>
              </div>
              <div style={devStyles.orangeTextNoMargin}>
                EXPLORE OUR <span style={{ color: '#f39c12' }}>COMMITMENT</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Family Content */}
        <div className="col-lg-5" style={devStyles.rightSection}>
          <div className="family-content">
            <div style={devStyles.rightSectionText}>
              FOR FAMILIES
            </div>
            <div style={devStyles.rightSectionSubText}>
              ESSENTIAL READS FOR EVERY CHILD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesMenu;
