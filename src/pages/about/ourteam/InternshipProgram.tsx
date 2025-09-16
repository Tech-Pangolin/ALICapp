import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import PhotoCard from '../../../components/shared/PhotoCard';
import SingleParaWithImage from '../../../components/shared/SingleParaWithImage';

const InternshipProgram: React.FC = () => {
    return (
        <>
            <ContentPageHeader src="/img/about/internship/internship-header.png" title="The Internship Program" />
            <Container>

                <Row>
                    <Col xs={12} sm={12} md={8} >
                        <h4>About the Internship Program</h4>
                        <p className='ms-4'>
                            Our internship program is designed to give students and young professionals meaningful, hands-on
                            experience while contributing to the legacy of Atlanta Life. Interns gain exposure to business
                            development, actuarial science, community engagement, and innovative strategies that shape the
                            future of our industry. Beyond professional growth, the program fosters mentorship, leadership,
                            and purpose driven work that aligns with our mission to uplift communities nationwide.
                        </p>
                    </Col>
                </Row>
                <Row className='std-bottom-space'>
                    <Col xs={12} sm={12} md={12} >
                        <h4>Our Intern Team</h4>
                        <Row className='d-flex justify-content-center mx-auto d-none d-lg-flex'>
                            <Col lg={12} className='d-lg-flex justify-content-lg-center'>
                                <div className="mx-2"><PhotoCard name="Meet Patel" title="Intern, Actuary & Risk" image="https://placehold.co/400x300" setSelectedCard={() => { }} /></div>
                                <div className="mx-2"><PhotoCard name="Aaron Alexander" title="Intern, Actuary & Risk" image="https://placehold.co/400x300" setSelectedCard={() => { }} /></div>
                            </Col>

                        </Row>
                        <Row className='d-flex justify-content-center mx-auto d-lg-none d-xs-flex'>
                            <Col xs={12}  className='d-flex justify-content-center' >
                                <PhotoCard name="Meet Patel" title="Intern, Actuary & Risk" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                            </Col>
                            <Col xs={12}  className='d-flex justify-content-center'>
                                <PhotoCard name="Aaron Alexander" title="Intern, Actuary & Risk" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                            </Col>

                        </Row>
                        <Row className='d-flex justify-content-center '>
                            <Col xs={12} lg={6} className='d-flex justify-content-center'>
                                <PhotoCard name="Garrett Stiell" title="Intern, Business Development" image="https://placehold.co/400x300" setSelectedCard={() => { }} />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <SingleParaWithImage
                    headerText="From Intern to Analyst"
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
        </>
    );
};

export default InternshipProgram;