import React from 'react';
import { Card } from 'react-bootstrap';

interface PhotoCardProps {
    name: string;
    title: string;
    image: string; // New image property
}

const PhotoCard: React.FC<PhotoCardProps> = ({ name, title, image }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} alt={name} /> {/* Display the image */}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{title}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PhotoCard;