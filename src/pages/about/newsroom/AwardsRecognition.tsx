import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import FeaturedStoriesSection from '../../../components/homepage/FeaturedStoriesSection';

const AwardsRecognition: React.FC = () => {
    return (
        <>
            <ContentPageHeader src="/img/about/shared/bd-header.png" title="Awards & Recognition" />
            <Container id="awards-recognition">
                <Row>
                    <Col xs={12} sm={12} md={8} >
                        <h4>Our Awards</h4>

                        {/* Individual Awards each have their own row  */}
                        <Row className='ms-4'>
                            <h5>Award Title</h5>
                            <p>Award Description</p>
                        </Row>

                    </Col>
                </Row>
                <FeaturedStoriesSection showTitle={false} />
            </Container>
        </>
    );
};

export default AwardsRecognition;