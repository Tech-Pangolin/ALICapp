import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import PhotoCard from '../../../components/utilities/PhotoCard';
import SingleParaWithImage from '../../../components/shared/SingleParaWithImage';

const InternshipProgram: React.FC = () => {
    return (
        <Container className="about-container">
            <ContentPageHeader src="/img/about/internship/internship-header.png" title="The Internship Program" />
            <Row>
                <Col xs={12} sm={12} md={8} >
                    <h6>About the Internship Program</h6>
                    <p className='ms-4'>
                        Our internship program is designed to give students and young professionals meaningful, hands-on
                        experience while contributing to the legacy of Atlanta Life. Interns gain exposure to business
                        development, actuarial science, community engagement, and innovative strategies that shape the
                        future of our industry. Beyond professional growth, the program fosters mentorship, leadership,
                        and purpose driven work that aligns with our mission to uplift communities nationwide.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} >
                    <h6>Our Intern Team</h6>
                   <Row className='d-flex justify-content-center mx-auto'>
                        <Col xs={12} lg={4}  >
                            <PhotoCard name="Meet Patel" title="Intern, Actuary & Risk" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                        </Col>
                        <Col xs={12} lg={4}  >
                            <PhotoCard name="Aaron Alexander" title="Intern, Actuary & Risk" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                        </Col>
                      
                    </Row>
                    <Row style={{ width: '70%' }} className='d-flex justify-content-center mx-auto'>
                        <Col xs={12} lg={6}  >
                            <PhotoCard name="Garrett Stiell" title="Intern, Business Development" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                        </Col>
                       
                       
                    </Row>
                </Col>
            </Row>

            <SingleParaWithImage 
                headerText="Internship Program Benefits"
                image="/public/img/team/team-1.jpg"
                altText="Internship Benefits"
                paragraph="De'Andre Williams exemplifies the success of Atlanta Life's internship program, having grown from 
                            a Business Development Intern into his current role as a Business Development Analyst. A graduate 
                            of Morehouse College, De'Andre earned his Bachelor of Science degree in Biology and Public Health 
                            Science, bringing both academic insight and passion for impact to his work. As the first intern to 
                            transition into a full time role at Atlanta Life, he serves as a beacon of commitment and promise 
                            for the work we do. His journey reflects the power of our internship program to create real 
                            opportunities for students, cultivating the skills, confidence, and expertise needed to become 
                            professionals in the insurance industry. By fostering mentorship and hands on experience, the program 
                            empowers emerging leaders like De'Andre to contribute meaningfully today while shaping the future of 
                            the field."
            />
            
        </Container>
    );
};

export default InternshipProgram;