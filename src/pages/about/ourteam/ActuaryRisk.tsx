import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import PhotoCard from '../../../components/shared/PhotoCard';

const ActuaryRisk: React.FC = () => {
    return (
        <Container className="about-container">
            <ContentPageHeader src="/img/about/shared/bd-header.png" title="Actuary & Risk" />
            <Row>
                <Col xs={12} sm={12} md={8} >
                    <h6>About Actuary & Risk</h6>
                    <p className='ms-4'>
                        The Actuary & Risk team safeguards Atlanta Life's long term stability by analyzing data,
                        assessing financial risk, and ensuring our products and strategies remain strong in a
                        changing market. Through precise forecasting and disciplined oversight, the team provides
                        the insight needed to balance innovation with security, allowing us to protect our clients
                        while sustaining growth for the future.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} >
                    <h6>Our Actuary & Risk Team</h6>
                    <Row style={{ width: '70%' }} className='d-flex justify-content-center mx-auto'>
                        <Col xs={12} lg={6}  >
                            <PhotoCard name="Kam Harris" title="Vice President, Actuary" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                        </Col>
                    </Row>
                    <Row style={{ width: '75%' }} className='d-flex justify-content-center mx-auto'>
                        <Col xs={12} lg={6}  >
                            <PhotoCard name="Amy Whinnett" title="Business Development Associate" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                        </Col>
                        <Col xs={12} lg={6}  >
                            <PhotoCard name="Tony She" title="Business Development Associate" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ActuaryRisk;