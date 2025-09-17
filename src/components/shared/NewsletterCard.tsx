import React from 'react';
import './NewsletterCard.css';
import  { Col, Card } from 'react-bootstrap';

const NewsletterCard: React.FC<{image: string, date: string, url?: string, align?: string}> = ({image, date, url, align}) => {
    return (
        <Col xs={12} md={4} className={`d-flex justify-content-center justify-content-lg-${align} mb-4`}>
            <Card className='newsletter-card my-3 '>
                <Card.Img variant="top" src={image} alt={date} className='image img-fluid' /> {/* Display the image */}
                <div className='gradient-top-border'></div>
                <Card.Body className={`body card-body`}>
                    <Card.Link href={url ? url : '#'} target="_blank" rel="noopener noreferrer">
                        {date}
                    </Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default NewsletterCard;