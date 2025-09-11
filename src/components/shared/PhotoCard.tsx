import './PhotoCard.css';
import React from 'react';
import { Card } from 'react-bootstrap';

interface PhotoCardProps {
    name: string;
    title: string;
    image: string;
    bio?: string;
    alignment?: 'start' | 'center' | 'end';
    setSelectedCard: (data: any) => void;
    layout?: 'top' | 'bottom';
    isExecutive?: boolean;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ name, title, image, bio}) => {
    const [expand, setExpand] = React.useState(false);
    const [_, setIsMobile] = React.useState(false);
    
    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    function expandBio() {
        console.log("expandBio called",expand, name, title, image, bio,);
        // setSelectedCard({ name, title, image, bio, alignment, layout });
        setExpand(!expand);
    }
    //temporary image until we have bios and images
    image = "/img/comingsoon.png";
    return (
        <Card className='photo-card my-3'>
            <Card.Img variant="top" src={image} alt={name} className='image' /> {/* Display the image */}
            <div className='gradient-top-border'></div>
            {/*  ${(expand &&!isMobile) ? 'expand-card-body' : ''} */}
            <Card.Body className={`body card-body`}>
                <Card.Title onClick={expandBio}>{name}</Card.Title>
                <Card.Text>{title}</Card.Text>
                {expand && <Card.Text>{bio}</Card.Text>}
              
            </Card.Body>
        </Card>
    );
};

export default PhotoCard;