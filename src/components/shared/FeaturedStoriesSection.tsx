import React from 'react';
import './FeaturedStoriesSection.css';

const FeaturedStoriesSection: React.FC<{
    showTitle?: boolean, 
    img1?: string,
    img2?: string,
    img3?: string,
    img4?: string

}> = ({showTitle = true, img1="/img/home/featured-1.png", img2="/img/home/featured-2.png", img3="/img/home/featured-3.png", img4="/img/home/featured-4.png"}) => {
    return (
        <div className="container" id="featured-stories">
            {showTitle && <div className="row">
                <div className="col-12 col-lg-9">
                    <h1 className="main-heading ms-5">
                        WE MEASURE OUR IMPACT BY THE RESULTS WE HELP CREATE. EVERY WIN WE ACHIEVE TOGETHER IS PROOF OF WHAT TRUE PARTNERSHIP CAN DELIVER
                    </h1>
                    {/* <h2 className='ms-5 my-5'>FEATURED STORIES</h2> */}
                </div>
            </div>}

            <div className="row">
                <div className="d-none col-lg-2 d-lg-flex justify-content-center">
                    <img src="/img/home/featured-stories-vert.png" alt="FEATURED STORIES" className='ms-5' style={{ height: "57%" }} />
                </div>
                <div className="col-12 col-lg-9">
                    <div className="row">
                        <div className="col-12 col-lg-3"> <img src={img1} alt="Man in grey suit with tablet" className='img-fluid' /></div>
                        <div className="col-12 col-lg-3"> <img src={img2} alt="Man in suit with red tie" className='img-fluid' /></div>
                        <div className="col-12 col-lg-3"> <img src={img3} alt="Woman with curly hair in blazer" className='img-fluid' /></div>
                        <div className="col-12 col-lg-3"> <img src={img4} alt="People at networking event" className='img-fluid' /></div>
                    </div>
                    <div className="cta-overlay row d-none d-lg-flex">
                        <div className="col-6"><h2 className="overlay-heading">SEE REAL PEOPLE MAKE REAL IMPACT.</h2>
                            <div className="mt-5 pt-5">
                                <a href="/about/newsroom" className="cta-button">VIEW NEWSROOM</a>
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
                                <a href="/about/newsroom" className="cta-button">VIEW NEWSROOM</a>
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
    );
};

export default FeaturedStoriesSection;
