import React from 'react';
import './TextPictureOverlap.css';
import { Col, Container, Row } from 'react-bootstrap';

const TextPictureOverlap: React.FC = () => {
    return (
        <Container className='text-picture-overlap-container'>
            <Row className='d-none d-lg-flex'>
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
            <Row className='d-xs-flex d-md-flex d-lg-none'>
                <Col xs={12} md={12}>
                    <div
                        className='gradient-box my-4' style={{height:"100%"}}
                    >
                        <h6 className='text-header'>See Our Community Engagement Activities</h6>
                        <p>We connect with communities in ways that are genuine, intentional, and rooted in real understanding - creating relationships that last and make a difference.  We connect with communities in need.</p>
                        <div className="pb-5"><a href="/about/ourstory#communityengagement" className='learn-more-link my-5'>Visit Community Engagement</a></div>
                    </div>
                </Col>
                <Col xs={12} md={12}>
                    <div className='image-container my-4'>
                        <img
                            src="/img/about/ourcommunities/communityengagement.png"
                            alt="Community Engagement"
                            className='img-fluid'
                        />
                    </div>
                </Col>
            </Row>
           
        </Container>
    );
};

export default TextPictureOverlap;