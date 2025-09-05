import React from 'react';
import { Container, Row } from "react-bootstrap";
import './CardsSection.css';
import SingleCard from './SingleCard';

const CardsSection: React.FC = () => {
  return (
    <section className="cards-section">
      <Container>
        <Row className="justify-content-center">
          <div className="cards-title-container">
            <h2 className="fw-bold text-uppercase">
              A UNIQUE INSURANCE COMPANY WHOSE LEGACY <br /> & EXPERTISE WILL SECURE YOUR FUTURE
            </h2>
          </div>
        </Row>
        <Row className="cards-content-row">
          <SingleCard
            period="PAST"
            imageSrc="/img/home/past.png"
            imageAlt="Family on sofa representing legacy and heritage"
            description="Since 1905, Atlanta Life has stood as a beacon of opportunity and resilience for all American communities."
          />
          <SingleCard
            period="PRESENT"
            imageSrc="/img/home/present.png"
            imageAlt="Office meeting representing current operations and collaboration"
            description="Today, we are redefining insurance, expanding capabilities, forging partnerships, and driving impact for generations to come."
          />
          <SingleCard
            period="FUTURE"
            imageSrc="/img/home/future.png"
            imageAlt="Office hallway representing future innovation and progress"
            description="The future of Atlanta Life is one of innovation, growth, and lasting impact. Together, we can achieve anything."
          />
        </Row>
      </Container>
    </section>
  );
};

export default CardsSection;
