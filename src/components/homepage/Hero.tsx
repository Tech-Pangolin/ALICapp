import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="d-flex align-items-center hero">
      <Container>
        <Row>
          {/* Left Column - Photo Collage */}
          <Col lg={5} className="d-flex align-items-center justify-content-center" data-aos="fade-right" data-aos-delay="200">
            <div className="hero-graphic">
              <img 
                src="/img/home/graphiclogo.png" 
                alt="Atlanta Life Heritage Collage" 
                className="img-fluid"
              />
            </div>
          </Col>

          {/* Right Column - Text Content */}
          <Col lg={7} className="d-flex flex-column justify-content-center" data-aos="fade-left" data-aos-delay="400">
            <div className="hero-content">
              <h1 className="hero-title-main">
                HONORING THE PAST &<br />
                BUILDING THE FUTURE<br />
                TOGETHER.
              </h1>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
