import React from 'react';
import LiveBalancedCard from './LiveBalancedCard';
import { Col, Container, Row } from 'react-bootstrap';

const LiveBalancedCards: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6} lg={3}><LiveBalancedCard text="Physical Wellness" url="/solutions/physicalwellness" imageSrc="/img/solutions/livebalanced/physicalwellness.png" /></Col>
                <Col xs={12} md={6} lg={3}><LiveBalancedCard text="Mental Wellness" url="/solutions/mentalwellness" imageSrc="/img/solutions/livebalanced/mentalwellness.png" /></Col>
                <Col xs={12} md={6} lg={3}><LiveBalancedCard text="Financial Wellness" url="/solutions/financialwellness" imageSrc="/img/solutions/livebalanced/financialwellness.png" /></Col>
                <Col xs={12} md={6} lg={3}><LiveBalancedCard text="Social Wellness" url="/solutions/socialwellness" imageSrc="/img/solutions/livebalanced/socialwellness.png" /></Col>
            </Row>
        </Container>
    );
};

export default LiveBalancedCards;