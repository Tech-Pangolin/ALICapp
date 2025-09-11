import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GradientBox from '../../../components/homepage/GradientBox';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import TextPictureOverlap from '../../../components/shared/TextPictureOverlap';

const OurCommunities: React.FC = () => {
    return (     
    <>
    <ContentPageHeader src="/img/about/ourcommunities/header.png" title="Our Communities" />
        <Container className="about-container" style={{marginTop:"20px"}}>
       
            <GradientBox line1Text="Community is the center of what we do." line2Text="our mission is to build the future together."/>
            <Row>
                <Col>
                    <h6>community is our commitment</h6>
                    <p className='ms-5'>At Atlanta Life, our commitment to communities has always been at the heart of who we are. From our beginnings in Atlanta to expanding our reach in Chicago, Washington D.C., Los Angeles, Houston, New York City, Detroit, and beyond, we continue to walk alongside the people and neighborhoods we serve. Each city represents a unique story of partnership, progress, and purpose—united by our belief that thriving communities create thriving futures.</p>
                    <p className='ms-5'>For more than a century, we have stood as a partner in growth, bringing resources, opportunities, and innovative solutions to help individuals and families flourish. Whether it's hosting wellness events, providing financial literacy tools, or collaborating with schools and local organizations, our work reflects a deep responsibility to ensure every community we serve has the chance to prosper.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6 className='mt-5'>Serving a nation</h6>
                    <div className="subheader ms-5"><strong>Our Communities:</strong></div>
                    <ul className='ms-5'>
                        <li>Atlanta</li>
                        <li>Chicago</li>
                        <li>Washington D.C.</li>
                        <li>Los Angeles</li>
                        <li>Houston</li>
                        <li>New York City</li>
                        <li>Detroit</li>
                        <li><strong>More to come!</strong></li>
                    </ul>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h6 className='mt-5'>Growing together</h6>
                    <p className='ms-4'>We recognize that communities are constantly evolving—and so are we. By listening, learning, and creating strategies tailored to the needs of each city, we bring forward-thinking solutions that inspire progress.</p>
                    <ul className='ms-5'>
                        <li>Financial literacy programming to empower generations.</li>
                        <li>Health and wellness initiatives to strengthen families.</li>
                        <li>Local partnerships that fuel sustainable growth.</li>
                        <li>A national presence with a local touch in every city we serve.
                        </li>
                    </ul>
                    <div className="subheader ms-5"><strong>Our Mission in Motion</strong></div>
                    <p className='ms-4'>Every step we take is rooted in our mission to make communities stronger, healthier, and more prepared for the future. From Atlanta to Los Angeles, from Detroit to New York, we are dedicated to creating pathways for growth and ensuring that the people we serve have the tools to succeed. This is not the end of our journey—it is the continuation of a mission that advances with each new city, each new partnership, and each new opportunity to make a difference.</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                   <TextPictureOverlap />
                </Col>
            </Row>

        </Container>

    </>
    )
};

export default OurCommunities;