import { Col, Container, Row } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import GradientBox from '../../../components/shared/GradientBox';
import FactsBox from '../../../components/shared/FactsBox';

const HealthAndProductivity: React.FC = () => {
  const facts = ["$1635/year per employee lost to absenteeism",
    "$530 Billon Lost Annually to Unproductive Meetings/Time",
    "7% of Employees Say They Feel Truly Productive",
    "1 in 4 Adults Experience Mental Health Conditions"
  ]
  return (
    <div>
      <ContentPageHeader src="/img/solutions/healthandproductivityheader.png" title="Health & Productivity" />
      <Container>
        <Row>
          <Col>
            <GradientBox line1Text='Wellness is complex but' line2Text='our strategy makes it work' />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Financial Wellness: A growing Workplace priority</h4>
            <p className='ms-4 p-text-group'>One of the most overlooked drivers of health and performance is financial wellness. It isn’t just about money, it’s about managing savings, debt, spending, and retirement planning, all of which directly impact employee stress. Since 2022, inflation and stagnant wages have worsened financial insecurity, with more than half of employees expressing concern about rising costs and feeling that their compensation isn’t keeping up. This growing financial pressure doesn’t stay at home, it shows up in the workplace as sleep loss, migraines, and high blood pressure, along with anxiety, depression, reduced focus, and lower productivity. Despite its wide-reaching impact, only 28% of employers currently offer financial wellness programs. Atlanta Life helps close this gap by equipping organizations with practical, stress-reducing financial education that empowers teams to thrive and businesses to per form.</p>

          </Col>
        </Row>
        <Row>
          <Col>
            <GradientBox staticHeight='175px' line1Text='53%' line2Text='Employees worried' line3Text='Most worried about rising expenses' mainFontSize='1rem' subFontSize='0.9rem' />
          </Col>
          <Col>
            <GradientBox staticHeight='175px' line1Text='59%' line2Text='Pay not keeping up' line3Text='Many say pay is not keeping up with costs of living.' mainFontSize='1rem' subFontSize='0.9rem' />

          </Col>
          <Col>
            <GradientBox staticHeight='175px' line1Text='51%' line2Text='Limited programs' line3Text='51% of employers offer financial wellness programs.' mainFontSize='1rem' subFontSize='0.9rem' />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>The true cost of disengagement</h4>
            <p className='ms-4 p-text-group'>Disengagement, absenteeism, and burnout don't just affect morale, they impact your bottom line. When employees are struggling mentally or physically, business performance declines. Whether you lead a team of 50 or 50,000, investing in employee wellbeing is a strategic advantage and forward-thinking organizations are already leading the way.</p>

          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center justify-content-lg-end">
            <FactsBox title="The Facts" facts={facts} />
          </Col>
        </Row>
        <Row>
          <h4 className='mt-5'>Data driven, people centered, built for impact</h4>
          <Col lg={4}>
            <img src="/img/solutions/hp-datadriven.png" alt="Data Driven Graphic" className='img-fluid ms-5' />
          </Col>
          <Col lg={6} className='d-flex align-items-center'>
            <p className='ms-5 ps-5 p-text-group'>You can't fix what you can't measure. We start with real data, analyzing workforce health patterns, leave trends, and cultural risk factors. From there, we create solutions that reflect your workforce makeup and your organization's goals.
              Finally, we activate your strategy through manager education, wellness integration, and ROI tracking that proves the value of the investment.</p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className='mt-5'>
            <h4 className='mt-5'>Healthier teams make stronger business outcomes</h4>
            <p className='ms-5 p-text-group'>We've seen what happens when organizations prioritize health and productivity: fewer lost days, better performance, and stronger cultures. It's not just about wellness, it's about your workforce thriving. Atlanta Life has spent over a century protecting people. Now, we're helping organizations empower them. Let's turn your benefit strategy into a growth strategy. At Atlanta Life, purpose is more than a value, it’s a foundation. It shapes how people show up, connects their work to something greater, and empowers every pillar of wellness. Whether building legacies, restoring health, or creating sustainable futures, purpose is the thread that makes wellbeing meaningful and business strategies impactful.</p>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default HealthAndProductivity;
