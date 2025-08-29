import { NavDropdown } from "react-bootstrap";

interface CommunityMenuProps {
  variant?: 'desktop' | 'mobile';
}

const CommunityMenu = ({ variant = 'desktop' }: CommunityMenuProps) => {
  if (variant === 'mobile') {
    return (
      <NavDropdown title="Community Engagement" id="mobile-community-dropdown">
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

  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
          <div className="col-md-6">
            <h6 className="fw-bold mb-3">Community Programs</h6>
            <a href="childrensbooks.html" className="dropdown-item">Essential Reads for Every Child</a>
            <a href="#education" className="dropdown-item">Education Initiatives</a>
            <a href="#volunteer" className="dropdown-item">Volunteer Opportunities</a>
            <a href="#partnerships" className="dropdown-item">Community Partnerships</a>
          </div>
          <div className="col-md-6">
            <h6 className="fw-bold mb-3">Social Impact</h6>
            <a href="#foundation" className="dropdown-item">Atlanta Life Foundation</a>
            <a href="#grants" className="dropdown-item">Grant Programs</a>
            <a href="#events" className="dropdown-item">Community Events</a>
            <a href="#stories" className="dropdown-item">Impact Stories</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="mega-menu-image">
          <img
            src="public/img/navbar/hannah-busing-Zyx1bK9mqmA-unsplash.jpg"
            alt="Community Engagement"
            className="img-fluid rounded"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <div className="mt-2">
            <h6 className="fw-bold">Making a Difference</h6>
            <p className="small text-muted">Building stronger communities through engagement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityMenu;
