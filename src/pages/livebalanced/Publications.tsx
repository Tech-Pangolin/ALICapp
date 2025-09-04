import React from 'react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="publications" style={{paddingTop:'135px'}} >
      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Our Publications</h2>
          <p>Stay informed with our latest newsletters and resources</p>
        </header>

        <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table-dark" style={{ backgroundColor: '#053043' }}>
                  <tr>
                    <th style={{ backgroundColor: '#053043' }}>Publication Date</th>
                    <th style={{ backgroundColor: '#053043' }}>Newsletter Title</th>
                    <th style={{ backgroundColor: '#053043' }}>Download</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="newsletter-row">
                    <td>December 15, 2024</td>
                    <td>Atlanta Life Quarterly Newsletter - Q4 2024</td>
                    <td><a href="newsletters/ALIC_Newsletter_Q4_2024.pdf" className="btn btn-primary btn-sm"
                      target="_blank"><i className="bi bi-eye"></i> View</a></td>
                  </tr>
                  <tr className="resource-row">
                    <td colSpan={3}>
                      <div className="resource-links">
                        <strong>Related Resources:</strong>
                        <ul className="list-unstyled mb-0">
                          <li><i className="bi bi-link-45deg"></i> <a href="flyers/ALIC_2024_StrategicBenefitsPartner.pdf"
                            target="_blank">Strategic Benefits Partner Guide</a></li>
                          <li><i className="bi bi-link-45deg"></i> <a href="flyers/ALIC_2024_Reinsurer.pdf"
                            target="_blank">Reinsurance Solutions Overview</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr className="newsletter-row">
                    <td>December 1, 2024</td>
                    <td>LiveBalanced Wellness Update - December 2024</td>
                    <td><a href="newsletters/LiveBalanced_Update_Dec_2024.pdf" className="btn btn-primary btn-sm"
                      target="_blank"><i className="bi bi-eye"></i> View</a></td>
                  </tr>
                  <tr className="resource-row">
                    <td colSpan={3}>
                      <div className="resource-links">
                        <strong>Related Resources:</strong>
                        <ul className="list-unstyled mb-0">
                          <li><i className="bi bi-link-45deg"></i> <a href="healthandproductivity.html">Health &
                            Productivity Solutions</a></li>
                          <li><i className="bi bi-link-45deg"></i> <a href="wellness.html">Financial Wellness Programs</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr className="newsletter-row">
                    <td>November 15, 2024</td>
                    <td>Community Impact Report - November 2024</td>
                    <td><a href="newsletters/Community_Impact_Nov_2024.pdf" className="btn btn-primary btn-sm"
                      target="_blank"><i className="bi bi-eye"></i> View</a></td>
                  </tr>
                  <tr className="resource-row">
                    <td colSpan={3}>
                      <div className="resource-links">
                        <strong>Related Resources:</strong>
                        <ul className="list-unstyled mb-0">
                          <li><i className="bi bi-link-45deg"></i> <a href="childrensbooks.html">Essential Reads for Every
                            Child</a></li>
                          <li><i className="bi bi-link-45deg"></i> <a href="flyers/ALIC_2024_Partnership.pdf"
                            target="_blank">Partnership Opportunities</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr className="newsletter-row">
                    <td>November 1, 2024</td>
                    <td>Reinsurance Market Insights - November 2024</td>
                    <td><a href="newsletters/Reinsurance_Insights_Nov_2024.pdf" className="btn btn-primary btn-sm"
                      target="_blank"><i className="bi bi-eye"></i> View</a></td>
                  </tr>
                  <tr className="resource-row">
                    <td colSpan={3}>
                      <div className="resource-links">
                        <strong>Related Resources:</strong>
                        <ul className="list-unstyled mb-0">
                          <li><i className="bi bi-link-45deg"></i> <a href="flyers/ALIC_2024_CapabilityStatement.pdf"
                            target="_blank">Capability Statement</a></li>
                          <li><i className="bi bi-link-45deg"></i> <a href="flyers/ALIC_2024_OnePage.pdf"
                            target="_blank">One Page Brief</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr className="newsletter-row">
                    <td>October 15, 2024</td>
                    <td>Atlanta Life Quarterly Newsletter - Q3 2024</td>
                    <td><a href="newsletters/ALIC_Newsletter_Q3_2024.pdf" className="btn btn-primary btn-sm"
                      target="_blank"><i className="bi bi-eye"></i> View</a></td>
                  </tr>
                  <tr className="resource-row">
                    <td colSpan={3}>
                      <div className="resource-links">
                        <strong>Related Resources:</strong>
                        <ul className="list-unstyled mb-0">
                          <li><i className="bi bi-link-45deg"></i> <a href="index.html#team">Meet Our Team</a></li>
                          <li><i className="bi bi-link-45deg"></i> <a href="index.html#platform">Our Platform</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr className="newsletter-row">
                    <td>October 1, 2024</td>
                    <td>Financial Wellness Focus - October 2024</td>
                    <td><a href="newsletters/Financial_Wellness_Oct_2024.pdf" className="btn btn-primary btn-sm"
                      target="_blank"><i className="bi bi-eye"></i> View</a></td>
                  </tr>
                  <tr className="resource-row">
                    <td colSpan={3}>
                      <div className="resource-links">
                        <strong>Related Resources:</strong>
                        <ul className="list-unstyled mb-0">
                          <li><i className="bi bi-link-45deg"></i> <a href="wellness.html">Wellness Programs</a></li>
                          <li><i className="bi bi-link-45deg"></i> <a href="livebalanced.html">LiveBalanced Overview</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>

  );
};

export default Publications;