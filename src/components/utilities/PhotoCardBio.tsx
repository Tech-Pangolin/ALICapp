import React from 'react';
import './photocardBio.css';
import { X
 } from 'react-bootstrap-icons';

interface PhotoCardBioProps {
    selectedBio: any;
    setSelectedCard: (data:any) => void;
}

const PhotoCardBio: React.FC<PhotoCardBioProps> = ({ selectedBio, setSelectedCard }) => {
    console.log(selectedBio)
    return (
        <div className={`photo-card-bio text-${selectedBio?.alignment}`}>
            <div className="">
                <h2 className={`photo-card-title gradient-top-border d-block text-${selectedBio?.alignment}`}>{selectedBio?.name}<X className="close text-end mb-2" size={50}  onClick={() => setSelectedCard(null)}/></h2> 
                </div>


            <p className="photo-card-description mt-3 mx-4">{selectedBio?.bio}</p>

        </div>
    );
};

export default PhotoCardBio;