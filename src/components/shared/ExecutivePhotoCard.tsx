import './ExecutivePhotoCard.css';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

interface PhotoCardProps {
    name: string;
    title: string;
    image: string;
    email?: string;
    bio?: string;
    alignment?: 'start' | 'center' | 'end';
    setSelectedCard: (data: any) => void;
    layout?: 'top' | 'bottom';
    isExecutive?: boolean;
}

const ExecutivePhotoCard: React.FC<PhotoCardProps> = ({ name, title, image, bio, email = '', alignment, setSelectedCard, layout,  }) => {  

    function expandBio() {
        setSelectedCard({ name, title, image, bio, alignment, layout });     
    }

    //temporary image until we have bios and images
    image = "/img/comingsoon.png";
    return (
        <Col xs={12} md={4} className={`d-flex justify-content-center justify-content-lg-${alignment} mb-4`}>
            <Card className='photo-card my-3 '>
                <Card.Img variant="top" src={image} alt={name} className='image img-fluid' /> {/* Display the image */}
                <div className='gradient-top-border'></div>
                <Card.Body className={`body card-body`} onClick={expandBio}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{title}</Card.Text>
                    {email && <Card.Text>{email}</Card.Text>}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ExecutivePhotoCard;