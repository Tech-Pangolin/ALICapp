import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import PhotoCard from '../../../components/shared/PhotoCard';

const ActuaryRisk: React.FC = () => {
    return (
        <>
            <ContentPageHeader src="/img/about/shared/bd-header.png" title="Actuary & Risk" />
            <Container className="about-container">

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
                        <Row className='d-flex justify-content-center mx-auto'>
                            <Col xs={12} lg={12} className='d-flex justify-content-center'>
                                <PhotoCard name="Kam Harris" title="Vice President, Actuary" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-center mx-auto d-none d-lg-flex'>
                            <Col xs={12} lg={12} className='d-lg-flex justify-content-lg-center'  >
                                <div className="mx-2"><PhotoCard name="Amy Whinnett" title="Business Development Associate" image="https://placehold.co/400x300" setSelectedCard={() => { }} /></div>
                                <div className="mx-2"><PhotoCard name="Tony She" title="Business Development Associate" image="https://placehold.co/400x300" setSelectedCard={() => { }} /></div>
                            </Col>
                            <Col xs={12} lg={4}  >

                            </Col>

                        </Row>
                        <Row className='d-flex justify-content-center mx-auto d-lg-none d-xs-flex'>
                            <Col xs={12} className='d-flex justify-content-center'  >
                                <PhotoCard name="Amy Whinnett" title="Business Development Associate" image="https://placehold.co/400x300" setSelectedCard={() => { }} />

                            </Col>
                            <Col xs={12} className='d-flex justify-content-center'  >
                                <PhotoCard name="Tony She" title="Business Development Associate" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ActuaryRisk;