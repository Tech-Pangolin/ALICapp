import React from 'react';
import './SolutionsSection.css';

const SolutionsSection: React.FC = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-layout">
        <div className="left-strip"></div>
        
        <div className="main-content">
          <h1 className="text-base text-large">
            WE ARE YOUR STRATEGIC REINSURANCE PARTNER<br />
            READY TO PROVIDE YOU WITH INDUSTRY LEADING<br />
            SOLUTIONS TAILORED FOR YOUR CLIENTELE
          </h1>
          
          <h2 className="text-base text-medium" style={{ marginBottom: '50px' }}>
            OUR SOLUTIONS
          </h2>
          
          <div className="solutions-content">
            <div className="solutions-text">
              <div>
                <h2 className="text-base text-medium">LIVE<span style={{ color: '#d4af37', fontWeight: '400', fontStyle: 'italic' }}>BALANCED</span>™</h2>
                <p className="text-small">
                    Today's top performing employees are seeking more than just a paycheck — they want healthier, more balanced lives. LivedBalanced™ is our health and productivity solution that empowers employers to deliver on this need. By integrating financial, physical, mental, and social wellness, LivedBalanced™ helps create healthier individuals who in turn strengthen their workplaces and enrich their communities.
                </p>
              </div>
              
              <div>
                <h2 className="text-base text-medium">LOCAL COMMUNITY ENGAGEMENT</h2>
                <p className="text-small">
                    With over 120 years of history rooted in service, we have an innate ability to connect with communities in meaningful ways. Our legacy of trust and presence allows us to engage authentically, opening doors for our partners to build stronger bonds with the people they serve. By leveraging this connection, we help organizations translate their commitment into action helping to strengthen relationships, inspire brand loyalty, and drive real progress where it matters most.  
                </p>
              </div>
              
              <div>
                <h2 className="text-base text-medium">FINANCIAL LITERACY EDUCATION</h2>
                <p className="text-small">
                    We are committed to equipping individuals and families with the knowledge and tools to build lasting financial security. Through tailored financial education programs and accessible resources, we empower people to make informed decisions about saving, investing, and protecting their futures. By closing knowledge gaps and fostering financial confidence, we not only strengthen households but also create pathways to generational wealth and community stability.  
                </p>
              </div>
              
              <div>
                <h2 className="text-base text-medium">PURPOSE ALIGNMENT SOLUTION</h2>
                <p className="text-small">
                    The Purpose Alignment Solution is designed to help individuals connect their daily work with deeper meaning and fulfillment. By fostering clarity of purpose, this solution inspires employees to approach each day with motivation and resilience. Employers who embrace Purpose Alignment cultivate more engaged, energized teams which create workplaces where people thrive. It also enhances the impact of internal BRGs and ERGs, giving these groups stronger alignment with organizational goals and greater capacity to empower their members. Tailored to fit the needs of each employer’s community, this solution ensures that empowerment extends beyond the workplace, uplifting employees, their families, and their neighbors alike.
                </p>
              </div>
            </div>
            
            <div className="solutions-images">
              <div className="image-container">
                <img 
                  src="/img/home/workout.png" 
                  alt="People working out and exercising"
                  className="solution-image"
                />
              </div>
              <div className="image-container">
                <img 
                  src="/img/home/seminar.png" 
                  alt="Business seminar or conference meeting"
                  className="solution-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
