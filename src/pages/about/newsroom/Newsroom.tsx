import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import ImageCarousel from '../../../components/shared/ImageCarousel';

const Newsroom: React.FC = () => {
    // Team images for development - replace with actual newsroom images when available
    const teamImages = [
        '/img/team/team-1.jpg',
        '/img/team/team-2.jpg',
        '/img/team/team-3.jpg',
        '/img/team/team-4.jpg'
    ];

    return (
        <Container className="about-container">
            <ContentPageHeader src="/img/about/shared/bd-header.png" title="Newsroom" />
            
            <Row className="mt-4">
                <Col>
                    <ImageCarousel 
                        images={teamImages}
                        showDots={true}
                        showArrows={true}
                        autoPlay={true}
                        autoPlayInterval={4000}
                        objectFit="contain"
                        loop={true}
                    />
                </Col>
            </Row>
            
        </Container>
    );
};

export default Newsroom;