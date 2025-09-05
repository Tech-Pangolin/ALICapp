import React from 'react';
import './FeaturedStoriesSection.css';

const FeaturedStoriesSection: React.FC = () => {
    return (
        <div className="container-fluid" id="featured-stories">
            <div className="row">
                <div className="col-12">
                    <h1 className="main-heading ms-5">
                        WE MEASURE OUR IMPACT BY THE RESULTS WE HELP CREATE. EVERY WIN WE ACHIEVE TOGETHER IS PROOF OF WHAT TRUE PARTNERSHIP CAN DELIVER
                    </h1>
                    <h2 className='ms-5 my-5'>FEATURED STORIES</h2>
                </div>
            </div>
            <div className="row">
                <div className="d-none col-lg-2 d-lg-flex justify-content-center">
                    <img src="/img/home/featured-stories-vert.png" alt="FEATURED STORIES" className='ms-5' style={{ height: "75%" }} />
                </div>
                <div className="col-12 col-lg-9">
                    <div className="row">
                        <div className="col-12 col-lg-3"> <img src="/img/home/featured-1.png" alt="Man in grey suit with tablet" className='img-fluid' /></div>
                        <div className="col-12 col-lg-3"> <img src="/img/home/featured-2.png" alt="Man in suit with red tie" className='img-fluid' /></div>
                        <div className="col-12 col-lg-3"> <img src="/img/home/featured-3.png" alt="Woman with curly hair in blazer" className='img-fluid' /></div>
                        <div className="col-12 col-lg-3"> <img src="/img/home/featured-4.png" alt="People at networking event" className='img-fluid' /></div>
                    </div>
                    <div className="cta-overlay row d-none d-lg-flex">
                        <div className="col-6"><h2 className="overlay-heading">SEE REAL PEOPLE MAKE REAL IMPACT.</h2>
                            <div className="mt-5 pt-5">
                                <a href="/publications" className="cta-button">VIEW NEWSROOM</a>
                            </div></div>
                        <div className="col d-flex justify-content-end">
                            <div>
                                <p className="overlay-description text-start">
                                    We connect with communities in ways that are genuine, intentional, and rooted in real understanding—creating relationships that last and make a difference.

                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="cta-overlay-mobile row d-flex d-lg-none">
                        <div className="col-12"><h2 className="overlay-heading text-center" style={{width:'100%'}}>SEE REAL PEOPLE MAKE REAL IMPACT.</h2>
                            <div className="py-3 d-flex justify-content-center">
                                <a href="/publications" className="cta-button">VIEW NEWSROOM</a>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <div>
                                <p className="overlay-description text-center">
                                    We connect with communities in ways that are genuine, intentional, and rooted in real understanding—creating relationships that last and make a difference.

                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        // <section className="featured-stories-section">
        //     <div className="featured-stories-layout">
        //         <div className="main-content">
        //             {/* Top text section */}
        //             <div className="top-text-section">
        //                 <h1 className="main-heading">
        //                     WE MEASURE OUR IMPACT BY THE RESULTS WE HELP CREATE. EVERY WIN WE ACHIEVE TOGETHER IS PROOF OF WHAT TRUE PARTNERSHIP CAN DELIVER
        //                 </h1>
        //                 <img src="/img/home/featured-stories-horiz.png" alt="FEATURED STORIES" className="sub-heading" />
        //             </div>

        //             {/* Image collage with overlay */}
        //             <div className="image-collage-container">
        //                 <div className="vertical-label">

        //                 </div>
        //                 <div>
        //                     <div className="image-collage">
        //                         <img src="/img/home/featured-1.png" alt="Man in grey suit with tablet" />
        //                         <img src="/img/home/featured-2.png" alt="Man in suit with red tie" />
        //                         <img src="/img/home/featured-3.png" alt="Woman with curly hair in blazer" />
        //                         <img src="/img/home/featured-4.png" alt="People at networking event" />
        //                     </div>
        //                     <div className="cta-overlay">
        //                         <div className="overlay-content">
        //                             <h2 className="overlay-heading">SEE REAL PEOPLE MAKE REAL IMPACT.</h2>

        //                             <p className="overlay-description">
        //                                 We connect with communities in ways that are genuine, intentional, and rooted in real understanding—creating relationships that last and make a difference.

        //                             </p>
        //                             <button className="cta-button">VIEW NEWSROOM</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default FeaturedStoriesSection;
