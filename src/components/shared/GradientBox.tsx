import React from 'react';
import './GradientBox.css';

interface GradientBoxProps {
  line1Text: string;
  line2Text?: string;
  line3Text?: string;
  mainFontSize?: string;
  subFontSize?: string;
  staticHeight?: string;
}
const GradientBox: React.FC<GradientBoxProps> = ({ line1Text, line2Text, line3Text, mainFontSize, subFontSize, staticHeight }) => {

  return (
    <div className="container std-bottom-space">
      <div className="row">
        <div className="col" style={{ padding: 0 }}>
          <div className="white-box" style={staticHeight ? { height: staticHeight } : undefined}>
            <div className="white-box-content">
              <h1 className="d-none d-lg-block fw-bold text-uppercase main-text">
                <div style={mainFontSize ? { fontSize: mainFontSize } : undefined}>{line1Text}<br />
                  {line2Text && <>{line2Text}<br /></>}</div>
                {line3Text && <><div className='sub-header mt-2' style={subFontSize ? { fontSize: subFontSize } : undefined}>{line3Text}</div></>}
              </h1>
              <h1 className="d-block d-lg-none fw-bold text-uppercase main-text-mobile">
                <div style={mainFontSize ? { fontSize: mainFontSize } : undefined}>{line1Text}<br />
                  {line2Text && <>{line2Text}</>}</div>
                {line3Text && <><div className='sub-header mt-2' style={subFontSize ? { fontSize: subFontSize } : undefined}>{line3Text}</div></>}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default GradientBox;
