import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import type { MenuProps } from "../../types";
import "./AboutMenu.css";

const AboutMenu = ({ variant = 'desktop' }: MenuProps) => {
  if (variant === 'mobile') {
    return (
      <NavDropdown title="About Us" id="mobile-about-dropdown">
        <NavDropdown.Item href="#"><strong>Our Story</strong></NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/about/ourstory"><strong>The Story of Us</strong></NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/about/ourcommunities">Our Communities</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#"><strong>Our Team</strong></NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/about/executiveleadership">Executive Leadership</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/about/businessdevelopment">Business Development</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/about/actuaryrisk">Actuary & Risk</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/about/organizationalstrategy">Organizational Strategy</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/about/internship">Internship Program</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#"><strong>More About Us</strong></NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/about/newsroom">Newsroom</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/about/awards">Awards & Recognition</NavDropdown.Item>
      </NavDropdown>
    );
  }


  return (
    <div className="about-menu-container w-100">
      <div className="row g-0 w-100">
        {/* Left Section - Square Image */}
        <div className="col-lg-4">
          <div className="image-section me-3">
            <img
              src="/img/navbar/the-climate-reality-project-Hb6uWq0i4MI-unsplash.jpg"
              alt="About Atlanta Life"
              className="hero-image"
            />
          </div>
        </div>

        {/* Center Section - Text Content */}
        <div className="col-lg-3">
          <div className="text-content">
            <h2 className="main-heading">
              <div>OUR STORY</div>
              <div>MAKES US</div>
              <div>READY FOR</div>
              <div>THE FUTURE</div>
            </h2>

            {/* Decorative Lines */}
            <div style={{ width: "50%", border: 'none' }}>
              <img src="/img/navbar/bar.jpg" alt="" className="img-fluid" />
            </div>

            {/* Styled Text (Not Links) */}
            <div className="styled-text mt-3">
              <div className="blue-text">
                EXPLORE OUR <span className="orange-text">STORY</span>
              </div>
              <div className="blue-text">
                EXPLORE OUR <span className="orange-text">LEGACY</span>
              </div>
              <div className="blue-text">
                EXPLORE OUR <span className="orange-text">COMMITMENT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Navigation Grid */}
        <div className="col-lg-5 right-section">
          <div className="ms-3 nav-grid">

            {/* OUR STORY */}
            <div className="nav-section">
              <h6 className="section-header nav-link-header-text">
                OUR STORY
              </h6>
              <div className="nav-items">
                <div className="nav-item">
                  <Link to="/about/ourstory">The Story of Us</Link>
                </div>
                <div className="nav-item">
                  <Link to="/about/ourcommunities">Our Communities</Link>
                </div>

              </div>
            </div>

            {/* MORE ABOUT US */}
            <div className="nav-section">
              <h6 className="section-header nav-link-header-text">
                MORE ABOUT US
              </h6>
              <div className="nav-items">
                <div className="nav-item">
                  <Link to="/about/newsroom">NEWSROOM</Link>
                </div>
                <div className="nav-item">
                  <Link to="/about/awards">AWARDS & RECOGNITION</Link>
                </div>
              </div>
            </div>

            {/* OUR TEAM */}
            <div className="nav-section">
              <h6 className="section-header nav-link-header-text">
                OUR TEAM
              </h6>
              <div className="nav-items">
                <div className="nav-item">
                  <Link to="/about/executiveleadership">EXECUTIVE LEADERSHIP</Link>
                </div>
                <div className="nav-item">
                  <Link to="/about/businessdevelopment">BUSINESS DEVELOPMENT</Link>
                </div>
                <div className="nav-item">
                  <Link to="/about/actuaryrisk">ACTUARY & RISK</Link>
                </div>
                <div className="nav-item">
                  <Link to="/about/organizationalstrategy">Organizational Strategy</Link>
                </div>
                <div className="nav-item">
                  <Link to="/about/internship">INTERNSHIP PROGRAM</Link>
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
