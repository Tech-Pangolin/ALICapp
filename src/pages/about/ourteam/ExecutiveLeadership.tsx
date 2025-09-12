import React from 'react';
import {  Container, Modal, Row } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import { teamInformation } from './teamInformation';
import ExecutivePhotoCard from '../../../components/shared/ExecutivePhotoCard';

const ExecutiveLeadership: React.FC = () => {
    interface Bio {
        layout: string;
        [key: string]: any;
    }
    const [selectedBio, setSelectedBio] = React.useState<Bio | null>(null);
    function setSelectedCard(data: any) {
        setSelectedBio(data);
        setModalShow(true);
    }
    const [modalShow, setModalShow] = React.useState(false);
    
    return (
        <>
            <ContentPageHeader src="/img/about/shared/bd-header.png" title="Executive Leadership" />
       
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {selectedBio?.name} - {selectedBio?.title}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='leadership-modal-body'>
                    <div className="d-flex justify-content-center" >
                        <img src={selectedBio?.image} alt={selectedBio?.name} className='img-fluid modal-image' style={{ width: "200px" }} />
                    </div>

                    <h4 className='text-center'>{selectedBio?.name}</h4>

                    <div className="d-flex justify-content-center bio" >
                        <p style={{ width: "100%" }}>
                            {selectedBio?.bio}
                        </p>
                    </div>
                </Modal.Body>
           
            </Modal>
            <Container className="executive-leadership-container">
                <Row className='photo-card-row'>
                    <ExecutivePhotoCard name={teamInformation.eric.name} title={teamInformation.eric.title} bio={teamInformation.eric.bio} setSelectedCard={setSelectedCard} image={teamInformation.eric.photo} alignment='end' />
                    <ExecutivePhotoCard name={teamInformation.ryan.name} title={teamInformation.ryan.title} email={"messagehere@atl.life"} bio={teamInformation.ryan.bio} setSelectedCard={setSelectedCard} image={teamInformation.ryan.photo} alignment='center' />
                    <ExecutivePhotoCard name={teamInformation.paul.name} title={teamInformation.paul.title} bio={teamInformation.paul.bio} setSelectedCard={setSelectedCard} image={teamInformation.paul.photo} alignment='start' />
               </Row>
                <Row className='photo-card-row'>
                    <ExecutivePhotoCard name={teamInformation.kam.name} bio={teamInformation.kam.bio} title={teamInformation.kam.title} setSelectedCard={setSelectedCard} image={teamInformation.kam.photo} alignment='end' />
                    <ExecutivePhotoCard name={teamInformation.courtney.name} bio={teamInformation.courtney.bio} title={teamInformation.courtney.title} setSelectedCard={setSelectedCard} image={teamInformation.courtney.photo} alignment='center' />
                    <ExecutivePhotoCard name={teamInformation.trish.name} bio={teamInformation.trish.bio} title={teamInformation.trish.title} setSelectedCard={setSelectedCard} image={teamInformation.trish.photo} alignment='start' />
                </Row>
            </Container>
        </>
    );
};

export default ExecutiveLeadership;