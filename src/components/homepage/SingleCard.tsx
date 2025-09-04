import React from 'react';
import { Col } from "react-bootstrap";

interface SingleCardProps {
  period: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

const SingleCard: React.FC<SingleCardProps> = ({ period, imageSrc, imageAlt, description }) => {
  return (
    <Col lg={4} md={12} className="single-card-column">
      <div className="single-card-content">
        <div className="single-card-image-container">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="single-card-image"
          />
        </div>
        <h3 className="single-card-header">{period}</h3>
        <p className="single-card-description">{description}</p>
        <img 
          src="/img/home/gradient-bar.png" 
          alt="Card separator" 
          className="single-card-separator"
        />
      </div>
    </Col>
  );
};

export default SingleCard;
