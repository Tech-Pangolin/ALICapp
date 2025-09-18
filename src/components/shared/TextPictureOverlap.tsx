import React from 'react';
import './TextPictureOverlap.css';
import { Col, Container, Row } from 'react-bootstrap';

const TextPictureOverlap: React.FC = () => {
    return (
        <Container className=''>
            <Row className='d-none d-lg-flex text-picture-overlap-container'>
                <Col lg={8}>
                    <div
                        className='gradient-box my-4'
                    >
                        <h6 className='text-header'>See Our Community Engagement Activities</h6>
                        <p>We connect with communities in ways that are genuine, intentional, and rooted in real understanding - creating relationships that last and make a difference.  We connect with communities in need.</p>
                        <div className="pb-5"><a href="/about/ourstory#communityengagement" className='learn-more-link my-5'>Visit Community Engagement</a></div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='image-container my-4'>
                        <img
                            src="/img/about/ourcommunities/communityengagement.png"
                            alt="Community Engagement"
                            className='overlap-image'
                        />
                    </div>
                </Col>
            </Row>
            <Row className='d-xs-flex d-md-flex d-lg-none text-picture-overlap-container-mobile'>
                <Col xs={12}>
                    <div
                        className='gradient-box my-4' 
                    >
                        <h6 className='text-header'>See Our Community Engagement Activities</h6>
                        <p>We connect with communities in ways that are genuine, intentional, and rooted in real understanding - creating relationships that last and make a difference.  We connect with communities in need.</p>
                        <div className="pb-5"><a href="/about/ourstory#communityengagement" className='learn-more-link my-5'>Visit Community Engagement</a></div>
                    </div>
                </Col>
                <Col xs={12}>
                   
                        <img
                            src="/img/about/ourcommunities/communityengagement.png"
                            alt="Community Engagement"
                            className='img-fluid'
                        />
                   
                </Col>
            </Row>
           
        </Container>
    );
};

export default TextPictureOverlap;