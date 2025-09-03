import React from "react";

const LiveBalanced: React.FC = () => {
  return (
    <div id="livebalanced">
      
      {/* ======= Main ======= */}
      <main id="main">
        {/* ======= LiveBalanced Hero Section ======= */}
        <section id="livebalanced-hero" className="hero d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 d-flex flex-column justify-content-center">
                <div className="hero-content" data-aos="fade-up">
                  <h1 className="hero-title">
                    <span className="hero-title-main">ATLANTA LIFE</span>
                    <span className="hero-title-accent"> | LiveBalanced</span>
                  </h1>
                  <h2
                    className="hero-subtitle"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Introducing{" "}
                    <span className="hero-subtitle-accent">LiveBalanced</span>: A
                    Holistic Approach to Wellbeing
                  </h2>
                  <p
                    className="hero-description"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    At Atlanta Life, we believe wellness is multi-dimensional,
                    embracing mind, body, finances, and purpose. That's why our{" "}
                    <span className="hero-description-accent">
                      Holistic Wellness
                    </span>{" "}
                    approach empowers individuals, families, and communities to
                    thrive in every aspect of life.
                  </p>
                </div>

                <div className="hero-content-mobile" data-aos="fade-up">
                  <h1 className="hero-title">
                    <span className="hero-title-main">ATLANTA LIFE</span>
                    <span className="hero-title-accent">LiveBalanced</span>
                  </h1>
                  <h2
                    className="hero-subtitle"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Introducing{" "}
                    <span className="hero-subtitle-accent">LiveBalanced</span>:
                    <br />A Holistic Approach to Wellbeing
                  </h2>
                  <p
                    className="hero-description"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    At Atlanta Life, we believe wellness is multi-dimensional,
                    embracing mind, body, finances, and purpose. That's why our{" "}
                    <span className="hero-description-accent">
                      Holistic Wellness
                    </span>{" "}
                    approach empowers individuals, families, and communities to
                    thrive in every aspect of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ... CONTINUE with the other sections (Four Pillars, Financial Wellness, Physical Wellness, etc.) ... */}

      </main>
    </div>
  );
};

export default LiveBalanced;
