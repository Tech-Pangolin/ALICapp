import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';

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
                <Col xs={12} sm={12} md={8} >
                    <h6>Our Intern Team</h6>
                    {/* placeholder for photo cards */}
                </Col>
            </Row>
        </Container>
    );
};

export default InternshipProgram;