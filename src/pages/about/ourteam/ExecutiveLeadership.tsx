import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhotoCard from '../../../components/utilities/PhotoCard';

const ExecutiveLeadership: React.FC = () => {
    return (
        <Container className="about-container executive-leadership-container">
            <Row className='photo-card-row'>
                <Col xs={12} md={4}>
                    <PhotoCard name="Eric L. Holoman" title="President & Chief Executive Officer" image="https://placehold.co/400x300" />
                </Col>
                <Col xs={12} md={4}>
                    <PhotoCard name="Ryan L. Smith" title="Executive Vice President" image="https://placehold.co/400x300" />
                </Col>
                <Col xs={12} md={4}>
                    <PhotoCard name="Paul A. Miller" title="Corporate Secretary & Treasurer" image="https://placehold.co/400x300" />
                </Col>
            </Row>
            <Row className='photo-card-row'>
                <Col xs={12} md={4}>
                    <PhotoCard name="Kam Harris" title="Vice President, Actuary" image="https://placehold.co/400x300" />
                </Col>
                <Col xs={12} md={4}>
                    <PhotoCard name="Courtney Johnson" title="Vice President, Business Development" image="https://placehold.co/400x300" />
                </Col>
                <Col xs={12} md={4}>
                    <PhotoCard name="Trish Payne" title="Vice President, Business Development" image="https://placehold.co/400x300" />
                </Col>
            </Row>

        </Container>
    );
};

export default ExecutiveLeadership;