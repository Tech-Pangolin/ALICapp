import { NavDropdown } from "react-bootstrap";
import type { MenuProps } from "../../types";

const SolutionsMenu = ({ variant = 'desktop' }: MenuProps) => {
  if (variant === 'mobile') {
    return (
      <NavDropdown title="Solutions" id="mobile-solutions-dropdown">
        <NavDropdown.Item href="livebalanced.html">About LiveBalanced</NavDropdown.Item>
        <NavDropdown.Item href="healthandproductivity.html">Health & Productivity</NavDropdown.Item>
        <NavDropdown.Item href="financialwellness.html">Financial Wellness</NavDropdown.Item>
        <NavDropdown.Item href="physicalwellness.html">Physical Wellness</NavDropdown.Item>
        <NavDropdown.Item href="socialwellness.html">Social Wellness</NavDropdown.Item>
        <NavDropdown.Item href="mentalwellness.html">Mental Wellness</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#wellness-programs">Wellness Programs</NavDropdown.Item>
        <NavDropdown.Item href="#health-assessments">Health Assessments</NavDropdown.Item>
        <NavDropdown.Item href="#coaching">Wellness Coaching</NavDropdown.Item>
        <NavDropdown.Item href="#resources">Wellness Resources</NavDropdown.Item>
        <NavDropdown.Item href="#tools">Interactive Tools</NavDropdown.Item>
      </NavDropdown>
    );
  }

  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
          <div className="col-md-6">
            <h6 className="fw-bold mb-3">Wellness Solutions</h6>
            <a href="livebalanced.html" className="dropdown-item">About LiveBalanced</a>
            <a href="healthandproductivity.html" className="dropdown-item">Health & Productivity</a>
            <a href="financialwellness.html" className="dropdown-item">Financial Wellness</a>
            <a href="physicalwellness.html" className="dropdown-item">Physical Wellness</a>
            <a href="socialwellness.html" className="dropdown-item">Social Wellness</a>
            <a href="mentalwellness.html" className="dropdown-item">Mental Wellness</a>
          </div>
          <div className="col-md-6">
            <h6 className="fw-bold mb-3">Programs & Services</h6>
            <a href="#wellness-programs" className="dropdown-item">Wellness Programs</a>
            <a href="#health-assessments" className="dropdown-item">Health Assessments</a>
            <a href="#coaching" className="dropdown-item">Wellness Coaching</a>
            <a href="#resources" className="dropdown-item">Wellness Resources</a>
            <a href="#tools" className="dropdown-item">Interactive Tools</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="mega-menu-image">
          <img
            src="public/img/navbar/kike-vega-F2qh3yjz6Jk-unsplash.jpg"
            alt="ALIC Solutions"
            className="img-fluid rounded"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <div className="mt-2">
            <h6 className="fw-bold">Holistic Wellness</h6>
            <p className="small text-muted">Comprehensive wellness solutions for a balanced life.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsMenu;
