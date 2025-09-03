import React from 'react';

const SocialWellness: React.FC = () => {
    return (
        <div id="socialwellness">
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">
                    </div>
                </section>
                <section id="blog" className="blog pw" style={{ backgroundColor: '#0B3144' }}>
                    <div className="container" data-aos="fade-up">

                        <div className="row">

                            <div className="col">
                                <h2 className="mb-3 financial-h2 mb-5"> Social Wellness: The Core of Holistic Living
                                </h2>
                                <p style={{ color: '#FFF' }}>
                                    Purpose is the inner compass that drives fulfillment and meaning. It weaves
                                    together
                                    emotional, social, intellectual, occupational, spiritual, and environmental
                                    wellness.
                                    Purpose is the glue that holds the pillars together.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 my-3">
                                <h3>What We Deliver:</h3>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <h4>Purpose & Values Alignment</h4>
                                    <p>Helping employees connect their work to something bigger.</p>
                                </div>
                                <div className="col-12 col-md-4 d-none d-md-flex">
                                    <img src="/img/wellness/sw-topleft.png" alt="" srcSet=""
                                        className="img-fluid top-left" style={{ width: '49%' }} />
                                    <img src="/img/wellness/sw-topright.png" alt="" srcSet=""
                                        className="img-fluid top-right" style={{ width: '49%' }} />
                                </div>
                                <div className="col-12 col-md-4">
                                    <h4>Growth & Intellectual Wellness</h4>
                                    <p>Encouraging learning, curiosity, and creativity.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <h4>Spiritual & Environmental Exploration</h4>
                                    <p>Encouraging reflection, sustainability, and community service.</p>
                                </div>
                                <div className="col-12 col-md-4 d-none d-md-flex">
                                    <img src="/img/wellness/sw-bottomleft.png" alt="" srcSet=""
                                        className="img-fluid bottom-left" style={{ width: '49%' }} />
                                    <img src="/img/wellness/sw-bottomright.png" alt="" srcSet=""
                                        className="img-fluid bottom-right" style={{ width: '49%' }} />
                                </div>
                                <div className="col-12 col-md-4">
                                    <h4>Emotional & Social Wellness</h4>
                                    <p>Relationship-building, inner peace, and empathy.</p>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-12 col-md-6">
                                    <h3>Impact:</h3>
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
                                </div>
                                <div className="col-12 col-md-6">
                                    <h3 className="mx-4">Why it Matters:</h3>
                                    <p className="mx-4">Purpose turns jobs into journeys. It reduces burnout, builds
                                        belonging, and fosters leadership. Companies that invest in purpose create
                                        healthier, more resilient cultures.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SocialWellness;