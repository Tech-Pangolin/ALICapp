import React from 'react';
import './CelebrateSection.css';
import type { CelebrateSectionProps } from '../../types';
import { CaretDownSquare } from 'react-bootstrap-icons';


const CelebrateSection: React.FC<CelebrateSectionProps> = ({
  textImagePath = '/img/home/celebrate-text.png',
  className = '',
  setExpanded,expanded
}) => {
  return (
    <section className={`celebrate-section ${className}`}>
      <div 
        className="celebrate-background d-none d-lg-block"
      >
        <img 
          src={textImagePath} 
          alt="CELEBRATE 120 Years WITH US" 
          className="celebrate-text-overlay d-none d-lg-block"
        />
        <img 
          src={textImagePath} 
          alt="CELEBRATE 120 Years WITH US" 
          className="celebrate-text-overlay-mobile d-block d-lg-none"
        />
        <div className="celebrate-additional-text">
          <div className="discover-text">DISCOVER OUR STORY</div>
          {!expanded && <div className="chevron-icon text-center" style={{cursor:"pointer"}} onClick={() => setExpanded(true)}><CaretDownSquare size={50}/></div>}
        </div>
      </div>
      <div 
        className="celebrate-background celebrate-background-mobile d-block d-lg-none"
      >
        <img 
          src={textImagePath} 
          alt="CELEBRATE 120 Years WITH US" 
          className="celebrate-text-overlay d-none d-lg-block "
        />
        <img 
          src={textImagePath} 
          alt="CELEBRATE 120 Years WITH US" 
          className="celebrate-text-overlay-mobile d-block d-lg-none pt-4"
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
