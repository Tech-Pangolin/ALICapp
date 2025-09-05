import React from 'react';
import './GradientBox.css';

const GradientBox: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{ padding: 0 }}>
          <div className="white-box">
            <div className="white-box-content">
              <h1 className="d-none d-lg-block fw-bold text-uppercase main-text">
                BUILT ON RESILIENCE,<br />
                ANCHORED BY PROGRESS.
              </h1>
              <h1 className="d-block d-lg-none fw-bold text-uppercase main-text-mobile">
                BUILT ON RESILIENCE,<br />
                ANCHORED BY PROGRESS.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default GradientBox;
