import React from 'react';
import './SolutionsSection.css';

const SolutionsSection: React.FC = () => {
  return (
    <section className="container" id="solutions">
      <div className="solutions-layout">
        <div className="left-strip"></div>

        <div className="row">
          <div className="col-12">
            {/* <h2 className="fw-bold text-uppercase ms-2 ms-lg-5"> */}
             <h3 className="fw-semibold ms-2 ms-lg-5 my-5">
              WE ARE YOUR STRATEGIC REINSURANCE PARTNER<br />
              READY TO PROVIDE YOU WITH INDUSTRY LEADING<br />
              SOLUTIONS TAILORED FOR YOUR CLIENTELE
            </h3>
            <h3 className="fw-semibold ms-2 ms-lg-5 my-5">
              OUR SOLUTIONS
            </h3>

          </div>
          <div className="col-12 col-lg-6 ms-2 ms-lg-5">
            <div>
              <h3 className="fw-semibold pb-20">LIVE<span style={{ color: '#d4af37', fontWeight: '400', fontStyle: 'italic' }}>BALANCED</span>™</h3>
              <p className="fs-6 text-small">
                Today's top performing employees are seeking more than just a paycheck — they want healthier, more balanced lives. LivedBalanced™ is our health and productivity solution that empowers employers to deliver on this need. By integrating financial, physical, mental, and social wellness, LivedBalanced™ helps create healthier individuals who in turn strengthen their workplaces and enrich their communities.
              </p>
            </div>

            <div>
              <h3 className="fw-semibold pb-20">LOCAL COMMUNITY ENGAGEMENT</h3>
              <p className="fs-6 text-small">
                With over 120 years of history rooted in service, we have an innate ability to connect with communities in meaningful ways. Our legacy of trust and presence allows us to engage authentically, opening doors for our partners to build stronger bonds with the people they serve. By leveraging this connection, we help organizations translate their commitment into action helping to strengthen relationships, inspire brand loyalty, and drive real progress where it matters most.
              </p>
            </div>

            <div>
              <h3 className="fw-semibold pb-20">FINANCIAL LITERACY EDUCATION</h3>
              <p className="fs-6 text-small">
                We are committed to equipping individuals and families with the knowledge and tools to build lasting financial security. Through tailored financial education programs and accessible resources, we empower people to make informed decisions about saving, investing, and protecting their futures. By closing knowledge gaps and fostering financial confidence, we not only strengthen households but also create pathways to generational wealth and community stability.
              </p>
            </div>

            <div>
              <h3 className="fw-semibold pb-20">PURPOSE ALIGNMENT SOLUTION</h3>
              <p className="fs-6 text-small">
                The Purpose Alignment Solution is designed to help individuals connect their daily work with deeper meaning and fulfillment. By fostering clarity of purpose, this solution inspires employees to approach each day with motivation and resilience. Employers who embrace Purpose Alignment cultivate more engaged, energized teams which create workplaces where people thrive. It also enhances the impact of internal BRGs and ERGs, giving these groups stronger alignment with organizational goals and greater capacity to empower their members. Tailored to fit the needs of each employer's community, this solution ensures that empowerment extends beyond the workplace, uplifting employees, their families, and their neighbors alike.
              </p>
            </div>

          </div>
          <div className="col-12 col-lg-3 ms-2 ms-lg-5  d-flex-column justify-content-end">

            <div className="image-container my-5">
              <img
                src="/img/home/workout.png"
                alt="People working out and exercising"
                className="img-fluid"
              />
            </div>
            <div className="image-container py-5  my-5">
              <img
                src="/img/home/seminar.png"
                alt="Business seminar or conference meeting"
                className="img-fluid"
              />
            </div>
          </div>
          </div>
        </div>
    </section>
  );
};

export default SolutionsSection;
