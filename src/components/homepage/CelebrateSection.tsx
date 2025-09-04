import React from 'react';
import './CelebrateSection.css';
import type { CelebrateSectionProps } from '../../types';


const CelebrateSection: React.FC<CelebrateSectionProps> = ({
  textImagePath = '/img/home/celebrate-text.png',
  className = ''
}) => {
  return (
    <section className={`celebrate-section ${className}`}>
      <div 
        className="celebrate-background"
      >
        <img 
          src={textImagePath} 
          alt="CELEBRATE 120 Years WITH US" 
          className="celebrate-text-overlay"
        />
        <div className="celebrate-additional-text">
          <div className="discover-text">DISCOVER OUR STORY</div>
          <div className="chevron-icon">▼</div>
        </div>
      </div>
    </section>
  );
};

export default CelebrateSection;
