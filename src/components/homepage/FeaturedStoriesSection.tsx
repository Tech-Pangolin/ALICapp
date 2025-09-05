import React from 'react';
import './FeaturedStoriesSection.css';

const FeaturedStoriesSection: React.FC = () => {
    return (
        <section className="featured-stories-section">
            <div className="featured-stories-layout">
                <div className="main-content">
                    {/* Top text section */}
                    <div className="top-text-section">
                        <h1 className="main-heading">
                            WE MEASURE OUR IMPACT BY THE RESULTS WE HELP CREATE. EVERY WIN WE ACHIEVE TOGETHER IS PROOF OF WHAT TRUE PARTNERSHIP CAN DELIVER
                        </h1>
                        <img src="/img/home/featured-stories-horiz.png" alt="FEATURED STORIES" className="sub-heading" />
                    </div>

                    {/* Image collage with overlay */}
                    <div className="image-collage-container">
                        <div className="vertical-label">
                            <img src="/img/home/featured-stories-vert.png" alt="FEATURED STORIES" />
                        </div>
                        <div>
                            <div className="image-collage">
                                <img src="/img/home/featured-1.png" alt="Man in grey suit with tablet" />
                                <img src="/img/home/featured-2.png" alt="Man in suit with red tie" />
                                <img src="/img/home/featured-3.png" alt="Woman with curly hair in blazer" />
                                <img src="/img/home/featured-4.png" alt="People at networking event" />
                            </div>
                            <div className="cta-overlay">
                                <div className="overlay-content">
                                    <h2 className="overlay-heading">SEE REAL PEOPLE MAKE REAL IMPACT.</h2>

                                    <p className="overlay-description">
                                        We connect with communities in ways that are genuine, intentional, and rooted in real understanding—creating relationships that last and make a difference.

                                    </p>
                                    <button className="cta-button">VIEW NEWSROOM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedStoriesSection;
