import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';

const Reinsurance: React.FC = () => (
  <div>
    <ContentPageHeader src="/img/about/shared/bd-header.png" title="What is Reinsurance" />
    <Container id="what-is-reinsurance">
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4>Reinsurance 101</h4>
          <h5>test</h5>
          <p className='ms-4'>The story of Atlanta Life begins with Alonzo Franklin Herndon,
            a man whose determination and foresight reshaped opportunities for countless others.
            Rising from modest beginnings, Herndon built a reputation as a successful barber and entrepreneur in Atlanta.
            His ventures flourished, but he always looked beyond his own achievements.
            He envisioned creating an institution that would not only build wealth,
            but also provide stability and opportunity to communities that had long been excluded from financial security.</p>
          <div className='hr'><img src="/img/about/storyofus/hr.png" alt="Horizontal Rule" className='img-fluid' /></div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={8} >
          <h4>Welcome to Atlanta life</h4>
          <p className='ms-4'>In 1905, Herndon acquired a small association and transformed it into what would become Atlanta Life Insurance Company. To him, insurance was more than a product—it was a tool for empowerment. At a time when many families were denied access to protection and planning, Atlanta Life became a symbol of progress. It offered dignity, peace of mind, and a foundation on which to build futures.
            Herndon's vision turned Atlanta Life into more than a company; it became a movement dedicated to opening doors and creating pathways for prosperity.</p>
          <div className='hr'><img src="/img/about/storyofus/hr.png" alt="Horizontal Rule" className='img-fluid' /></div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={8} >
          <h4>A century of growth & Strength</h4>
          <p className='ms-4'>Across generations, Atlanta Life has grown into one of the most influential institutions of its kind. We have stood strong through the challenges of changing economies, shifting industries, and evolving communities. From supporting families through uncertain times to investing in education, business development, and community initiatives, Atlanta Life became a pillar of progress.
            The company's impact has extended far beyond financial services — it has helped shape the fabric of Atlanta and inspired progress across the nation.</p>
          <div className='hr'><img src="/img/about/storyofus/hr.png" alt="Horizontal Rule" className='img-fluid' /></div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={8} >
          <h4>Carrying the vision forward</h4>
          <p className='ms-4'>Across generations, Atlanta Life has grown into one of the most influential institutions of its kind.
            We have stood strong through the challenges of changing economies, shifting industries, and evolving communities.
            From supporting families through uncertain times to investing in education, business development, and community initiatives,
            Atlanta Life became a pillar of progress.
            The company's impact has extended far beyond financial services—it has helped shape the fabric of Atlanta and inspired progress across the nation.</p>
          <div className='hr'><img src="/img/about/storyofus/hr.png" alt="Horizontal Rule" className='img-fluid' /></div>
        </Col>
      </Row>

    </Container>
  </div>
);

export default Reinsurance;
