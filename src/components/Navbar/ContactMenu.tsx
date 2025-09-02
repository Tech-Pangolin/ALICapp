import { NavDropdown } from "react-bootstrap";
import type { MenuProps } from "../../types";

const ContactMenu = ({ variant = 'desktop' }: MenuProps) => {
  if (variant === 'mobile') {
    return (
      <NavDropdown title="News & Media" id="mobile-news-dropdown">
        <NavDropdown.Item href="publications.html">Company Publications</NavDropdown.Item>
        <NavDropdown.Item href="#annual-reports">Annual Reports</NavDropdown.Item>
        <NavDropdown.Item href="#whitepapers">White Papers</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="eblf.html">EBLF 2025</NavDropdown.Item>
        <NavDropdown.Item href="#conferences">Conferences</NavDropdown.Item>
        <NavDropdown.Item href="#webinars">Webinars</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#press-releases">Press Releases</NavDropdown.Item>
        <NavDropdown.Item href="#media-kit">Media Kit</NavDropdown.Item>
        <NavDropdown.Item href="#contact-media">Media Contact</NavDropdown.Item>
      </NavDropdown>
    );
  }

  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Publications</h6>
            <a href="publications.html" className="dropdown-item">Company Publications</a>
            <a href="#annual-reports" className="dropdown-item">Annual Reports</a>
            <a href="#whitepapers" className="dropdown-item">White Papers</a>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Events</h6>
            <a href="eblf.html" className="dropdown-item">EBLF 2025</a>
            <a href="#conferences" className="dropdown-item">Conferences</a>
            <a href="#webinars" className="dropdown-item">Webinars</a>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Media Center</h6>
            <a href="#press-releases" className="dropdown-item">Press Releases</a>
            <a href="#media-kit" className="dropdown-item">Media Kit</a>
            <a href="#contact-media" className="dropdown-item">Media Contact</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="mega-menu-image">
          <img
            src="public/img/navbar/roman-kraft-_Zua2hyvTBk-unsplash.jpg"
            alt="Contact Us"
            className="img-fluid rounded"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <div className="mt-2">
            <h6 className="fw-bold">We're Here to Help</h6>
            <p className="small text-muted">Get in touch with our team for assistance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMenu;