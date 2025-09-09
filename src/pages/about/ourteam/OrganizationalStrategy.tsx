import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';

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
            <Col xs={12} sm={12} md={8} >
                <h6>Our Organizational Strategy Team</h6>
                {/* placeholder for photo cards */}
            </Col>
        </Row>
    </Container>
    );
};

export default OrganizationalStrategy;