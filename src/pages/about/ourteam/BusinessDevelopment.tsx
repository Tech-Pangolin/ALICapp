import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import PhotoCard from '../../../components/shared/PhotoCard';

const BusinessDevelopment: React.FC = () => {
    return (
        <> 
        <ContentPageHeader src="/img/about/shared/bd-header.png" title="Business Development" />
        <Container id="business-development">
           
            <Row>
                <Col xs={12} sm={12} md={8} >
                    <h4>About Business Development</h4>
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
                    <h4>Our Business Development Team</h4>
                </Col>
            </Row>
            <Row style={{width:'75%'}} className='d-flex justify-content-center mx-auto'>
                <Col xs={12} lg={6} className='d-flex justify-content-md-end'>
                    <PhotoCard name="Courtney Johnson" title="Vice President, Business Development" bio={"More information coming soon"} image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                </Col>
                <Col xs={12} lg={6}  >
                    <PhotoCard name="Trish Payne" title="Vice President, Business Development" bio={"More information coming soon"} image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                </Col>
                <Col xs={12} lg={6} className='d-flex justify-content-md-end' >
                    <PhotoCard name="Paige Fenn" title="Director, Community Affairs" bio={"More information coming soon"} image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                </Col>
                <Col xs={12} lg={6}  >
                    <PhotoCard name="Arielle Griffin" title="Business Development Associate" bio={"More information coming soon"} image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                </Col>
                <Col xs={12} lg={6} className='d-flex justify-content-md-end' >
                    <PhotoCard name="Michael Fields" title="Business Development Associate" bio={"More information coming soon"} image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                </Col>
                <Col xs={12} lg={6}  >
                    <PhotoCard name="De'Andre Williams" title="Business Development Analyst" bio={"More information coming soon"} image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default BusinessDevelopment;