import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import LiveBalancedCards from '../../../components/livebalanced/LiveBalancedCards';

const SocialWellness: React.FC = () => (
  <div>
    <ContentPageHeader src="/img/solutions/livebalanced/financialwellnessheader.png" title="Social Wellness" />
    <Container id="financial-wellness-page">
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4>Social Wellness: The Core of Holistic Living</h4>
          <p className='ms-4 p-text-group'>
            Purpose is the inner compass that drives fulfillment and meaning. It weaves together emotional, social, intellectual, occupational, spiritual, and environmental wellness. Purpose is the glue that holds the pillars together.
          </p>
          <h4 className='ms-4 sub-header mb-1'>Why it Matters:</h4>
          <p className="ms-4 p-text-group">Purpose turns jobs into journeys. It reduces burnout, builds belonging, and fosters leadership. Companies that invest in purpose create healthier, more resilient cultures.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={4} >
          <img src="/img/solutions/livebalanced/sw-building.png" alt="Social Wellness" className="img-fluid ms-4" />
        </Col>
        <Col xs={12} sm={12} md={7} >
          <p className="highlighted mt-5 ms-5">
            <span className="percentage">57%</span>
            of global workers report burnout; mental health challenges cost employers an estimated $200B annually.</p>
          <p className="highlighted  ms-5">
          Unaddressed mental health issues lead to presenteeism, poor productivity, and long-term disengagement.
          </p>

        </Col>

      </Row>
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4 className='ms-4 sub-header mb-1 mt-5'>What We Deliver:</h4>
          <ul className='ms-4'>
          <li><strong>Purpose & Values Alignment:</strong> Helping employees connect their work to something bigger.</li>
          <li><strong>Spiritual & Environmental Exploration:</strong> Encouraging reflection, sustainability, and community service.</li>
          <li><strong>Growth & Intellectual Wellness:</strong> Encouraging learning, curiosity, and creativity.</li>
          <li><strong>Emotional & Social Wellness:</strong> Relationship building, inner peace, and empathy.</li>
          </ul>
        </Col>
      </Row>
      <h5 className="fw-semibold mt-5">More From LIVE<span className="learn-more-live-balanced">BALANCED</span>™</h5>
      <LiveBalancedCards />
    </Container>
  </div>
);

export default SocialWellness;
