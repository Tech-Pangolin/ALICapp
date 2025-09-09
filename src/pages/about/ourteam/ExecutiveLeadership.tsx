import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhotoCard from '../../../components/utilities/PhotoCard';
import PhotoCardBio from '../../../components/utilities/PhotoCardBio';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';

const ExecutiveLeadership: React.FC = () => {
    interface Bio {
        layout: string;
        [key: string]: any;
    }
    const [selectedBio, setSelectedBio] = React.useState<Bio | null>(null);
    function setSelectedCard(data: any) {
        setSelectedBio(data);
    }
    return (
        <>
            <ContentPageHeader src="/img/about/shared/bd-header.png" title="Executive Leadership" />
            <Container className="about-container executive-leadership-container">

                <Row className='photo-card-row'>
                    <Col xs={12} md={4}>
                        <PhotoCard layout="top" name="Eric L. Holoman" title="President & Chief Executive Officer" bio="Eric L. Holoman is the President and Chief Executive Officer of American Life Insurance Company (ALIC). He has over 20 years of experience in the insurance industry, specializing in life insurance and annuities. Prior to joining ALIC, Eric held various leadership roles at major insurance firms, where he was instrumental in driving growth and innovation. He holds a Bachelor's degree in Finance from the University of Texas and is a Chartered Life Underwriter (CLU)." setSelectedCard={setSelectedCard} image="https://placehold.co/400x300" alignment='start' />
                    </Col>
                    <Col xs={12} md={4}>
                        <PhotoCard layout="top" name="Ryan L. Smith" title="Executive Vice President" bio="Ryan L. Smith is the Executive Vice President of American Life Insurance Company (ALIC). With a strong background in finance and operations, Ryan has been pivotal in streamlining processes and enhancing productivity within the organization. He holds an MBA from Harvard Business School and has over 15 years of experience in the insurance sector." setSelectedCard={setSelectedCard} image="https://placehold.co/400x300" alignment='center' />
                    </Col>
                    <Col xs={12} md={4}>
                        <PhotoCard layout="top" name="Paul A. Miller" title="Corporate Secretary & Treasurer" bio="Paul A. Miller is the Corporate Secretary and Treasurer of American Life Insurance Company (ALIC). He has extensive experience in corporate governance and financial management. Paul holds a Juris Doctor degree from Yale Law School and has served in various legal and financial roles throughout his career." setSelectedCard={setSelectedCard} image="https://placehold.co/400x300" alignment='end' />
                    </Col>
                </Row>
                {(selectedBio && selectedBio?.layout === 'top') && <div className="d-none d-lg-block"><PhotoCardBio selectedBio={selectedBio} setSelectedCard={setSelectedCard} /></div>}
                <Row className='photo-card-row'>
                    <Col xs={12} md={4}>
                        <PhotoCard layout="bottom" name="Kam Harris" bio='More info coming soon' title="Vice President, Actuary" setSelectedCard={setSelectedCard} image="https://placehold.co/400x300" alignment='start' />
                    </Col>
                    <Col xs={12} md={4}>
                        <PhotoCard layout="bottom" name="Courtney Johnson" bio='More info coming soon' title="Vice President, Business Development" setSelectedCard={setSelectedCard} image="https://placehold.co/400x300" alignment='center' />
                    </Col>
                    <Col xs={12} md={4}>
                        <PhotoCard layout="bottom" name="Trish Payne" bio='More info coming soon' title="Vice President, Business Development" setSelectedCard={setSelectedCard} image="https://placehold.co/400x300" alignment='end' />
                    </Col>
                </Row>
                {(selectedBio && selectedBio?.layout === 'bottom') && <div className="d-none d-lg-block"><PhotoCardBio selectedBio={selectedBio} setSelectedCard={setSelectedCard} /></div>}
            </Container>
        </>
    );
};

export default ExecutiveLeadership;