import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';

const Reinsurance: React.FC = () => (
  <div>
    <ContentPageHeader src="/img/about/shared/bd-header.png" title="What is Reinsurance" />
    <Container id="what-is-reinsurance">
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4>Reinsurance 101</h4>
          <h4 className="ms-4 sub-header mb-1">What is Reinsurance?</h4>
          <p className='ms-4 p-text-group'>Reinsurance is the process by which insurance companies transfer portions of their risk portfolios to other insurance entities, known as reinsurers. Through formal agreements, reinsurers agree to absorb a share of potential losses, providing carriers with stability and protection.</p>
          <p className='ms-4 p-text-group'>In practice, this means insurers pay a premium to reinsurers in exchange for coverage of specific risks. For example, if an insurer faces unusually large claims due to a natural disaster, the reinsurer helps absorb that financial burden. This allows insurers to underwrite higher-limit policies or serve higher-risk clients without jeopardizing their financial stability.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4 className="ms-4 sub-header mt-4 mb-1">Why U.S. Based Reinsurance Matters</h4>
          <p className='ms-4 p-text-group'>U.S. based reinsurance plays a critical role in supporting the strength of the domestic insurance industry. Operating within established regulatory frameworks, U.S. reinsurers provide transparency, legal oversight, and financial accountability that safeguard the entire risk management process.</p>
          <p className='ms-4 p-text-group'>Partnering with U.S. reinsurers also ensures closer alignment with U.S. market conditions and more responsive coordination during times of crisis. These reinsurers offer tailored solutions designed to meet the unique needs of American insurers and policyholders.</p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={8} >
          <h4 className='mt-4'>Key benefits of u.s. based reinsurance</h4>
          <h4 className="ms-4 sub-header mb-1">Rate Reduction for Policyholders</h4>
          <ul className='ms-4'>
            <li>By spreading risk across a broader financial base, reinsurance helps carriers manage claims more efficiently, often lowering premium rates for policyholders.</li>
          </ul>
          <h4 className="ms-4 sub-header mb-1">Financial Protection Against Catastrophic Events</h4>
          <ul className='ms-4'>
            <li>Reinsurance shields carriers from natural disasters, economic downturns, and other large-scale risks, ensuring they remain financially secure and capable of honoring claims.</li>
          </ul>
          <h4 className="ms-4 sub-header mb-1">Economies of Scale</h4>
          <ul className='ms-4'>
            <li>U.S.-based reinsurance allows insurers to access large pools of capital and risk-sharing mechanisms. This efficiency reduces overhead costs and enhances industry resilience.</li>
          </ul>
          <h4 className="ms-4 sub-header mb-1">Strengthening Market Stability</h4>
          <ul className='ms-4'>
            <li>By enhancing the financial security of insurers, reinsurance promotes consumer confidence and ensures carriers can underwrite larger policies while maintaining balance sheet strength.</li>
          </ul>
          <h4 className="ms-4 sub-header mb-1">Supporting Growth and Innovation</h4>
          <ul className='ms-4'>
            <li>By mitigating financial risk, reinsurance empowers insurers to expand coverage options, innovate services, and strengthen the overall insurance landscape.</li>
          </ul>
          <h4 className="ms-4 sub-header mb-1 mt-5">Atlanta Life's Commitment</h4>
          <p className="ms-4">For more than a century, Atlanta Life has combined financial strength with a legacy of community advancement. As a U.S.-based, minority-led reinsurer, we deliver more than protection—we create partnerships that build stability, foster innovation, and extend opportunity to the communities our carriers serve.</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Reinsurance;
