import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import GradientBox from '../../../components/shared/GradientBox';
import LiveBalancedCards from '../../../components/livebalanced/LiveBalancedCards';

const LiveBalanced: React.FC = () => (
  <div id="livebalanced-page">
    <ContentPageHeader src="/img/solutions/livebalanced/livebalancedheader.png" title="About Live Balanced" isLiveBalanced={true} />
    <Container>
      <Row>
        <Col>
          <GradientBox line1Text='Our holistic approach to wellbeing' />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <h5 className="fw-semibold">About LIVE<span style={{ color: 'rgb(212, 175, 55)', fontWeight: 400, fontStyle: 'italic' }}>BALANCED</span>™</h5>
          <p className='ms-4 p-text-group'>LiveBalanced is Atlanta Life’s signature health and wellness solution, designed to help individuals and organizations thrive across every dimension of wellbeing. Built on four pillars: —financial wellness, physical wellness, mental wellness, and social wellness—LiveBalanced empowers people to live healthier, more fulfilling lives while driving measurable outcomes for the companies and communities they are part of.</p>
          <p className='ms-4 p-text-group'>As a reinsurance partner, LiveBalanced becomes more than just a wellness program—it is a strategic advantage. By integrating LiveBalanced into your organization, you gain access to tailored wellness solutions that not only improve quality of life for employees and communities but also enhance productivity, reduce costs, and strengthen your company's reputation as a purpose driven leader.</p>
          <h6>Benefits for our Partners</h6>
          <ul className='ms-4'>
            <li><strong>Holistic Wellness Impact:</strong> Supports the whole person, addressing financial, physical, mental, and social health needs.</li>
            <li><strong>Stronger Workforce:</strong> Healthier employees mean greater productivity, improved retention, and reduced absenteeism.</li>
            <li><strong>Community Connection:</strong> LiveBalanced initiatives can be extended outward, helping corporations build authentic and lasting community impact.</li>
            <li><strong>Measurable Outcomes:</strong> Every LiveBalanced event or program comes with a sustainability and wellness report, allowing corporations to track progress toward their goals in real time.</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col lg={8} >
          <h5 className="fw-semibold mt-5">Learn more about the LIVE<span className="learn-more-live-balanced">BALANCED</span>™ Pillars</h5>
     
        </Col>
        </Row>     
        
        <LiveBalancedCards />
    </Container>
  </div>
);

export default LiveBalanced;
