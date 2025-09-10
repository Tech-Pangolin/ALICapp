import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhotoCard from '../../../components/utilities/PhotoCard';
import PhotoCardBio from '../../../components/utilities/PhotoCardBio';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import { teamInformation } from './teamInformation';

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
        <><ContentPageHeader src="/img/about/shared/bd-header.png" title="Executive Leadership" />
            <Container className="about-container executive-leadership-container">
                <Row className='photo-card-row'>
                    <Col xs={12} md={4} className='d-flex justify-content-lg-end'>
                        <PhotoCard layout="top" name={teamInformation.eric.name} title={teamInformation.eric.title} bio={teamInformation.eric.bio} setSelectedCard={setSelectedCard} image={teamInformation.eric.photo} alignment='start' />
                    </Col>
                    <Col xs={12} md={4} className='d-flex middle-col'>
                        <PhotoCard layout="top" name={teamInformation.ryan.name} title={teamInformation.ryan.title} bio={teamInformation.ryan.bio} setSelectedCard={setSelectedCard} image={teamInformation.ryan.photo} alignment='center' />
                    </Col>
                    <Col xs={12} md={4} className='d-flex justify-content-lg-start'>
                        <PhotoCard layout="top" name={teamInformation.paul.name} title={teamInformation.paul.title} bio={teamInformation.paul.bio} setSelectedCard={setSelectedCard} image={teamInformation.paul.photo} alignment='end' />
                    </Col>
                </Row>
                {(selectedBio && selectedBio?.layout === 'top') && <div className="row d-none d-lg-flex justify-content-center" ><PhotoCardBio selectedBio={selectedBio} setSelectedCard={setSelectedCard} /></div>}
                <Row className='photo-card-row'>
                    <Col xs={12} md={4} className='d-flex justify-content-lg-end'>
                        <PhotoCard layout="bottom" name={teamInformation.kam.name} bio={teamInformation.kam.bio} title={teamInformation.kam.title} setSelectedCard={setSelectedCard} image={teamInformation.kam.photo} alignment='start' />
                    </Col>
                    <Col xs={12} md={4} className='d-flex middle-col'>
                        <PhotoCard layout="bottom" name={teamInformation.courtney.name} bio={teamInformation.courtney.bio} title={teamInformation.courtney.title} setSelectedCard={setSelectedCard} image={teamInformation.courtney.photo} alignment='center' />
                    </Col>
                    <Col xs={12} md={4} className='d-flex justify-content-lg-start'>
                        <PhotoCard layout="bottom" name={teamInformation.trish.name} bio={teamInformation.trish.bio} title={teamInformation.trish.title} setSelectedCard={setSelectedCard} image={teamInformation.trish.photo} alignment='end' />
                    </Col>
                </Row>
                {(selectedBio && selectedBio?.layout === 'bottom') && <div className="d-none d-lg-block"><PhotoCardBio selectedBio={selectedBio} setSelectedCard={setSelectedCard} /></div>}
            </Container>
        </>
    );
};

export default ExecutiveLeadership;