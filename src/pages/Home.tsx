import Timeline from "../components/homepage/Timeline";
import Hero from "../components/homepage/Hero";
import CelebrateSection from "../components/homepage/CelebrateSection";
import GradientBox from "../components/homepage/GradientBox";
import CardsSection from "../components/homepage/CardsSection";
import { useState } from "react";

const Home = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {/* ======= Hero Section ======= */}
      <Hero />

      {/* ======= Celebrate Section ======= */}
      <CelebrateSection setExpanded={setExpanded} expanded={expanded} />

      {/* ======= Timeline Section ======= */}
      {expanded && <Timeline setExpanded={setExpanded} expanded={expanded} />}

      {/* ======= Gradient Box Section ======= */}
      <GradientBox />

      {/* ======= Cards Section ======= */}
      <CardsSection />

      {/* ======= About Section ======= */}
      <section id="about" className="about">
        {/* <Container data-aos="fade-up" style={{ marginBottom: "20px" }}>
          <Row className="gx-0">
            <Col lg={6} className="d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div className="content">
                <h3>What we do for our customers</h3>
                <h2>We Empower Communities for Generational Security</h2>
                <p>
                  At Atlanta Life, we believe in the power of financial literacy to transform lives and create lasting
                  security. By offering a broad spectrum of insurance and reinsurance solutions, we provide the
                  foundation for financial empowerment, ensuring individuals, families, and organizations can thrive for
                  generations.
                </p>
              </div>
            </Col>

            <Col lg={6} className="d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
              <div className="video-container">
                <iframe
                  src="https://drive.google.com/file/d/15N6wx6Bl6cBOGdr7ErsQc4fJZOTSUB6S/preview"
                  allow="autoplay"
                  title="About Video"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>*/}
      </section> 
      {/* End About */}

      {/* ======= Values Section ======= */}
      <section id="values" className="values">
        {/* <Container data-aos="fade-up">
          <header className="section-header">
            <h2>Why Partner With Us</h2>
            <p>US-Based Coverage Provider, Serving a Nationwide Audience</p>
          </header>

          <Row>
            <Col lg={3} data-aos="fade-up" data-aos-delay="200">
              <div className="box">
                <img src="/img/values-1.png" className="img-fluid" alt="Trusted Benefits Provider" />
                <h3>Trusted Benefits Provider</h3>
                <p>
                  With over a century of service, we offer essential coverage and help insurers and governments manage
                  risk effectively.
                </p>
              </div>
            </Col>

            <Col lg={3} data-aos="fade-up" data-aos-delay="400">
              <div className="box">
                <img src="/img/values-2.png" className="img-fluid" alt="Expert in Risk Sharing" />
                <h3>Expert in Risk Sharing</h3>
                <p>
                  Our team crafts customized risk management solutions and tailored strategies to safeguard long-term
                  security.
                </p>
              </div>
            </Col>

            <Col lg={3} data-aos="fade-up" data-aos-delay="600">
              <div className="box">
                <img src="/img/values-3.png" className="img-fluid" alt="Committed to the Community" />
                <h3>Committed to the Community</h3>
                <p>
                  Beyond business, we are deeply committed to the well-being of the communities we serve across the
                  nation.
                </p>
              </div>
            </Col>

            <Col lg={3} data-aos="fade-up" data-aos-delay="800">
              <div className="box">
                <img src="/img/values-3.png" className="img-fluid" alt="Supplier Diversity" />
                <h3>Solution for Supplier Diversity Spend</h3>
                <p>
                  As a certified Minority Business Enterprise (MBE), we provide partners a unique opportunity to achieve
                  diversity goals.
                </p>
              </div>
            </Col>
          </Row>
        </Container> */}
      </section>
      {/* End Values */}

      {/* 🚀 You can continue this pattern for Counts, Features, Team, Contact, etc. */}
    </>
  );
};

export default Home;
