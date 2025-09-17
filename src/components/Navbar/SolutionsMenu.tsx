import { NavDropdown } from "react-bootstrap";
import type { MenuProps } from "../../types";

const SolutionsMenu = ({ variant = 'desktop' }: MenuProps) => {
  if (variant === 'mobile') {
    return (
      <NavDropdown title="Solutions" id="mobile-solutions-dropdown">
        <NavDropdown.Item href="#reinsurance-solutions">Reinsurance Solutions</NavDropdown.Item>
        <NavDropdown.Item href="/solutions/what-is-reinsurance">What is Reinsurance</NavDropdown.Item>
        <NavDropdown.Item href="/solutions/how-it-works">How It Works</NavDropdown.Item>

        <NavDropdown.Divider />
        <NavDropdown.Item href="/solutions/about-livebalanced">LiveBalanced™</NavDropdown.Item>
        <NavDropdown.Item href="/solutions/about-livebalanced">About LiveBalanced™</NavDropdown.Item>
        <NavDropdown.Item href="/solutions/physicalwellness">Physical Wellness</NavDropdown.Item>
        <NavDropdown.Item href="/solutions/socialwellness">Mental Wellness</NavDropdown.Item>
        <NavDropdown.Item href="/solutions/financialwellness">Financial Wellness</NavDropdown.Item>
        <NavDropdown.Item href="/solutions/mentalwellness">Social Wellness</NavDropdown.Item>
        <NavDropdown.Item href="/solutions/newsletter">The Newsletter</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#local-community">Corporate Capabilities</NavDropdown.Item>
        <NavDropdown.Item href="/solutions/local-community-engagement">Local Community Engagement</NavDropdown.Item>
        <NavDropdown.Item href="/solutions/corporate-sustainability">Corporate Sustainability</NavDropdown.Item>
        <NavDropdown.Item href="/solutions/health-and-productivity">Health & Productivity</NavDropdown.Item>
      </NavDropdown>
    );
  }

  return (
    <div className="solutions-menu-container w-100 menuContainer">
      <div className="row g-0 w-100">
        {/* Left Section - Square Image */}
        <div className="col-lg-4">
          <div className="image-section me-3 imageSection">
            <img
              src="/img/navbar/kike-vega-F2qh3yjz6Jk-unsplash.jpg"
              alt="ALIC Solutions"
              className="heroImage"
            />
          </div>
        </div>

        {/* Center Section - Text Content */}
        <div className="col-lg-3">
          <div className="text-content textContent">
            <h2 className="main-heading mainHeading">
              OUR SUCCESS IS YOUR SUCCESS
            </h2>

            {/* Decorative Lines */}
            <div style={{ width: "50%", border: 'none' }}>
              <img src="/img/navbar/bar.jpg" alt="" className="img-fluid" />
            </div>


            {/* Styled Text (Not Links) */}
            <div className="styled-text mt-3">
              <div className="blueText">
                EXPLORE OUR <span className="orangeText">SOLUTIONS</span>
              </div>
              <div className="blueText">
                EXPLORE OUR <span className="orangeText">CAPABILITIES</span>
              </div>
              <div className="blueText">
                EXPLORE OUR <span className="orangeText">COMMITMENT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Navigation Grid */}
        <div className="col-lg-5 rightSection" >
          <div className="nav-grid ms-3 navGrid">
            {/* REINSURANCE SOLUTIONS */}
            <div className="nav-section">
              <h6 className="section-header navLinkHeaderText">
                REINSURANCE SOLUTIONS
              </h6>
              <div className="nav-items">
                <div className="navItem">
                  <a href="/solutions/what-is-reinsurance">What is Reinsurance</a>
                </div>
                <div className="navItem">
                  <a href="/solutions/how-it-works">How it Works</a>
                </div>

              </div>
            </div>

            {/* CORPORATE CAPABILITIES */}
            <div className="nav-section">
              <h6 className="section-header navLinkHeaderText">
                CORPORATE CAPABILITIES
              </h6>
              <div className="nav-items">
                <div className="navItem">
                  <a href="/solutions/local-community-engagement">LOCAL COMMUNITY ENGAGEMENT</a>
                </div>
                <div className="navItem">
                  <a href="/solutions/corporate-sustainability">CORPORATE SUSTAINABILITY</a>
                </div>
                <div className="navItem">
                  <a href="/solutions/health-and-productivity">HEALTH & PRODUCTIVITY</a>
                </div>
              </div>
            </div>

            {/* LIVEBALANCED™ */}
            <div className="nav-section">
              <h6 className="section-header livebalancedHeader">
                <span className="blue-text-live">LIVE</span><span className="fst-italic">BALANCED</span><span className="blue-text-live">™</span>
              </h6>
              <div className="nav-items">
                <div className="navItem">
                  <a href="/solutions/about-livebalanced">ABOUT LIVEBALANCED™</a>
                </div>
                <div className="navItem">
                  <a href="/solutions/physicalwellness">PHYSICAL WELLNESS</a>
                </div>
                <div className="navItem">
                  <a href="/solutions/socialwellness">SOCIAL WELLNESS</a>
                </div>
                <div className="navItem">
                  <a href="/solutions/financialwellness">WEALTH & EQUITY</a>
                </div>
                <div className="navItem">
                  <a href="/solutions/mentalwellness">PURPOSE ALIGNMENT</a>
                </div>
                <div className="navItem">
                  <a href="/solutions/newsletter">THE NEWSLETTER</a>
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
