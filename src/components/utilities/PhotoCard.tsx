import React from 'react';
import { Card } from 'react-bootstrap';

interface PhotoCardProps {
    name: string;
    title: string;
    image: string; // New image property
}

const PhotoCard: React.FC<PhotoCardProps> = ({ name, title, image }) => {
    return (
        <Card className='photo-card my-3'>
            <Card.Img variant="top" src={image} alt={name} className='image' /> {/* Display the image */}
            <div className='gradient-top-border'></div>
            <Card.Body className='body'>
                
                <Card.Title>{name}</Card.Title>
                <Card.Text>{title}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PhotoCard;