import { NavDropdown } from "react-bootstrap";
import type { MenuProps } from "../../types";

const ResourcesMenu = ({ variant = 'desktop' }: MenuProps) => {
  if (variant === 'mobile') {
    return (
      <NavDropdown title="Resources" id="mobile-resources-dropdown">
        <NavDropdown.Item href="/resources/readsforchildren">Essential Reads for Every Child</NavDropdown.Item>
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
  
  return (
    <div className="resources-menu-container w-100 menuContainer">
      <div className="row g-0 w-100">
        {/* Left Section - Square Image */}
        <div className="col-lg-4">
          <div className="image-section me-3 imageSection" >
            <img
              src="/img/navbar/hannah-busing-Zyx1bK9mqmA-unsplash.jpg"
              alt="Community Resources"
              className="heroImage"
            />
          </div>
        </div>
        
        {/* Center Section - Text Content */}
        <div className="col-lg-3">
          <div className="text-content textContent">
            <h2 className="main-heading mainHeading">
              <div>WE ARE HERE</div>
              <div>TO SECURE</div>
              <div>YOUR</div>
              <div>FUTURE</div>
            </h2>
            
            {/* Decorative Lines */}
            <div style={{width:"50%", border:'none'}}>
              <img src="/img/navbar/bar.jpg" alt="" className="img-fluid" />
            </div>
            
            
            {/* Styled Text (Not Links) */}
            <div className="styled-text mt-3">
              <div className="blue-text">
                EXPLORE OUR <span style={{ color: '#f39c12' }}>RESOURCES</span>
              </div>
              <div className="blue-text">
                EXPLORE OUR <span style={{ color: '#f39c12' }}>APPROACH</span>
              </div>
              <div className="blue-text">
                EXPLORE OUR <span style={{ color: '#f39c12' }}>COMMITMENT</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Family Content */}
        <div className="col-lg-5 right-section">
          <div className="family-content ms-3">
            <div className="right-section-text">
              FOR FAMILIES
            </div>
            <div className="right-section-sub-text">
              <a href="/resources/readsforchildren">ESSENTIAL READS FOR EVERY CHILD</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesMenu;
