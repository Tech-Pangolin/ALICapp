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

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="mega-menu-image">
          <img
            src="public/img/navbar/the-climate-reality-project-Hb6uWq0i4MI-unsplash.jpg"
            alt="About Atlanta Life"
            className="img-fluid rounded"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <div className="mt-2">
            <h6 className="fw-bold">Building a Legacy</h6>
            <p className="small text-muted">Discover our rich history and commitment to community.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6" style={{ borderLeft: '1px solid rgb(150, 155, 159)' }}>
        <div className="row">
          <div className="col-md-6">
            <h6 className="fw-bold mb-3">CORPORATE PROFILE</h6>
            <a href="#equitrust" className="dropdown-item">EquiTrust Life Insurance Company</a>
            <a href="#mbe" className="dropdown-item">Minority Business Enterprise</a>
            <a href="#partnerships" className="dropdown-item">Partnerships</a>
          </div>
          <div className="col-md-6">
            <h6 className="fw-bold mb-3">OUR STORY</h6>
            <a href="#history" className="dropdown-item">History</a>
            <a href="#community" className="dropdown-item">Our Community</a>
            <a href="#mission" className="dropdown-item">Mission & Vision</a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <h6 className="fw-bold mb-3">OUR TEAM</h6>
            <a href="#leadership" className="dropdown-item">Executive Leadership</a>
            <a href="#business-dev" className="dropdown-item">Business Development</a>
            <a href="#actuarial" className="dropdown-item">Actuarial & Risk Management</a>
            <a href="#community-affairs" className="dropdown-item">Community Affairs</a>
            <a href="#internship" className="dropdown-item">Internship Program</a>
          </div>
          <div className="col-md-6">
            <h6 className="fw-bold mb-3">MORE ABOUT US</h6>
            <a href="#newsroom" className="dropdown-item">Newsroom</a>
            <a href="#awards" className="dropdown-item">Awards & Recognition</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
