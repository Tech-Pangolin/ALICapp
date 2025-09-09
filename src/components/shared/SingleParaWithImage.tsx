import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './SingleParaWithImage.css';

interface SingleParaWithImageProps {
    headerText?: string;
    image?: string;
    altText?: string;
    paragraph: string;
}

const SingleParaWithImage: React.FC<SingleParaWithImageProps> = ({headerText, image, altText = '', paragraph}) => {
    return (
        <Row>
                <Col xs={12} sm={12} md={10} >
                    {headerText && <h6>{headerText}</h6>}
                    <div className="d-flex align-items-start gap-3" id="para-with-image-div">

                        {/* placeholder for image */}
                        {image && <img src={image} alt={altText} className="img-fluid internship-benefits-image" />}
                        
                        <p className='ms-4'>
                            {paragraph}
                        </p>
                    </div>
                </Col>
            </Row>
    );
};

export default SingleParaWithImage;

