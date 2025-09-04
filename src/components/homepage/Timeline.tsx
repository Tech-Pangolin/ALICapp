import React from 'react';
import {  CaretUpSquare } from 'react-bootstrap-icons';

interface TimelineProps {
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  expanded: boolean;
}
const Timeline: React.FC<TimelineProps> = ({ setExpanded, expanded }) => {
    return (
        <div style={{ backgroundColor: "#0B3144", paddingBottom: '50px' }}>
            {/* Mobile timeline */}
            <div className="container d-block d-lg-none" id="mobile-timeline">
                <div className="row">
                    <div className="col-12"><img src='/img/timeline/aboldbeginning.png' className='img-fluid me-5' /></div>
                    <div className="col-12">
                        <h1 className='kapakana-cursive text-center'>1905</h1>
                        <h2 className="text-center my-4">A Bold Beginning</h2>
                        <h3 className="text-center">Founded by Alonzo Franklin Herndon, a formerly enslaved man who rose to become Atlanta's
                            first Black millionaire, Atlanta Life began as a beacon of economic empowerment. Herndon's
                            purchase of a small benevolent association for $140 laid the foundation for what would become
                            one of the most significant businesses in American history.</h3>
                    </div>


                </div>
               <div className="row py-5">
                    <div className="col-12"><img src='/img/timeline/becomingatlife.png' className='img-fluid mt-5' /></div>

                    <div className="col-12 ">
                        <h1 className='kapakana-cursive text-center'>1922</h1>
                        <h2 className="text-center my-2">Becoming Atlanta Life</h2>
                        <h3 className="text-center">With a new legal reserve structure and $100,000 in capital stock, Atlanta Mutual Insurance Association was reborn as Atlanta Life Insurance Company. This milestone marked its emergence as a trusted institution serving families across Georgia and soon expanding into states including Florida, Tennessee, and Texas.</h3>
                    </div>

                </div>
                <div className="row py-5">
                    <div className="col-12"><img src='/img/timeline/carryingtorch.png' className='img-fluid' /></div>

                    <div className="col-12 ">
                        <h1 className='kapakana-cursive text-center'>1927</h1>
                        <h2 className="text-center my-2">Carrying the torch</h2>
                        <h3 className="text-center">Following Herndon's passing, his son Norris B. Herndon assumed leadership. Under his stewardship, Atlanta Life grew from modest beginnings into a powerhouse with tens of millions in assets, all while providing a financial safety net for countless Black families during an era of limited opportunity.</h3>
                    </div>

                </div>
                <div className="row py-5">
                    <div className="col-12"><img src='/img/timeline/socialchange.png' className='img-fluid mt-5' /></div>

                    <div className="col-12   mt-4">
                        <h1 className='kapakana-cursive text-center'>1950<span style={{ textTransform: 'lowercase' }}>s to</span> 1970<span style={{ textTransform: 'lowercase' }}>s</span></h1>
                        <h2 className="text-center my-2">Driving Social Change</h2>
                        <h3 className="text-center">Atlanta Life quietly fueled the Civil Rights Movement by insuring leaders, funding initiatives, and empowering communities. The company’s growth during this period, from $1 million in assets to more than $84 million, cemented its position as a pillar of strength for Black enterprise and resilience.</h3>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-12"><img src='/img/timeline/newera.png' className='img-fluid mt-5' /></div>

                    <div className="col-12 mt-4">
                        <h1 className='kapakana-cursive text-center'>1973</h1>
                        <h2 className="text-center my-2">A new era of leadership</h2>
                        <h3 className="text-center">Jesse Hill Jr., the company’s first non-Herndon president, expanded Atlanta Life's influence, guiding it to become the largest Black owned life insurance company in the United States and a leading voice for equality, economic justice, and corporate responsibility.</h3>
                    </div>



                </div>
                <div className="row justify-content-md-end my-5">
                    <div className="col-12"><img src='/img/timeline/anchoredbyprogress.png' className='img-fluid' /></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-11">

                        <div className="col-12"><img src='/img/timeline/newchapter.png' className='img-fluid mt-5' /></div>

                        <div className="col-12">
                            <h1 className='kapakana-cursive text-center'>2023</h1>
                            <h2 className="text-center my-2">A new chapter begins</h2>
                            <h3 className="text-center">Atlanta Life was acquired by Atlanta Life Holdings, ensuring that the company's 120 year old mission endures with renewed energy, fresh leadership, and a sharpened vision for the future. In partnership with EquiTrust Life Insurance Company, backed by Magic Johnson Enterprises, Atlanta Life is writing its next chapter. This alliance expands our reach, strengthens our financial capabilities, and reaffirms our founding purpose: advancing economic security and opportunity for all communities.</h3>
                        </div>


                    </div>
                </div>
                <div className="row ">
                    <div className="col-12"><img src='/img/timeline/teamfit.png' className='img-fluid mt-5' /></div>

                    <div className="col-12 ">
                        <h1 className='kapakana-cursive text-center'>Today</h1>
                        <h2 className="text-center my-2">A Team Fit for the future</h2>
                        <h3 className="text-center">Atlanta Life is powered by a new generation of talent, an advanced and highly qualified team committed to excellence. With expertise spanning insurance, business development, health solutions, and community engagement, our people embody innovation, professionalism, and purpose. Together, this team is ensuring that Atlanta Life not only honors its past but also leads with strength and vision in the decades ahead.</h3>
                    </div>


                </div>
                <div className="row my-5">

                    <div className="col-12"><img src='/img/timeline/innovation.png' className='img-fluid ' /></div>


                    <div className="col-12 ">
                        <h2 className="text-center my-2">Empowering Communities Through Innovation</h2>
                        <h3 className="text-center">Atlanta Life is committed to transforming financial services into tools of empowerment. By aligning with like minded partners, we continue to introduce new programs and solutions designed to close wealth gaps, promote wellness, and create generational prosperity.</h3>
                    </div>

                </div>
                 <div className="row my-5">
                    <div className="col-12"><img src='/img/timeline/redefininghp.png' className='img-fluid mt-5' /></div>

                    <div className="col-12">
                        <h2 className="text-center my-2">Redefining Health & Productivity</h2>
                        <h3 className="text-center">Through our LiveBalanced™ platform, Atlanta Life is reshaping how individuals and families approach well being. By integrating financial, physical, mental, and social wellness, LiveBalanced™ provides resources that foster healthier lifestyles, stronger communities, and lasting legacy.</h3>
                    </div>


                </div>
                <div className="row my-5">

                    <div className="col-12"><img src='/img/timeline/racer.png' className='img-fluid ' /></div>

                    <div className="col-12 ">
                        <h2 className="text-center my-2">Reinsurance
                            Innovation & Expansion</h2>
                        <h3 className="text-center">Today, Atlanta Life stands as an innovative and modern reinsurance company, steadily expanding our capabilities and delivering industry leading solutions. By forging new partnerships and deepening connections with companies and communities, we are extending our impact and creating value that resonates far beyond traditional insurance. Our growth reflects both strategic collaboration and an unwavering commitment to strengthening the ecosystems we serve.</h3>
                    </div>

                </div>
            </div>


            {/* Desktop Timeline */}
            <div className="container d-none d-lg-block" id="timeline">
                <div className="row justify-content-center justify-content-md-end mt-5">
                    <div className="col-10">
                        <div className="box-right row">
                            <div className="col-12 col-md-5"><img src='/img/timeline/aboldbeginning.png' className='img-fluid me-5' /></div>
                            <div className="col-12 col-md-5 ms-4">
                                <h2 className="text-center my-4">A Bold Beginning</h2>
                                <h3 className="text-center">Founded by Alonzo Franklin Herndon, a formerly enslaved man who rose to become Atlanta's
                                    first Black millionaire, Atlanta Life began as a beacon of economic empowerment. Herndon's
                                    purchase of a small benevolent association for $140 laid the foundation for what would become
                                    one of the most significant businesses in American history.</h3>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="row justify-content-center justify-content-md-start py-5">
                    <div className="col-11">

                        <div className="box-right row">

                            <div className="col-12 col-md-6 ms-4">
                                <h1 className='kapakana-cursive text-center'>1922</h1>
                                <h2 className="text-center my-2">Becoming Atlanta Life</h2>
                                <h3 className="text-center">With a new legal reserve structure and $100,000 in capital stock, Atlanta Mutual Insurance Association was reborn as Atlanta Life Insurance Company. This milestone marked its emergence as a trusted institution serving families across Georgia and soon expanding into states including Florida, Tennessee, and Texas.</h3>
                            </div>
                            <div className="col-12 col-md-5"><img src='/img/timeline/becomingatlife.png' className='img-fluid mt-5' /></div>

                        </div>

                    </div>
                </div>
                <div className="row justify-content-center justify-content-md-end py-5">
                    <div className="col-11">

                        <div className="box-right row">
                            <div className="col-12 col-md-5"><img src='/img/timeline/carryingtorch.png' className='img-fluid ms-5' /></div>

                            <div className="col-12 col-md-6 ms-4">
                                <h1 className='kapakana-cursive text-center'>1927</h1>
                                <h2 className="text-center my-2">Carrying the torch</h2>
                                <h3 className="text-center">Following Herndon's passing, his son Norris B. Herndon assumed leadership. Under his stewardship, Atlanta Life grew from modest beginnings into a powerhouse with tens of millions in assets, all while providing a financial safety net for countless Black families during an era of limited opportunity.</h3>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="row justify-content-center justify-content-md-start py-5">
                    <div className="col-11">

                        <div className="box-right row">

                            <div className="col-12 col-md-6 ms-4 mt-4">
                                <h1 className='kapakana-cursive text-center'>1950<span style={{ textTransform: 'lowercase' }}>s to</span> 1970<span style={{ textTransform: 'lowercase' }}>s</span></h1>
                                <h2 className="text-center my-2">Driving Social Change</h2>
                                <h3 className="text-center">Atlanta Life quietly fueled the Civil Rights Movement by insuring leaders, funding initiatives, and empowering communities. The company’s growth during this period, from $1 million in assets to more than $84 million, cemented its position as a pillar of strength for Black enterprise and resilience.</h3>
                            </div>
                            <div className="col-12 col-md-5"><img src='/img/timeline/socialchange.png' className='img-fluid mt-5' /></div>

                        </div>

                    </div>
                </div>
                <div className="row justify-content-center  py-5">
                    <div className="col-11">

                        <div className="box-right row justify-content-md-end">
                            <div className="col-12 col-md-3"><img src='/img/timeline/newera.png' className='img-fluid mt-5' /></div>

                            <div className="col-12 col-md-5 ms-4 mt-4">
                                <h1 className='kapakana-cursive text-center'>1973</h1>
                                <h2 className="text-center my-2">A new era of leadership</h2>
                                <h3 className="text-center">Jesse Hill Jr., the company’s first non-Herndon president, expanded Atlanta Life’s influence, guiding it to become the largest Black owned life insurance company in the United States and a leading voice for equality, economic justice, and corporate responsibility.</h3>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="row justify-content-md-end my-5">
                    <div className="col-12 col-md-5"><img src='/img/timeline/anchoredbyprogress.png' className='img-fluid mt-5' /></div>
                </div>
                <div className="row justify-content-center justify-content-md-start py-5 ">
                    <div className="col-11 my-5">

                        <div className="box-right row">

                            <div className="col-12 col-md-5 ms-4">
                                <h1 className='kapakana-cursive text-center'>2023</h1>
                                <h2 className="text-center my-2">A new chapter begins</h2>
                                <h3 className="text-center">Atlanta Life was acquired by Atlanta Life Holdings, ensuring that the company’s 120 year old mission endures with renewed energy, fresh leadership, and a sharpened vision for the future. In partnership with EquiTrust Life Insurance Company, backed by Magic Johnson Enterprises, Atlanta Life is writing its next chapter. This alliance expands our reach, strengthens our financial capabilities, and reaffirms our founding purpose: advancing economic security and opportunity for all communities.</h3>
                            </div>
                            <div className="col-12 col-md-5"><img src='/img/timeline/newchapter.png' className='img-fluid mt-5' /></div>

                        </div>

                    </div>
                </div>
                <div className="row ">
                    <div className="col-11">

                        <div className="box-right row">
                            <div className="col-12 col-md-5"><img src='/img/timeline/teamfit.png' className='img-fluid mt-5' /></div>

                            <div className="col-12 col-md-6 ms-4">
                                <h1 className='kapakana-cursive text-center'>Today</h1>
                                <h2 className="text-center my-2">A Team Fit for the future</h2>
                                <h3 className="text-center">Atlanta Life is powered by a new generation of talent, an advanced and highly qualified team committed to excellence. With expertise spanning insurance, business development, health solutions, and community engagement, our people embody innovation, professionalism, and purpose. Together, this team is ensuring that Atlanta Life not only honors its past but also leads with strength and vision in the decades ahead.</h3>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-11">

                        <div className="box-right row">


                            <div className="col-12 col-md-6 ms-4">
                                <h2 className="text-center my-2">Empowering Communities Through Innovation</h2>
                                <h3 className="text-center">Atlanta Life is committed to transforming financial services into tools of empowerment. By aligning with like minded partners, we continue to introduce new programs and solutions designed to close wealth gaps, promote wellness, and create generational prosperity.</h3>
                            </div><div className="col-12 col-md-5"><img src='/img/timeline/innovation.png' className='img-fluid ' /></div>

                        </div>

                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-11">

                        <div className="box-right row">
                            <div className="col-12 col-md-5"><img src='/img/timeline/redefininghp.png' className='img-fluid mt-5' /></div>

                            <div className="col-12 col-md-6 ms-4">
                                <h2 className="text-center my-2">Redefining Health & Productivity</h2>
                                <h3 className="text-center">Through our LiveBalanced™ platform, Atlanta Life is reshaping how individuals and families approach well being. By integrating financial, physical, mental, and social wellness, LiveBalanced™ provides resources that foster healthier lifestyles, stronger communities, and lasting legacy.</h3>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-11">

                        <div className="box-right row">


                            <div className="col-12 col-md-6 ms-4">
                                <h2 className="text-center my-2">Reinsurance
                                    Innovation & Expansion</h2>
                                <h3 className="text-center">Today, Atlanta Life stands as an innovative and modern reinsurance company, steadily expanding our capabilities and delivering industry leading solutions. By forging new partnerships and deepening connections with companies and communities, we are extending our impact and creating value that resonates far beyond traditional insurance. Our growth reflects both strategic collaboration and an unwavering commitment to strengthening the ecosystems we serve.</h3>
                            </div><div className="col-12 col-md-5"><img src='/img/timeline/racer.png' className='img-fluid ' /></div>

                        </div>

                    </div>
                </div>
                          {expanded && <div className="chevron-icon text-center" style={{cursor:"pointer"}} onClick={() => setExpanded(false)}><CaretUpSquare size={50}/></div>}
            </div>
        </div>
    );
};

export default Timeline;