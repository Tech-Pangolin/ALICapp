import React from 'react';
import { CurrencyDollar, HeartPulse, EmojiSmile, People, ClipboardPulse, BarChart, ArrowReturnRight, Gear, PersonWorkspace,
    Award, Cash, HandThumbsUp, PersonRaisedHand, Search, Lightbulb
 } from 'react-bootstrap-icons';

const HealthProductivity: React.FC = () => {
    return (
        <div id="hp">
            <main id="main">
                {/* 
                <!-- ======= LiveBalanced Hero Section ======= --> */}
                <section id="livebalanced-hero" className="hero d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 d-flex flex-column justify-content-center">
                                <div className="hero-content" data-aos="fade-up">
                                    <h1 className="hero-title">WELLNESS IS <span className="gold-accent">COMPLEX</span>. OUR
                                        <span className="gold-accent">STRATEGY</span> <br /> MAKES IT WORK.
                                    </h1>
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
                                {/* <!-- Opening Paragraph (Left Justified) --> */}
                                <p className="pillars-intro-text">
                                    Wellness isn't static, prioritizing health and wellness is a choice. It requires
                                    action,
                                    consistency, and intention. Individuals must actively pursue wellness across all
                                    aspects
                                    of life, and employers play a critical role in shaping that environment. With our
                                    research, we came up with four key dimensions that make up total wellness:
                                </p>

                                {/* <!-- Combined Title and Icons Row --> */}
                                <div className="pillars-icons-container text-center mb-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-3 col-sm-6 mb-3">
                                            <div className="pillar-icon">
                                                <h3 className="pillar-title">Financial</h3>
                                                <CurrencyDollar size={50} />
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 mb-3">
                                            <div className="pillar-icon">
                                                <h3 className="pillar-title">Physical</h3>
                                                <HeartPulse size={50} />
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 mb-3">
                                            <div className="pillar-icon">
                                                <h3 className="pillar-title">Mental</h3>
                                                <EmojiSmile size={50} />
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 mb-3">
                                            <div className="pillar-icon">
                                                <h3 className="pillar-title">Social</h3>
                                                <People size={50} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="pillars-concluding-text">
                                    These interconnected areas shape how people live, work, and recover , and when one
                                    is
                                    out of balance, the impact is felt across the entire organization. Financial stress
                                    can
                                    disrupt sleep, concentration, and morale. Mental health challenges may show up as
                                    burnout or extended leave. A lack of purpose often drives disengagement. These
                                    aren't
                                    just personal issues, they're performance risks.
                                    That's why we don't treat wellness as a perk. We help organizations embed these four
                                    pillars into benefits, policy, and engagement strategies that support real people
                                    and
                                    drive real results.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ======= Financial Wellness Section ======= --> */}
                <section className="pillar-section financial-wellness py-5">
                    <div className="container">
                        <h2 className="pillar-title">Financial Wellness: A Growing Workplace Priority</h2>

                        <p className="financial-intro-text">
                            One of the most overlooked drivers of health and performance is financial wellness. It isn't
                            just about money, it's about managing savings, debt, spending, and retirement planning, all
                            of
                            which directly impact employee stress.
                        </p>

                        <p className="financial-intro-text">
                            Since 2022, inflation and stagnant wages have worsened financial insecurity, with more than
                            half
                            of employees expressing concern about rising costs and feeling that their compensation isn't
                            keeping up. This growing financial pressure doesn't stay at home, it shows up in the
                            workplace
                            as sleep loss, migraines, and high blood pressure, along with anxiety, depression, reduced
                            focus, and lower productivity.
                        </p>

                        <p className="financial-intro-text">
                            Despite its wide-reaching impact, only 28% of employers currently offer financial wellness
                            programs. Atlanta Life helps close this gap by equipping organizations with practical,
                            stress-reducing financial education that empowers teams to thrive and businesses to perform.
                        </p>

                        {/* <!-- Statistics Row --> */}
                        <div className="financial-stats-row">
                            <div className="row justify-content-center">
                                <div className="col-md-4 col-sm-6 mb-4">
                                    <div className="stat-box">
                                        <div className="stat-number"><span className="stat-arrow">↗</span> 53%</div>
                                        <div className="stat-label">Employees Worried</div>
                                        <div className="stat-description">Most employees report rising anxieties about
                                            growing
                                            expenses and financial uncertainty.</div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mb-4">
                                    <div className="stat-box">
                                        <div className="stat-number"><span className="stat-arrow">↗</span> 59%</div>
                                        <div className="stat-label">Pay not keeping up</div>
                                        <div className="stat-description">Employees say their compensation isn't keeping up
                                            with
                                            rising costs.</div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mb-4">
                                    <div className="stat-box">
                                        <div className="stat-number"><span className="stat-arrow">↘</span> 28%</div>
                                        <div className="stat-label">Limited Programs</div>
                                        <div className="stat-description">Only a small percentage of employers currently
                                            offer
                                            financial wellness programs.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ======= Disengagement Section ======= --> */}
                <section className="two-column-section py-5">
                    <div className="container">
                        <div className="two-column-content">
                            {/* Left Column - Dark Blue Background */}
                            <div className="left-column">
                                <h2 className="left-column-title">The <span>true cost</span> of disengagement <span>is
                                    real</span></h2>
                                <p>
                                    <span className="bold-text">Disengagement</span>, <span
                                        className="bold-text">absenteeism</span>, and <span className="bold-text">burnout</span>
                                    don't just affect morale, they impact your <span className="bold-text">bottom
                                        line</span>.
                                    When employees are struggling mentally or physically, business <span
                                        className="bold-text">performance</span> declines.
                                </p>
                                <p>
                                    Whether you lead a team of 50 or 50,000, <span className="bold-text">investing</span> in
                                    employee wellbeing is a <span className="bold-text">strategic advantage</span> and
                                    forward-thinking organizations are already <span className="bold-text">leading the
                                        way</span>.
                                </p>

                                <div className="left-column-image">
                                    <img src="/img/health_productivity/disengagement.png"
                                        alt="Wellness approach illustration" />
                                </div>
                            </div>

                            {/* Right Column - Off-White Background */}
                            <div className="right-column">
                                <div className="right-column-stats">
                                    <div className="stat-item">
                                        <p className="stat-sentence">$1,635/year Per Employee <br /> Lost to Absenteeism</p>
                                    </div>
                                    <div className="stat-item">
                                        <p className="stat-sentence">$530 Billion Lost Annually to <br /> Unproductive
                                            Meetings/Time</p>
                                    </div>
                                    <div className="stat-item">
                                        <p className="stat-sentence">7% of Employees Say They Feel <br /> Truly Productive</p>
                                    </div>
                                    <div className="stat-item">
                                        <p className="stat-sentence">1 in 4 Adults Experiences a <br /> Mental Health
                                            Condition
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ======= People Centered Section ======= --> */}
                <section className="py-5 people-centered">
                    <div className="container">
                        {/* <!-- Top Portion: Two Columns --> */}
                        <div className="people-centered-top">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="content-left">
                                        <img src="/img/health_productivity/people-centered.png"
                                            alt="Strategy illustration" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="content-right">
                                        <h2 className="pillar-title">Data-Driven. People-Centered. Built for Impact.</h2>
                                        <p className="intro-text">
                                            You can't fix what you can't measure. We start with real data, analyzing
                                            workforce health patterns, leave trends, and cultural risk factors. From
                                            there,
                                            we co-create solutions that reflect your workforce makeup and your
                                            organization's goals.
                                        </p>
                                        <p className="intro-text">
                                            Finally, we activate your strategy through manager education, wellness
                                            integration, and ROI tracking that proves the value of
                                            the investment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Bottom Portion: Three Horizontal Sections --> */}
                        <div className="people-centered-bottom">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="initiative-block">
                                        <div className="initiative-icon">
                                            <i className="bi bi-graph-up"></i>
                                        </div>
                                        <div className="initiative-content">
                                            <h3 className="initiative-title">Assessment & Data</h3>
                                            <p className="initiative-description">
                                                Health, absence, and disability data analysis to identify key trends
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="initiative-block">
                                        <div className="initiative-icon">
                                            <i className="bi bi-people"></i>
                                        </div>
                                        <div className="initiative-content">
                                            <h3 className="initiative-title">Targeted Strategies</h3>
                                            <p className="initiative-description">
                                                Multi-generational solutions, benefit design, financial education
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="initiative-block">
                                        <div className="initiative-icon">
                                            <i className="bi bi-check-circle"></i>
                                        </div>
                                        <div className="initiative-content">
                                            <h3 className="initiative-title">Execution & Engagement</h3>
                                            <p className="initiative-description">
                                                Program implementation, monitoring and return on investment reporting
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ======= Real Solutions Section ======= --> */}
                <section className="pillar-section top-shadow py-5">
                    <div className="container">
                        <div className="reusable-bold-header">
                            <h2 className="pillar-title">Real Solutions. Real Outcomes.</h2>
                            <p className="intro-text">Every solution we deliver is designed to reduce risk, increase
                                engagement,
                                and improve business results. From policy design to people support, Atlanta Life
                                delivers
                                strategy-backed tools that work.</p>
                        </div>

                        <div className="solutions-grid">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 mb-4">
                                    <div className="solution-item">
                                        <div className="solution-icon">
                                            <ClipboardPulse size={50} color='#B37A04' />
                                        </div>
                                        <h4 className="solution-header">Workforce Health Assessments</h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-4">
                                    <div className="solution-item">
                                        <div className="solution-icon">
                                            <BarChart size={50} color='#B37A04' />
                                        </div>
                                        <h4 className="solution-header">Absence & Disability Data Analysis</h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-4">
                                    <div className="solution-item">
                                        <div className="solution-icon">
                                            <HeartPulse size={50} color='#B37A04' />
                                        </div>
                                        <h4 className="solution-header">Psychological Safety & Mental Health Programs</h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-4">
                                    <div className="solution-item">
                                        <div className="solution-icon">
                                            <ArrowReturnRight size={50} color='#B37A04' />
                                        </div>
                                        <h4 className="solution-header">Return to Work Program Development</h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-4">
                                    <div className="solution-item">
                                        <div className="solution-icon">
                                            <People size={50} color='#B37A04' />
                                        </div>
                                        <h4 className="solution-header">Multi-Generational Workforce Solutions</h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-4">
                                    <div className="solution-item">
                                        <div className="solution-icon">
                                            <CurrencyDollar size={50} color='#B37A04' />
                                        </div>
                                        <h4 className="solution-header">Financial Wellness Education</h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-4">
                                    <div className="solution-item">
                                        <div className="solution-icon">
                                            <Gear size={50} color='#B37A04' />
                                        </div>
                                        <h4 className="solution-header">Strategic Benefit/Policy Design</h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-4">
                                    <div className="solution-item">
                                        <div className="solution-icon">
                                            <PersonWorkspace size={50} color='#B37A04' />
                                        </div>
                                        <h4 className="solution-header">Manager Training</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="pillar-section top-shadow py-5">
                    <div className="container">
                        <div className="reusable-bold-header">
                            <h2 className="pillar-title">Healthier Teams. Stronger Business Outcomes.</h2>
                            <p className="intro-text">We've seen what happens when organizations prioritize health and
                                productivity: fewer lost days, better performance, and stronger cultures. It's not just
                                about wellness, it's about your workforce thriving.</p>
                        </div>

                        <div className="healthier-teams">
                            <div className="row align-items-center">
                                {/* <!-- Left Caption Grid --> */}
                                <div className="col-md-4">
                                    <div className="pie-caption pie-caption-left">
                                        <div className="caption-item">
                                            <h2 className="caption-header stat-sentence">Reduced Absenteeism</h2>
                                            <p className="caption-text">Fewer missed workdays means greater continuity</p>
                                        </div>
                                        <div className="caption-item">
                                            <h2 className="stat-sentence caption-header">More Engaged Teams</h2>
                                            <p className="caption-text">Build stronger workplace relationships</p>
                                        </div>
                                        <div className="caption-item">
                                            <h2 className="stat-sentence caption-header">Better Claims Outcomes</h2>
                                            <p className="caption-text">Improved health leads to fewer claims</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Center Pie Diagram --> */}
                                <div className="pie-diagram-container col-md-4">
                                    <div className="pie-slice slice-1">
                                        <Award color='#FFF' size={40} style={{ transform: 'rotate(315deg)' }}/>
                                        <i className="bi bi-award" style={{ transform: 'rotate(315deg)' }}></i>
                                    </div>
                                    <div className="pie-slice slice-2">
                                        <Cash color='#FFF' size={40} style={{ transform: 'rotate(255deg)' }} />
                                    </div>
                                    <div className="pie-slice slice-3">
                                        <HandThumbsUp color='#FFF' size={40} style={{ transform: 'rotate(195deg)' }} />
                                    </div>
                                    <div className="pie-slice slice-4">
                                        <PersonRaisedHand color='#FFF' size={40} style={{ transform: 'rotate(135deg)' }} />
                                    </div>
                                    <div className="pie-slice slice-5">
                                        <Search color='#FFF' size={40} style={{ transform: 'rotate(75deg)' }} />
                                    </div>
                                    <div className="pie-slice slice-6">
                                        <Lightbulb color='#FFF' size={40} style={{ transform: 'rotate(16deg)' }} />
                                    </div>
                                </div>

                                {/* <!-- Right Caption Grid --> */}
                                <div className="col-md-4">
                                    <div className="pie-caption pie-caption-right">
                                        <div className="caption-item">
                                            <h2 className="stat-sentence caption-header">Improved Retention</h2>
                                            <p className="caption-text">Keep your best talent for longer</p>
                                        </div>
                                        <div className="caption-item">
                                            <h2 className="stat-sentence caption-header">Higher Productivity</h2>
                                            <p className="caption-text">More engaged employees deliver better results</p>
                                        </div>
                                        <div className="caption-item">
                                            <h2 className="stat-sentence caption-header">Cost Savings</h2>
                                            <p className="caption-text">Reduce both healthcare and turnover costs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* <!-- ======= Final Section ======= --> */}
                <section className="final-section py-5">
                    <div className="container">
                        <div className="reusable-bold-header">
                            <h2 className="pillar-title">Let's build a healthier workforce together</h2>
                            <p className="intro-text">Atlanta Life has spent over 120 years protecting people. Now, we're
                                helping organizations empower them. Let's turn your benefit strategy into a growth
                                strategy.</p>
                        </div>

                        <div className="pyramid-grid">
                            <div className="row align-items-center">
                                {/* <!-- Left Side - Pyramid Image --> */}
                                <div className="pyramid-image-container col-md-6">
                                    <img src="/img/health_productivity/pyramid.svg"
                                        alt="Health and productivity pyramid" className="pyramid-image" />
                                </div>

                                {/* <!-- Right Side - 1x3 Grid --> */}
                                <div className="col-md-4">
                                    <div className="pyramid-content-grid">
                                        <div className="pyramid-item item1">
                                            <div className="pyramid-icon">
                                                <i className="bi bi-graph-up-arrow"></i>
                                            </div>
                                            <h2 className="pyramid-title">Growth Strategy</h2>
                                            <p className="pyramid-text">Transform benefits into business advantage</p>
                                        </div>
                                        <div className="pyramid-item item2">
                                            <div className="pyramid-icon">
                                                <i className="bi bi-people-fill"></i>
                                            </div>
                                            <h2 className="pyramid-title">Empowered Teams</h2>
                                            <p className="pyramid-text">Support all dimentions of employee wellness</p>
                                        </div>
                                        <div className="pyramid-item">
                                            <div className="pyramid-icon">
                                                <i className="bi bi-shield-check"></i>
                                            </div>
                                            <h2 className="pyramid-title">120 Years of Protection</h2>
                                            <p className="pyramid-text">Built on a legacy of caring for people</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default HealthProductivity;