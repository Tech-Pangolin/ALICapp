import React from 'react';

const PhysicalWellness: React.FC = () => {
    return (
        <div id="physicalwellness">
           <main id="main">

               {/* <!-- ======= Breadcrumbs ======= --> */}
               <section className="breadcrumbs" style={{ backgroundColor: "#FFF", padding: 0, minHeight: 0 }}>
                   <div className="container">
                    
                    </div>
                </section>

                {/* <!-- ======= Blog Section ======= --> */}
                <section id="blog" className="blog pw">
                    <div className="container" data-aos="fade-up">

                        <div className="row">

                            <div className="col">
                                <h1> Physical Wellness: Strength from the Inside Out</h1>
                                <p>Physical health supports productivity, recovery, energy, and resilience. Atlanta Life
                                    integrates wellness with benefit programs and return-to-work strategies to help
                                    people function and feel their best.</p>
                            </div>


                        </div>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <h3>What We Deliver:</h3>
                            </div>
                            <div className="col-12">
                                <img src="assets/img/wellness/iconrow1.png" className="img-fluid" alt="" srcSet=""/>
                            </div>
                            <div className="col-6 my-3">
                                <h4>Disability & Return-to-Work Programs</h4>
                                <p>Streamlined, compassionate approaches to keeping employees engaged through
                                    transitions.</p>
                            </div>
                            <div className="col-6  my-3">
                                <h4>Preventive Wellness Education</h4>
                                <p>Chronic condition management, sleep hygiene, ergonomic awareness, and nutrition.</p>
                            </div>
                            <div className="col-12  my-3">
                                <img src="assets/img/wellness/iconrow2.png" className="img-fluid" alt="" srcSet=""/>
                            </div>
                            <div className="col-6 my-3">
                                <h4>Community Health Activations</h4>
                                <p>Mobile clinics, wellness screenings, and education events.</p>
                            </div>
                            <div className="col-6">
                                <h4>Insurance-Integrated Wellness</h4>
                                <p>Aligning physical wellbeing with the tools and protections employees already have.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h3>Impact:</h3>
                                <div className="d-flex justify-content-center"><img src="/img/wellness/chart1.png"
                                        alt="" srcSet="" className="img-fluid"/></div>
                                <p className="my-3 text-center">of employers report that physical health directly affects
                                    productivity and absenteeism.</p>
                                <div className="d-flex justify-content-center"><img src="/img/wellness/chart2.png"
                                        alt="" className="img-fluid"/></div>
                                <p className="my-3 text-center">A Johns Hopkins study found that structured early
                                    return-to-work programs can reduce lost workday cases by 55%, cut lost-time claims
                                    by 73%, and decrease claim-related costs accordingly.</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="box">
                                    <h4 className="mb-3"><img src="/img/wellness/pageicon.png" alt=""
                                            className="img-fluid"/> Why it Matters:</h4>
                                    <p className="mx-4">Investing in physical health is not only the right thing to do, it's
                                        a performance multiplier. Healthy employees bring energy, focus, and fewer
                                        claims. It's a foundational component of workforce sustainability.</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </section>
            </main>
        </div>
    );
};

export default PhysicalWellness;