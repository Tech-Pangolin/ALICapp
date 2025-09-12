import React from 'react';
import './GradientBox.css';

interface GradientBoxProps {
  line1Text: string;
  line2Text?: string;
}
const GradientBox: React.FC<GradientBoxProps> = ({ line1Text, line2Text }) => {

  return (
    <div className="container std-bottom-space">
      <div className="row">
        <div className="col" style={{ padding: 0 }}>
          <div className="white-box">
            <div className="white-box-content">
              <h1 className="d-none d-lg-block fw-bold text-uppercase main-text">
                {line1Text}<br />
                {line2Text}
              </h1>
              <h1 className="d-block d-lg-none fw-bold text-uppercase main-text-mobile">
                {line1Text}<br />
                {line2Text}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default GradientBox;
