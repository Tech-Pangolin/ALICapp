import { NavDropdown } from "react-bootstrap";
import type { MenuProps } from "../../types";

const SolutionsMenu = ({ variant = 'desktop' }: MenuProps) => {
  if (variant === 'mobile') {
    return (
      <NavDropdown title="Solutions" id="mobile-solutions-dropdown">
        <NavDropdown.Item href="#reinsurance-solutions">Reinsurance Solutions</NavDropdown.Item>
        <NavDropdown.Item href="#how-it-works">How It Works</NavDropdown.Item>
        <NavDropdown.Item href="#risk-management">Risk Management</NavDropdown.Item>
        <NavDropdown.Item href="#partnerships">Partnerships</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/livebalanced">About LiveBalanced™</NavDropdown.Item>
        <NavDropdown.Item href="/livebalanced/physicalwellness">Physical Wellness</NavDropdown.Item>
        <NavDropdown.Item href="/livebalanced/socialwellness">Social Wellness</NavDropdown.Item>
        <NavDropdown.Item href="/livebalanced/financialwellness">Wealth & Equity</NavDropdown.Item>
        <NavDropdown.Item href="/livebalanced/mentalwellness">Purpose Alignment</NavDropdown.Item>
        <NavDropdown.Item href="/publications">The Newsletter</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#local-community">Local Community Engagement</NavDropdown.Item>
        <NavDropdown.Item href="#continued-education">Continued Education</NavDropdown.Item>
        <NavDropdown.Item href="#corporate-sustainability">Corporate Sustainability</NavDropdown.Item>
        <NavDropdown.Item href="#health-productivity">Health & Productivity</NavDropdown.Item>
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
      // fontWeight: '600',
      color: '#2c3e50',
      textTransform: 'uppercase' as const,
      marginBottom: '8px'
    },
    
    orangeText: {
      fontSize: '1.1rem',
      // fontWeight: '600',
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
    
    // LiveBalanced header special styling
    livebalancedHeader: {
      fontSize: '0.9rem',
      fontWeight: '700',
      color: '#f39c12',
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
    <div className="solutions-menu-container w-100" style={devStyles.menuContainer}>
      <div className="row g-0 w-100">
        {/* Left Section - Square Image */}
        <div className="col-lg-4">
          <div className="image-section me-3" style={devStyles.imageSection}>
            <img
              src="/img/navbar/kike-vega-F2qh3yjz6Jk-unsplash.jpg"
              alt="ALIC Solutions"
              style={devStyles.heroImage}
            />
          </div>
        </div>
        
        {/* Center Section - Text Content */}
        <div className="col-lg-3">
          <div className="text-content" style={devStyles.textContent}>
            <h2 className="main-heading" style={devStyles.mainHeading}>
              OUR SUCCESS IS YOUR SUCCESS
            </h2>
            
            {/* Decorative Lines */}
             <div style={{width:"50%", border:'none'}}>
              <img src="/img/navbar/bar.jpg" alt="" className="img-fluid" />
            </div>
            
            
            {/* Styled Text (Not Links) */}
            <div className="styled-text mt-3">
              <div style={devStyles.blueText}>
                EXPLORE OUR <span style={devStyles.orangeText}>SOLUTIONS</span>
              </div>
              <div style={devStyles.blueText}>
                EXPLORE OUR <span style={devStyles.orangeText}>CAPABILITIES</span>
              </div>
              <div style={devStyles.blueText}>
                EXPLORE OUR <span style={devStyles.orangeText}>COMMITMENT</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Navigation Grid */}
        <div className="col-lg-5" style={devStyles.rightSection}>
          <div className="nav-grid ms-3" style={devStyles.navGrid}>
            {/* REINSURANCE SOLUTIONS */}
            <div className="nav-section">
              <h6 className="section-header" style={devStyles.navLinkHeaderText}>
                REINSURANCE SOLUTIONS
              </h6>
              <div className="nav-items">
                <div style={devStyles.navItem}>
                  HOW IT WORKS
                </div>
                <div style={devStyles.navItem}>
                  RISK MANAGEMENT
                </div>
                <div style={devStyles.navItem}>
                  PARTNERSHIPS
                </div>
              </div>
            </div>
            
            {/* CORPORATE CAPABILITIES */}
            <div className="nav-section">
              <h6 className="section-header" style={devStyles.navLinkHeaderText}>
                CORPORATE CAPABILITIES
              </h6>
              <div className="nav-items">
                <div style={devStyles.navItem}>
                  LOCAL COMMUNITY ENGAGEMENT
                </div>
                <div style={devStyles.navItem}>
                  CONTINUED EDUCATION
                </div>
                <div style={devStyles.navItem}>
                  CORPORATE SUSTAINABILITY
                </div>
                <div style={devStyles.navItem}>
                  <a href="/health/healthandproductivity">HEALTH & PRODUCTIVITY</a>
                </div>
              </div>
            </div>
            
            {/* LIVEBALANCED™ */}
            <div className="nav-section">
              <h6 className="section-header" style={devStyles.livebalancedHeader}>
                LIVEBALANCED™
              </h6>
              <div className="nav-items">
                <div style={devStyles.navItem}>
                  <a href="/livebalanced">ABOUT LIVEBALANCED™</a>
                </div>
                <div style={devStyles.navItem}>
                  <a href="/livebalanced/physicalwellness">PHYSICAL WELLNESS</a>
                </div>
                <div style={devStyles.navItem}>
                  <a href="/livebalanced/socialwellness">SOCIAL WELLNESS</a>
                </div>
                <div style={devStyles.navItem}>
                  <a href="/livebalanced/financialwellness">WEALTH & EQUITY</a>
                </div>
                <div style={devStyles.navItem}>
                  <a href="/livebalanced/mentalwellness">PURPOSE ALIGNMENT</a>
                </div>
                <div style={devStyles.navItem}>
                  <a href="/publications">THE NEWSLETTER</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsMenu;
