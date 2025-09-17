import  { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import LiveBalancedCards from '../../../components/livebalanced/LiveBalancedCards';

const MentalWellness: React.FC = () => (
  <div>
  <ContentPageHeader src="/img/solutions/livebalanced/mentalwellnessheader.png" title="Mental Wellness" />

    <Container id="mental-wellness-page">
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4>Mental Wellness: Resilience That Drives Results</h4>
          <p className='ms-4 p-text-group'>Mental wellness affects every aspect of human performance. From engagement to innovation, retention to resilience, a healthy mind is essential to individual and organizational success.</p>
          <h4 className='ms-4 sub-header mb-1'>Why it Matters:</h4>
          <p className="ms-4 p-text-group">When people feel emotionally safe and supported, they engage fully. Mental resilience leads to faster recovery, better decision-making, and greater loyalty.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={4} >
          <img src="/img/solutions/livebalanced/mw-building.png" alt="Mental Wellness" className="img-fluid" />
        </Col>
        <Col xs={12} sm={12} md={7} >
          <p className="highlighted">
            <span className="percentage">57%</span>
            of global workers report burnout; mental health challenges cost employers an estimated $200B annually.
          </p>
          <p className="highlighted">
          Unaddressed mental health issues lead to absenteeism, poor productivity, and long term disengagement.
          </p>
         
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4 className='ms-4 sub-header mb-1 mt-5'>What We Deliver:</h4>
          <ul className='ms-4'>
            <li><strong>Workplace Mental Health Training:</strong> Practical support for managers and teams to recognize and respond to mental health needs.</li>
            <li><strong>Access to Behavioral Health Resources:</strong> Tools for anxiety, depression, trauma, and emotional regulation.</li>
            <li><strong>Benefit Strategy Integration:</strong> Aligning mental health coverage with proactive outreach and support.</li>
            <li><strong>Culture Consulting:</strong> Helping organizations build safe, stigma free environments for emotional wellbeing.</li>
          </ul>
        </Col>
      </Row>
           <h5 className="fw-semibold mt-5">More From LIVE<span className="learn-more-live-balanced">BALANCED</span>™</h5>
      <LiveBalancedCards />
    </Container>
  </div>
);

export default MentalWellness;
