import React from 'react';
import './GradientBox.css';

const GradientBox: React.FC = () => {
  return (
    <section className="gradient-box-section">
      <div className="white-box">
        <div className="white-box-content">
          <h1 className="display-1 fw-bold text-uppercase main-text">
            BUILT ON RESILIENCE,<br />
            ANCHORED BY PROGRESS.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default GradientBox;
