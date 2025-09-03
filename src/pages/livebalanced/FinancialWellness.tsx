import React from 'react';

const FinancialWellness: React.FC = () => {
    return (
       <div id="financial-wellness">
           <main id="main">

              
                <section className="breadcrumbs">
                    <div className="container">

                    

                    </div>
                </section>
              
                <section id="blog" className="blog" style={{ backgroundColor: '#0B3144' }}>
                    <div className="container" data-aos="fade-up">

                        <div className="row">

                            <div className="col">
                                <h2 className="mb-3 financial-h2 mb-5"> Financial Wellness: Stability That Builds Legacies
                                </h2>
                            </div>
                            <div className="row">
                                <div className="col col-md-6">
                                    <p style={{ color: '#FFF' }}>Financial wellness is foundational to holistic wellbeing.
                                        Without
                                        economic stability,
                                        stress accumulates, long-term planning stalls, and health outcomes deteriorate.
                                        Atlanta
                                        Life empowers individuals, families, and employers with tools and strategies to
                                        build
                                        financial confidence and generational wealth.</p>
                                    <h3>What We Deliver:</h3>
                                    <div className="legacy-box">
                                        <h4>Legacy-Building through Life Insurance</h4>
                                        <p>Protection strategies that support long-term goals and multigenerational
                                            security.</p>
                                    </div>
                                    <div className="financial-box">
                                        <h4>Financial Literacy Education</h4>
                                        <p>Budgeting, credit building, saving, debt reduction, and retirement planning.
                                        </p>
                                    </div>
                                    <div className="reinsurance-box">
                                        <h4>Reinsurance That Reinvests</h4>
                                        <p>Innovative financial models allowing organizations to redirect insurance
                                            savings
                                            into employee wellness and community initiatives.</p>
                                    </div>
                                    <div className="equity-box">
                                        <h4>Equity-Centered Access</h4>
                                        <p>Programs tailored for underserved communities to close the financial
                                            knowledge
                                            and resource gap.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div>
                                        <img src="/img/wellness/wellness-img.png" className="img-fluid mx-5" alt=""
                                            srcSet=""/>
                                    </div>
                                    <h3 className="mt-3 ms-5">Impact:</h3>
                                    <div className="row">
                                        <div className="col">
                                            <div className="value">31%</div>
                                            <h4 className="text-center">Financially Healthy</h4>
                                            <div className="impact-text">
                                                Only 31% of U.S. adults are considered financially healthy.
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="value"> &plusmn;</div>
                                            <h4 className="text-center">Financial Stress</h4>
                                            <div className="impact-text">
                                                Employees under financial stress are more likely to experience
                                                absenteeism,
                                                mental health struggles, and poor physical health.
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="mt-3  ms-5">Why It Matters:</h3>
                                    <div className="impact-text text-start  ms-5">
                                        Financial wellness is not just about income, it's about stability, choices, and
                                        legacy. When employees have financial confidence, they make better health
                                        decisions, stay engaged at work, and invest in their future.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default FinancialWellness;