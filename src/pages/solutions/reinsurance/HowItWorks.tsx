import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';

const HowItWorks: React.FC = () => (
  <div>
  <ContentPageHeader src="/img/about/shared/bd-header.png" title="How It Works" />
  <Container id="what-is-reinsurance">
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4>How does partnering with Atlanta life work?</h4>
          <p className='ms-4 p-text-group'>At Atlanta Life, reinsurance isn’t just about transferring risk — it’s about creating stronger insurers, healthier communities, and lasting partnerships. Our approach is designed to deliver financial protection while also advancing holistic wellness, community engagement, and corporate sustainability.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={8} >
         <h4 className='my-5'>It's easy to partner with us</h4>
          <h4 className="ms-4 sub-header mt-4 mb-1">Step 1: Partnership Begins</h4>
          <p className='ms-4 p-text-group'>We begin by listening. Each insurer, company, or municipality we work with has distinct goals, challenges, and market priorities. By understanding these needs upfront, we begin tailoring our solutions so they work for you, supporting broader business and community objectives.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} >
          <h4 className='ms-4 sub-header mb-1'>Step 3: Enhancing the Program</h4>
         <p className='ms-4 p-text-group'>Our partnerships go beyond risk management. Atlanta Life enhances insurer programs by:</p>
          <ul className='ms-4'>
            <li>Offering greater business solutions that align with holistic wellness strategies.</li>
            <li>Supporting community engagement that reflects insurers' values and strengthens local impact.</li>
            <li>Driving corporate sustainability initiatives that benefit both business and society.</li>
            <li>Helping carriers meet supplier diversity goals through our Minority Business Enterprise (MBE) certification.</li>
          </ul>
          <h4 className="ms-4 sub-header mb-1">Step 4: Delivering Long Term Value</h4>
          <p className='ms-4 p-text-group'>The result is more than protection — it's long-term growth and shared success. Together, we:</p>
          <ul className='ms-4'>
            <li>Build insurance market stability.</li>
            <li>Deliver measurable community impact.</li>
            <li>Create sustainable value that extends well beyond the balance sheet.</li>
          </ul>
          <h4 className="ms-4 sub-header mb-1">Why It Works with Atlanta Life</h4>
          <ul className='ms-4'>
            <li>Experts in Risk Transfer – Customized solutions that protect and grow.</li>
            <li>Holistic Approach – Delivering wellness, engagement, and sustainability alongside reinsurance.</li>
            <li>Community Driven Commitment – Deeply invested in the well-being of the people and places our partners serve.</li>
          </ul>   
        </Col>
      </Row>
    </Container>
  </div>
);

export default HowItWorks;
