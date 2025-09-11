import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import ImageCarousel from '../../../components/shared/ImageCarousel';
import PhotoCard from '../../../components/shared/PhotoCard';

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
                        headerText="One Stop for All Things News and Media"
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

            <h6>View All Our Stories</h6>
            <Row className='photo-card-row'>
                <Col xs={12} md={4} className='d-flex justify-content-center justify-content-lg-end'>
                    <PhotoCard
                        layout="top"
                        name="Eric L. Holoman"
                        title="President & Chief Executive Officer"
                        setSelectedCard={() => { }}
                        image="https://placehold.co/400x300"
                        alignment='end'
                    />
                </Col>
                <Col xs={12} md={4} className='d-flex justify-content-center'>
                    <PhotoCard 
                        layout="top" 
                        name="Ryan L. Smith" 
                        title="Executive Vice President" 
                        setSelectedCard={() => { }} 
                        image="https://placehold.co/400x300" 
                        alignment='center' 
                    />
                </Col>
                <Col xs={12} md={4} className='d-flex justify-content-center justify-content-lg-start'>
                    <PhotoCard 
                        layout="top" 
                        name="Ryan L. Smith" 
                        title="Executive Vice President" 
                        setSelectedCard={() => { }} 
                        image="https://placehold.co/400x300" 
                        alignment='start' 
                    />
                </Col>
            </Row>

            <Row className='photo-card-row'>
                <Col xs={12} md={4} className='d-flex justify-content-center justify-content-lg-end'>
                    <PhotoCard
                        layout="top"
                        name="Eric L. Holoman"
                        title="President & Chief Executive Officer"
                        setSelectedCard={() => { }}
                        image="https://placehold.co/400x300"
                        alignment='end'
                    />
                </Col>
                <Col xs={12} md={4} className='d-flex justify-content-center'>
                    <PhotoCard 
                        layout="top" 
                        name="Ryan L. Smith" 
                        title="Executive Vice President" 
                        setSelectedCard={() => { }} 
                        image="https://placehold.co/400x300" 
                        alignment='center' 
                    />
                </Col>
                <Col xs={12} md={4} className='d-flex justify-content-center justify-content-lg-start'>
                    <PhotoCard 
                        layout="top" 
                        name="Ryan L. Smith" 
                        title="Executive Vice President" 
                        setSelectedCard={() => { }} 
                        image="https://placehold.co/400x300" 
                        alignment='start' 
                    />
                </Col>
            </Row>

        </Container>
    );
};

export default Newsroom;