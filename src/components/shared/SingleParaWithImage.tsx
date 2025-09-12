import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './SingleParaWithImage.css';

interface SingleParaWithImageProps {
    headerText?: string;
    image?: string;
    altText?: string;
    paragraph: string;
}

const SingleParaWithImage: React.FC<SingleParaWithImageProps> = ({ headerText, image, altText = '', paragraph }) => {
    return (
        <>
            {headerText && (<h4>{headerText}</h4>)}
            <Row>
                <Col xs={12} sm={12} md={3} >
                    {/* placeholder for image */}
                    {image && <img src={image} alt={altText} className="img-fluid " />}
                </Col>
                <Col xs={12} sm={12} md={7} >
                    <div id="para-with-image-div">
                        <p className='ms-4'>
                            {paragraph}
                        </p>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default SingleParaWithImage;

