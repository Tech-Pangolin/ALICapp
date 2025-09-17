import { Col, Container, Row } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import LiveBalancedCards from '../../../components/livebalanced/LiveBalancedCards';

const FinancialWellness: React.FC = () => (
  <div>
    <ContentPageHeader src="/img/solutions/livebalanced/financialwellnessheader.png" title="Financial Wellness" />
    <Container id="financial-wellness-page">
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4>Financial Wellness: Stability That Builds Legacy</h4>
          <p className='ms-4 p-text-group'>Financial wellness is foundational to holistic wellbeing. Without economic stability, stress accumulates, long term planning stalls, and health outcomes deteriorate. Atlanta Life empowers individuals, families, and employers with tools and strategies to build financial confidence and generational wealth.</p>
          <h4 className='ms-4 sub-header mb-1'>Why it Matters:</h4>
          <p className="ms-4 p-text-group">Financial wellness is not just about income, it's about stability, choices, and legacy. When employees have financial confidence, they make better health decisions, stay engaged at work, and invest in their future.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={4} >
          <img src="/img/solutions/livebalanced/fw-building.png" alt="Financial Wellness" className="img-fluid ms-4" />
        </Col>
        <Col xs={12} sm={12} md={7} >
          <p className="highlighted mt-5 ms-5">
            <span className="percentage">31%</span>
            Only 31% of U.S. adults are considered financially healthy.          </p>
          <p className="highlighted  ms-5">
            Employees under financial stress are more likely to experience absenteeism, mental health struggles, and poor physical health.
          </p>

        </Col>

      </Row>
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4 className='ms-4 sub-header mb-1 mt-5'>What We Deliver:</h4>
          <ul className='ms-4'>
            <li><strong>Legacy Building through Life Insurance:</strong> Protection strategies that support long term goals and multigenerational security.</li>
            <li><strong>Financial Literacy Education:</strong> Budgeting, credit building, saving, debt reduction, and retirement planning.</li>
            <li><strong>Reinsurance That Reinvests:</strong> Innovative financial models allowing organizations to redirect insurance savings into employee wellness and community initiatives.</li>
            <li><strong>Equity Centered Access:</strong> Programs tailored for underserved communities to close the financial knowledge and resource gap.</li>
          </ul>
        </Col>
      </Row>
      <h5 className="fw-semibold mt-5">More From LIVE<span className="learn-more-live-balanced">BALANCED</span>™</h5>
      <LiveBalancedCards />
    </Container>
  </div>
);

export default FinancialWellness;
