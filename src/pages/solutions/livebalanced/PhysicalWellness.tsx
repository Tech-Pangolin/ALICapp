
import { Col, Container, Row } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import LiveBalancedCards from '../../../components/livebalanced/LiveBalancedCards';

const PhysicalWellness: React.FC = () => (
  <div>
    <ContentPageHeader src="/img/solutions/livebalanced/physicalwellnessheader.png" title="Physical Wellness" />
    <Container id="physical-wellness-page">
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4>Physical Wellness: Strength from the Inside Out</h4>
          <p className='ms-4 p-text-group'>Physical health supports productivity, recovery, energy, and resilience. Atlanta Life integrates wellness with benefit programs and return to work strategies to help people function and feel their best.</p>
          <h4 className='ms-4 sub-header mb-1'>Why it Matters:</h4>
          <p className="ms-4 p-text-group">Investing in physical health is not only the right thing to do, it's a performance multiplier. Healthy employees bring energy, focus, and fewer claims. It's a foundational component of workforce sustainability.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={4} >
          <img src="/img/solutions/livebalanced/pw-buildings.png" alt="Physical Wellness" className="img-fluid" />
        </Col>
        <Col xs={12} sm={12} md={7} >
          <p className="highlighted">
            <span className="percentage">57%</span>
            of employers report that physical health directly affects productivity and absenteeism
          </p>
          <p className="highlighted">
            <span className="percentage">73%</span>
            A Johns Hopkins study found that structured early return to work programs can reduce lost workday cases by 55%, cut lost time claims by 73%, and decrease claim related costs accordingly.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4 className='ms-4 sub-header mb-1 mt-5'>What We Deliver:</h4>
          <ul className='ms-4'>
            <li><strong>Disability & Return to Work Programs:</strong> Streamlined, compassionate approaches to keeping employees engaged through transitions.</li>
            <li><strong>Preventive Wellness Education:</strong> Chronic condition management, sleep hygiene, ergonomic awareness, and nutrition.</li>
            <li><strong>Community Health Activations:</strong> Mobile clinics, wellness screenings, and education events.</li>
            <li><strong>Insurance Integrated Wellness:</strong> Aligning physical wellbeing with the tools and protections employees already have.</li>
          </ul>
        </Col>
      </Row>
      <h5 className="fw-semibold mt-5">More From LIVE<span className="learn-more-live-balanced">BALANCED</span>™</h5>
      <LiveBalancedCards />
    </Container>
  </div>
);

export default PhysicalWellness;
