import React from 'react';

const Timeline: React.FC = () => {
    return (
        <div className="container" id="timeline">
            <div className="row justify-content-center justify-content-md-end pt-5">
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
            {/* <h1 className="kapakana-cursive">Timeline</h1>
            <p>This is the Timeline component.</p> */}
        </div>
    );
};

export default Timeline;