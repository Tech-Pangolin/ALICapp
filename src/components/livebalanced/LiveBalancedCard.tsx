import React from 'react';
import Card from 'react-bootstrap/Card';
import './LiveBalancedCard.css';

interface LiveBalancedCardProps {
    text: string;
    url: string;
    imageSrc: string;
}

const LiveBalancedCard: React.FC<LiveBalancedCardProps> = ({ text, url, imageSrc }) => {
    return (
        <Card className='custom-card mb-3' >
            <Card.Img variant="top" src={imageSrc} alt="Card image" />
            <div className="gradient-top-border"></div>
            <Card.Body>
                <Card.Text>{text}</Card.Text>
                <div className='d-flex justify-content-center'>
                    <Card.Link href={url}>
                    Learn More
                </Card.Link>
                </div>

            </Card.Body>
        </Card>
    );
};

export default LiveBalancedCard;