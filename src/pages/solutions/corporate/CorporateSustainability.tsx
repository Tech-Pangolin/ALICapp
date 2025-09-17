import { Col, Container, Row } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';

const CorporateSustainability: React.FC = () => (
  <div>
    <ContentPageHeader src="/img/solutions/corporatesustainabilityheader.png" title="Corporate Sustainability" />
    <Container id="corporate-sustainability">
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4>Corporate sustainability designed for you</h4>
          <p className='ms-4 p-text-group'>At Atlanta Life, we understand that sustainability is more than a commitment—it is a responsibility. Corporations today are called to operate in ways that protect the environment, uplift communities, and create long term value for employees, customers, and stakeholders. Our Corporate Sustainability Solution helps organizations move beyond intention to measurable action.</p>
          <p className='ms-4 p-text-group'>As your reinsurance partner, we work with you to strategize and achieve your corporate sustainability goals. Our approach combines over a century of purpose driven leadership with today’s proven tools that are designed, tested, and implemented right here at ALIC. These industry leading resources give your organization the clarity, structure, and support needed to embed sustainability at every level of operations.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4 className='mt-5'>What we provide</h4>
          <ul className='ms-4'>
            <li><strong>Goal Setting & Strategy:</strong> Collaborative development of clear, attainable sustainability goals aligned with your company’s mission.</li>
            <li><strong>Implementation Tools:</strong> Proprietary frameworks and solutions from ALIC that help operationalize sustainability initiatives.</li>
            <li><strong>Progress Measurement:</strong> Tools to track, assess, and report sustainability outcomes to stakeholders with transparency.</li>
            <li><strong>Featured Tool – Corporate Sustainability Calculator:</strong> A data-driven solution that helps corporations measure their progress and outcomes. When we host a Community Engagement or LiveBalanced event, we automatically provide a customized Sustainability Report aligned to your goals, ensuring you know where you stand at all times.</li>
            <li><strong>Long Term Partnership:</strong> Continuous support to ensure your sustainability strategies evolve as your organization grows.</li>
          </ul>
          <p>For over a century, Atlanta Life has been at the intersection of business innovation and social impact. By extending our proven expertise, we empower corporations to set ambitious sustainability goals and achieve them with confidence. Together, we help you shape a future where business growth and social responsibility thrive side by side.</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default CorporateSustainability;
