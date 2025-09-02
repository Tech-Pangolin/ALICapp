import { NavDropdown } from "react-bootstrap";
import type { MenuProps } from "../../types";

const AboutMenu = ({ variant = 'desktop' }: MenuProps) => {
  if (variant === 'mobile') {
    return (
      <NavDropdown title="About" id="mobile-about-dropdown">
        <NavDropdown.Item href="#team">Meet the Team</NavDropdown.Item>
        <NavDropdown.Item href="#about">History & Legacy</NavDropdown.Item>
        <NavDropdown.Item href="#platform">Our Platform</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#mission">Company Mission</NavDropdown.Item>
        <NavDropdown.Item href="#values">Core Values</NavDropdown.Item>
        <NavDropdown.Item href="#leadership">Leadership</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
        <NavDropdown.Item href="#investors">Investor Relations</NavDropdown.Item>
        <NavDropdown.Item href="#news">Company News</NavDropdown.Item>
      </NavDropdown>
    );
  }

  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">About Atlanta Life</h6>
            <a href="#team" className="dropdown-item">Meet the Team</a>
            <a href="#about" className="dropdown-item">History & Legacy</a>
            <a href="#platform" className="dropdown-item">Our Platform</a>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Our Mission</h6>
            <a href="#mission" className="dropdown-item">Company Mission</a>
            <a href="#values" className="dropdown-item">Core Values</a>
            <a href="#leadership" className="dropdown-item">Leadership</a>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Company Info</h6>
            <a href="#careers" className="dropdown-item">Careers</a>
            <a href="#investors" className="dropdown-item">Investor Relations</a>
            <a href="#news" className="dropdown-item">Company News</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
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
    </div>
  );
};

export default AboutMenu;
