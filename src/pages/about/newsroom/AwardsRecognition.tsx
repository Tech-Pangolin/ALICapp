import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import FeaturedStoriesSection from '../../../components/homepage/FeaturedStoriesSection';
import './AwardsRecognition.css';

const AwardsRecognition: React.FC = () => {
    return (
        <>
            <ContentPageHeader src="/img/about/shared/bd-header.png" title="Awards & Recognition" />
            <Container className="about-container">
                <Row id="awards-section">
                    <Col xs={12} sm={12} md={8} >
                        <h6 className='mb-4'>Our Awards</h6>

                        {/* Individual Awards each have their own row  */}
                        <Row className='ms-4'>
                            <h6>Award Title</h6>
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