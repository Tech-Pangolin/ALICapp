import React from 'react';
import './CelebrateSection.css';
import type { CelebrateSectionProps } from '../../types';
import { CaretDownSquare, CaretDownSquareFill } from 'react-bootstrap-icons';


const CelebrateSection: React.FC<CelebrateSectionProps> = ({
  textImagePath = '/img/home/celebrate-text.png',
  className = '',
  setExpanded,expanded
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
          {!expanded && <div className="chevron-icon text-center" style={{cursor:"pointer"}} onClick={() => setExpanded(true)}><CaretDownSquare size={50}/></div>}
        </div>
      </div>
    </section>
  );
};

export default CelebrateSection;
