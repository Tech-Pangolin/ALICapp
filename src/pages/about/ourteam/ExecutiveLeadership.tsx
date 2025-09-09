import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhotoCard from '../../../components/utilities/PhotoCard';

const ExecutiveLeadership: React.FC = () => {
    return (
        <Container className="about-container">
            <Row>
                <Col>
                    <PhotoCard name="Eric L. Holoman" title="President & Chief Executive Officer" image="https://placehold.co/400x300" />
                </Col>
                <Col>
                    <PhotoCard name="Ryan L. Smith" title="Executive Vice President" image="https://placehold.co/400x300" />
                </Col>
                <Col>
                    <PhotoCard name="Paul A. Miller" title="Corporate Secretary & Treasurer" image="https://placehold.co/400x300" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PhotoCard name="Kam Harris" title="Vice President, Actuary" image="https://placehold.co/400x300" />
                </Col>
                <Col>
                    <PhotoCard name="Courtney Johnson" title="Vice President, Business Development" image="https://placehold.co/400x300" />
                </Col>
                <Col>
                    <PhotoCard name="Trish Payne" title="Vice President, Business Development" image="https://placehold.co/400x300" />
                </Col>
            </Row>

        </Container>
    );
};

export default ExecutiveLeadership;