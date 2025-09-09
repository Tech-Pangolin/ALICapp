import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';

const BusinessDevelopment: React.FC = () => {
    return (
        <Container className="about-container">
            <ContentPageHeader src="/img/about/bizdev/bd-header.png" title="Business Development" />
            <Row>
                <Col xs={12} sm={12} md={8} >
                    <h6>About Business Development</h6>
                    <p className='ms-4'>
                        The Business Development team drives Atlanta Life's growth by cultivating relationships, 
                        expanding partnerships, and identifying new opportunities that align with our mission. 
                        With a focus on innovation and long term impact, the team leads efforts to strengthen our 
                        presence in key markets while creating tailored solutions that meet the evolving needs of 
                        clients. Through strategic vision and purposeful execution, Business Development extends our 
                        legacy of service to communities nationwide while positioning Atlanta Life as a trusted partner 
                        for the future.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={8} >
                    <h6>Our Business Development Team</h6>
                    {/* placeholder for photo cards */}
                </Col>
            </Row>
        </Container>
    );
};

export default BusinessDevelopment;