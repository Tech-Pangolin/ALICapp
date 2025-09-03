import React from 'react';

const MentalWellness: React.FC = () => {
    return (
        <div id="mentalwellness">
           <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
              

                {/* <!-- ======= Blog Section ======= --> */}
                <section id="blog" className="blog" style={{ backgroundColor: '#0B3144' }}>
                    <div className="container" data-aos="fade-up">

                        <div className="row">

                            <div className="col">
                                <h2 className="mb-3 financial-h2 mb-5"> Mental Wellness: Resilience That Drives Results</h2>
                            </div>
                            <div className="row">
                                <div className="col col-md-6">
                                    <p style={{ color: '#FFF' }}>Mental wellness affects every aspect of human performance.
                                        From
                                        engagement to innovation, retention to resilience, a healthy mind is essential
                                        to
                                        individual and organizational success.</p>
                                    <h3>What We Deliver:</h3>
                                    <div className="box">
                                        <h4>Workplace Mental Health Training</h4>
                                        <p>Practical support for managers and teams to recognize and respond to mental
                                            health needs.</p>
                                    </div>
                                    <div className="box">
                                        <h4>Access to Behavioral Health Resources</h4>
                                        <p>Tools for anxiety, depression, trauma, and emotional regulation.</p>
                                    </div>
                                    <div className="box">
                                        <h4>Benefit Strategy Integration</h4>
                                        <p>Aligning mental health coverage with proactive outreach and support .</p>
                                    </div>
                                    <div className="box">
                                        <h4>Culture Consulting</h4>
                                        <p>Helping organizations build safe, stigma-free environments for emotional
                                            wellbeing.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div>
                                        <img src="/img/wellness/mental-image.png" className="img-fluid mx-5" alt=""
                                            srcSet=""/>
                                    </div>
                                    <h3 className="mt-3 ms-5">Impact:</h3>
                                    <div className="row">
                                        <div className="col">
                                            <ul>
                                                <li>57% of global workers report burnout; mental health challenges cost
                                                    employers an estimated $200B annually.</li>
                                                <li>Unaddressed mental health issues lead to presenteeism, poor
                                                    productivity, and long-term disengagement.</li>
                                            </ul>
                                        </div>

                                    </div>
                                    <h3 className="mt-3  ms-5">Why It Matters:</h3>
                                    <div className="impact-text text-start  ms-5">
                                        When people feel emotionally safe and supported,
                                        they engage fully. Mental resilience leads to faster recovery, better
                                        decision-making, and greater loyalty.
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

export default MentalWellness;