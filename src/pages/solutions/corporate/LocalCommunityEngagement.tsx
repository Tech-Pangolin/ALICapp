import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import { Container, Row, Col } from 'react-bootstrap';
import FeaturedStoriesSection from '../../../components/shared/FeaturedStoriesSection';

const LocalCommunityEngagement: React.FC = () => (
  <div>
    <ContentPageHeader src="/img/solutions/localcommunityheader.png" title="Local Community Engagement" />
    <Container id="local-community-engagement">
      <Row>
        <Col xs={12} sm={12} md={8} >
          <h4>Our community engagement solution</h4>
          <p className='ms-4 p-text-group'>At Atlanta Life, we believe that meaningful impact begins where people live and work. For more than a century, our legacy has been built on investing in communities across the country.</p>
          <p className='ms-4 p-text-group'>As your reinsurance partner, we bring this same expertise in community engagement and community development to help corporations strengthen their local presence. We understand that today’s companies are expected to deliver value not only to shareholders but also to the neighborhoods they serve. By partnering with us, you gain access to strategies that enhance your community footprint and create real, lasting impact.</p>
          <p className='ms-4 p-text-group'>Our approach is rooted in authentic connection, cultural awareness, and measurable outcomes. We don’t just talk about change—we help you deliver it! Whether it’s through health and wellness initiatives, financial literacy education, or local development programs, Atlanta Life stands ready to extend our proven model of engagement to your organization. </p>
        </Col>
      </Row>      
      <Row>
        <Col style={{ marginTop: '5rem' }}>
        <FeaturedStoriesSection showTitle={true} img1="/img/solutions/localengagement-fs1.png" img2="/img/solutions/localengagement-fs2.png" img3="/img/solutions/localengagement-fs3.png" img4="/img/solutions/localengagement-fs4.png" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default LocalCommunityEngagement;
