import React from "react";
import 'react-circular-progressbar/dist/styles.css';


const LiveBalanced: React.FC = () => {
      return (
        <div id="livebalanced">

            <main id="main">
                {/* 
                <!-- ======= LiveBalanced Hero Section ======= --> */}
                <section id="livebalanced-hero" className="hero d-flex align-items-center" style={{ backgroundImage: 'url(/img/hero-bg1.png)', backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 d-flex flex-column justify-content-center">
                                <div className="hero-content" data-aos="fade-up">
                                    <h1 className="hero-title">
                                        <span className="hero-title-main">ATLANTA LIFE</span>
                                        <span className="hero-title-accent"> | LiveBalanced</span>
                                    </h1>
                                    <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
                                        Introducing <span className="hero-subtitle-accent">LiveBalanced</span>: A Holistic
                                        Approach to Wellbeing
                                    </h2>
                                    <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
                                        At Atlanta Life, we believe wellness is multi-dimensional, embracing mind, body,
                                        finances, and purpose. That's why our <span
                                            className="hero-description-accent">Holistic
                                            Wellness</span> approach empowers individuals, families, and communities to
                                        thrive in every aspect of life.
                                    </p>
                                </div>
                                <div className="hero-content-mobile" data-aos="fade-up">
                                    <h1 className="hero-title">
                                        <span className="hero-title-main">ATLANTA LIFE</span>
                                        <span className="hero-title-accent">LiveBalanced</span>
                                    </h1>
                                    <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
                                        Introducing <span className="hero-subtitle-accent">LiveBalanced</span>:
                                        <br />A Holistic Approach to Wellbeing
                                    </h2>
                                    <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
                                        At Atlanta Life, we believe wellness is multi-dimensional, embracing mind, body,
                                        finances, and purpose. That's why our <span
                                            className="hero-description-accent">Holistic
                                            Wellness</span> approach empowers individuals, families, and communities to
                                        thrive in every aspect of life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ======= Four Pillars Section ======= --> */}
                <section id="four-pillars" className="py-5">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="section-title text-start mb-5">
                                    The Four Pillars of LiveBalanced
                                </h2>
                                <div className="container livebalanced-panel">
                                    <div className="row d-none d-md-flex">
                                        <div className="col-2 d-flex flex-column justify-content-between">
                                            <div>
                                                <h3 className="pillar-title financial-wellness">Financial Wellness</h3>
                                                <p className="pillar-description">Stability That Builds Legacies</p>
                                            </div>
                                            <div>
                                                <h3 className="pillar-title">Social Wellness</h3>
                                                <p className="pillar-description">The Core of Holistic Living</p>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="d-flex mb-1">
                                                <div className="chart-piece tl"></div>
                                                <div className="chart-piece tr"></div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="chart-piece bl"></div>
                                                <div className="chart-piece br"></div>
                                            </div>

                                        </div>
                                        {/* <!-- <div className="col-6"> </div> --> */}
                                        <div className="col-2 d-flex flex-column justify-content-between">
                                            <div>
                                                <h3 className="pillar-title">Physical Wellness</h3>
                                                <p className="pillar-description">Strength from the Inside Out</p>
                                            </div>
                                            <div>
                                                <h3 className="pillar-title">Mental Wellness</h3>
                                                <p className="pillar-description">Wellness That Fosters Growth</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                {/* <!-- Mobile Four Pillars Grid --> */}
                                <div className="mobile-pillars-grid d-md-none mb-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mobile-pillar-item">
                                                <h3 className="mobile-pillar-title financial-wellness">Financial Wellness
                                                </h3>
                                                <p className="mobile-pillar-description">Stability That Builds Legacies</p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mobile-pillar-item">
                                                <h3 className="mobile-pillar-title">Physical Wellness</h3>
                                                <p className="mobile-pillar-description">Strength from the Inside Out</p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mobile-pillar-item">
                                                <h3 className="mobile-pillar-title">Mental Wellness</h3>
                                                <p className="mobile-pillar-description">Wellness That Fosters Growth</p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mobile-pillar-item">
                                                <h3 className="mobile-pillar-title">Social Wellness</h3>
                                                <p className="mobile-pillar-description">The Core of Holistic Living</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Concluding Paragraph --> */}
                                <div className="row mt-5">
                                    <div className="col-lg-8">
                                        <p className="concluding-text">
                                            Our Holistic Wellness approach addresses these four essential dimensions to
                                            create a comprehensive framework for wellbeing that supports individuals at
                                            work, at home, and in their communities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ======= Financial Wellness Section ======= --> */}
                <section className="pillar-section financial-wellness py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2 className="pillar-title">Financial Wellness: Stability That Builds Legacies</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-md-6">
                                <h3 className="initiatives-heading">Our financial wellness initiatives include:</h3>
                                <ul className="initiatives-list">
                                    <li>Life insurance as a legacy-building tool</li>
                                    <li>Education on budgeting, saving, credit, retirement</li>
                                    <li>Reinsurance strategies fueling reinvestment in people</li>
                                    <li>Equity-focused financial programs for underserved communities</li>
                                </ul>
                                <div className="statistic-chart">
                                    <div className="pie animate no-round" style={{ "--p": "31", "--c": "orange" } as React.CSSProperties}> 31%</div>
                                    {/* <canvas id="financialChart"></canvas>
                                    <div className="chart-center-text">31%</div> */}
                                </div>


                                <p className="chart-caption">Just 31% of American adults are considered financially healthy.

                                </p>
                            </div>
                            <div className="col col-md-6 d-none d-lg-block"> <img
                                src="/img/livebalanced/LBimage1.png" alt="Financial consultation meeting"
                                className="fin-img-width" /></div>
                        </div>
                    </div>
                </section>

                {/* <!-- ======= Physical Wellness Section ======= --> */}
                <section className="pillar-section physical-wellness py-5">
                    <div className="container">
                        <h2 className="pillar-title">Physical Wellness: Strength from the Inside Out</h2>
                        <p className="intro-text">Partnering with employers and communities, we promote:</p>
                        <div className="row">
                            <div className="col col-md-5">
                                <div className="initiative-block">
                                    <div className="initiative-icon"></div>
                                    <div className="initiative-content mb-5">
                                        <h3 className="initiative-title">Disability and return-to-work support</h3>
                                        <p className="initiative-description">Comprehensive programs to help employees
                                            recover
                                            and
                                            return to productivity</p>
                                    </div>
                                </div>
                                <div className="initiative-block">
                                    <div className="initiative-icon"></div>
                                    <div className="initiative-content mb-5">
                                        <h3 className="initiative-title">Programs addressing sleep, fitness, nutrition,
                                            chronic
                                            illness</h3>
                                        <p className="initiative-description">Holistic approaches to physical wellbeing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1"></div>
                            <div className="col col-md-6">
                                <div className="initiative-block">
                                    <div className="initiative-icon"></div>
                                    <div className="initiative-content mb-5">
                                        <h3 className="initiative-title">Programs addressing sleep, fitness, nutrition,
                                            chronic
                                            illness</h3>
                                        <p className="initiative-description">Holistic approaches to physical wellbeing</p>
                                    </div>
                                </div>

                                <div className="initiative-block">
                                    <div className="initiative-icon"></div>
                                    <div className="initiative-content mb-5">
                                        <h3 className="initiative-title">Outreach and activations at the community level
                                        </h3>
                                        <p className="initiative-description">Bringing wellness resources directly to
                                            neighborhoods
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <p className="statistic-text">Statistic: 76% need to manage their condition during work hours. 2</p>
                    </div>
                </section>

                {/* <!-- ======= Mental Wellness Section ======= --> */}
                <section className="pillar-section mental-wellness py-5">
                    <div className="container">
                        <h2 className="pillar-title">Mental Wellness: Resilience That Drives Results</h2>
                        <div className="row">
                            <div className="col-12 col-md-6"> <img src="/img/livebalanced/LBimage2.png"
                                alt="Mindfulness group session" className="img-fluid" /></div>
                            <div className="col-12 col-md-6">
                                <h3 className="initiatives-heading">We tackle mental health head-on with:</h3>
                                <ul className="initiatives-list">
                                    <li>Workplace training on stress, anxiety, and burnout</li>
                                    <li>Tools for emotional and behavioral wellbeing</li>
                                    <li>Benefits design inclusive of mental health services</li>
                                    <li>Collaboration with mental health experts and employers</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col d-flex justify-content-center">
                                <div>
                                    <p className="statistic-number text-center">57%</p>
                                    <p className="statistic-title text-center">Workers Report Burnout</p>
                                    <p className="statistic-caption text-center">57% of workers reported symptoms associated
                                        with
                                        workplace
                                        burnout.</p>
                                </div>
                            </div>
                        </div>


                        <div className="statistic-container">

                        </div>
                    </div>
                </section>

                {/* <!-- ======= Social Wellness Section ======= --> */}
                <section className="pillar-section social-wellness py-5">
                    <div className="container">
                        {/* <!-- Full width header --> */}
                        <h2 className="pillar-title">Social Wellness: The Core of Holistic Living</h2>

                        {/* <!-- Full width paragraph below header --> */}
                        <p className="section-intro">
                            We address purpose in all dimensions: intellectual, emotional, occupational, social,
                            spiritual
                            and environmental.
                        </p>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="grid-item mb-3">
                                    <div className="item-content">
                                        <i className="bi bi-lightbulb-fill social-icon"></i>
                                        <h3 className="item-title">Intellectual</h3>
                                        <p className="item-description">
                                            Fostering growth, learning and creativity
                                        </p>
                                    </div>
                                </div>
                                <div className="grid-item mb-3">
                                    <div className="item-content">
                                        <i className="bi bi-people-fill social-icon"></i>
                                        <h3 className="item-title">Social</h3>
                                        <p className="item-description">
                                            Building social ties and workplace belonging
                                        </p>
                                    </div>
                                </div>
                                <div className="grid-item">
                                    <div className="item-content">
                                        <i className="bi bi-star-fill social-icon"></i>
                                        <h3 className="item-title">Spiritual</h3>
                                        <p className="item-description">
                                            Encouraging connection to a higher purpose
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-md-6">
                                <div className="grid-item mb-3">
                                    <div className="item-content">
                                        <i className="bi bi-heart-fill social-icon"></i>
                                        <h3 className="item-title">Emotional</h3>
                                        <p className="item-description">
                                            Promoting emotional intelligence and inner peace
                                        </p>
                                    </div>
                                </div>

                                <div className="grid-item mb-3">
                                    <div className="item-content">
                                        <i className="bi bi-briefcase-fill social-icon"></i>
                                        <h3 className="item-title">Occupational</h3>
                                        <p className="item-description">
                                            Aligning work with personal values
                                        </p>
                                    </div>
                                </div>
                                <div className="grid-item">
                                    <div className="item-content">
                                        <i className="bi bi-tree-fill social-icon"></i>
                                        <h3 className="item-title">Environmental</h3>
                                        <p className="item-description">
                                            Cultivating healthy spaces and environmental stewardship
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="section-outro">
                                    Statistic: Employees engaged by purpose are 3x more likely to stay with their
                                    employer and 2.5x more productive.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Full width paragraph below grid --> */}

                    </div>
                </section>

                {/* <!-- ======= Two Column Section ======= --> */}
                <section className="two-column-section py-5">
                    <div className="container">
                        <div className="row">
                            <h2 className="left-column-title">Why Holistic Wellness Matters for People and Performance
                            </h2>
                            <div className="col-12 col-md-6 left-column">
                                <ul className="left-column-list">
                                    <li>People who live their purpose at work are more productive than people who don't.
                                        They are also healthier, more resilient, and more likely to stay at the company.

                                    </li>
                                    <li>Boosted wellness yields $1,003-$3,500 per employee annually, or 17-55% of
                                        average
                                        pay. </li>
                                    <li>Globally, scaled mental health interventions could drive $3.73-$11.7 trillion in
                                        value, and improve GDP by $4.4 trillion by 2050. </li>
                                    <li>Yet only 57% of employees report good overall health, while 1 in 5 employees
                                        face
                                        burnout. These outcomes come from tackling not just absenteeism, but
                                        presenteeism,
                                        when employees are present but not fully engaged. </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 right-column">
                                <h2 className="right-column-title">Building a Sustainable Wellness Strategy</h2>
                                <p className="right-column-intro">
                                    Atlanta Life's model mirrors proven organizational approaches by focusing on:
                                </p>
                                <ul className="right-column-list">
                                    <li>Understanding employee health baselines</li>
                                    <li>Tailoring wellness initiatives to diverse needs</li>
                                    <li>Measuring 3-5 key health and productivity metrics</li>
                                    <li>Ensuring leadership sponsorship and accountability</li>
                                    <li>Addressing root workplace causes of stress and burnout</li>
                                    <li>Embedding wellness within organizational culture, not only benefits</li>
                                </ul>
                                <div className="right-column-image">
                                    <img src="/img/livebalanced/LBimage3.png"
                                        alt="Wellness approach illustration" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ======= Final Section ======= --> */}
                <section className="final-section py-5">
                    <div className="container">
                        {/* <!-- First Content Block --> */}
                        <div className="content-block">
                            <h1 className="final-h1">Atlanta Life: Insight to Impact</h1>
                            <p className="final-p">
                                By aligning data-driven global insights with our century-old legacy, we offer:
                            </p>
                            <ul className="final-list">
                                <li>A measurable, value-aligned wellness framework</li>
                                <li>Seamless integration into benefits, reinsurance and engagement strategies</li>
                                <li>Programs supporting underserved communities while delivering measurable ROI</li>
                            </ul>
                            <p className="final-p">
                                Holistic wellness is how Atlanta Life helps people not only live longer, but live
                                better.
                            </p>
                        </div>

                        {/* <!-- Second Content Block --> */}
                        <div className="content-block">
                            <h1 className="final-h1">Call to Action</h1>
                            <p className="final-p">
                                Let's collaborate to build a wellness strategy that transforms lives and uplifts
                                communities.
                            </p>
                            <p className="final-p">
                                Contact Us: BusinessDevelopment@atlantalife.com
                            </p>
                        </div>

                        <hr className="final-divider" />

                        <p className="final-conclusion">
                            Atlanta Life Insurance Company | A Legacy of Empowerment Since 1905
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LiveBalanced;
