import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import PhotoCard from '../../../components/shared/PhotoCard';

const OrganizationalStrategy: React.FC = () => {
    return (
        <Container className="about-container">
            <ContentPageHeader src="/img/about/shared/bd-header.png" title="Organizational Strategy" />
            <Row>
                <Col xs={12} sm={12} md={8} >
                    <h6>About Organizational Strategy</h6>
                    <p className='ms-4'>
                        The Organization Strategy Team provides the operational foundation that keeps Atlanta Life
                        moving forward. By ensuring efficiency, alignment, and seamless support across the
                        organization, the team enables our leaders to focus on driving growth, strengthening
                        partnerships, and advancing strategies that deliver meaningful impact for our clients and communities.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} >
                    <h6>Our Organizational Strategy Team</h6>
                    <Row className='d-flex justify-content-center mx-auto'>
                        <Col xs={12} lg={4}  >
                            <PhotoCard name="Mia Dodson" title="Manager, Compliance" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                        </Col>
                        <Col xs={12} lg={4}  >
                            <PhotoCard name="Dayina Luxama" title="Office Coordinator & Customer Care Specialist" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                        </Col>
                        <Col xs={12} lg={4}  >
                            <PhotoCard name="Glenda Madrigal" title="Executive Assistant" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                        </Col>
                    </Row>
                    <Row style={{ width: '70%' }} className='d-flex justify-content-center mx-auto'>
                        <Col xs={12} lg={6}  >
                            <PhotoCard name="Darielle Jones" title="Administrator, IT Support Services" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                        </Col>
                        <Col xs={12} lg={6}  >
                            <PhotoCard name="Tamantha Smith" title="Project Manager" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                        </Col>
                       
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default OrganizationalStrategy;