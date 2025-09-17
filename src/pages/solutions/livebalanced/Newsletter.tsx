import { Col, Container, Row } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import NewsletterCard from '../../../components/shared/NewsletterCard';

const Newsletter: React.FC = () => (
  <div>
  <ContentPageHeader src="/img/about/shared/bd-header.png" title="LiveBalanced Newsletter" />
  <Container>
    <Row>
      <Col>
         <h4>One place to stay up to date with LIVE<span style={{ color: 'rgb(212, 175, 55)', fontWeight: 400, fontStyle: 'italic' }}>BALANCED</span>™</h4>
         <h4 className='mt-5'>Our monthly newsletter right here</h4>
      </Col>
    </Row>
    <Row>
      <NewsletterCard image="/img/solutions/livebalanced/august2025.png" date="August 2025" align='end'/>
      <NewsletterCard image="/img/solutions/livebalanced/september2025.png" date="September 2025" align='center' />
      <NewsletterCard image="/img/solutions/livebalanced/october2025.png" date="October 2025" align='start' />
    </Row>
    <Row>
      <NewsletterCard image="/img/solutions/livebalanced/november2025.png" date="November 2025" align='end' />
      <NewsletterCard image="/img/solutions/livebalanced/december2025.png" date="December 2025" align='center' />
      <NewsletterCard image="/img/solutions/livebalanced/january2026.png" date="January 2026" align='start' />
    </Row>
  </Container>
  </div>
);

export default Newsletter;
