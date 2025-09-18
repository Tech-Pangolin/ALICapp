import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentPageHeader from '../../../components/shared/ContentPageHeader';
import ImageCarousel from '../../../components/shared/ImageCarousel';
// import PhotoCard from '../../../components/shared/PhotoCard';
// import PaginationWrapper from '../../../components/shared/PaginationWrapper';

const Newsroom: React.FC = () => {
    // Team images for development - replace with actual newsroom images when available
    const teamImages = [
        '/img/newsroom/office1.jpg',
        '/img/newsroom/office2.jpg',
        '/img/newsroom/office3.jpg',
        '/img/newsroom/office4.jpg'
    ];

    // const sampleData = [
    //     { id: '1', name: 'Eric L. Holoman', title: 'President & Chief Executive Officer', image: 'https://placehold.co/400x300' },
    //     { id: '2', name: 'Ryan L. Smith', title: 'Executive Vice President', image: 'https://placehold.co/400x300' },
    //     { id: '3', name: 'Sarah Johnson', title: 'Chief Financial Officer', image: 'https://placehold.co/400x300' },
    //     { id: '4', name: 'Michael Chen', title: 'Chief Technology Officer', image: 'https://placehold.co/400x300' },
    //     { id: '5', name: 'Lisa Rodriguez', title: 'Head of Human Resources', image: 'https://placehold.co/400x300' },
    //     { id: '6', name: 'David Thompson', title: 'Vice President of Operations', image: 'https://placehold.co/400x300' },
    //     { id: '7', name: 'Jennifer Lee', title: 'Director of Marketing', image: 'https://placehold.co/400x300' },
    //     { id: '8', name: 'Robert Wilson', title: 'Senior Legal Counsel', image: 'https://placehold.co/400x300' },
    //     { id: '9', name: 'Amanda Davis', title: 'Director of Client Relations', image: 'https://placehold.co/400x300' },
    //     { id: '10', name: 'James Brown', title: 'Head of Risk Management', image: 'https://placehold.co/400x300' },
    //     { id: '11', name: 'Maria Garcia', title: 'Director of Analytics', image: 'https://placehold.co/400x300' },
    //     { id: '12', name: 'Thomas Anderson', title: 'Senior Actuary', image: 'https://placehold.co/400x300' },
    //     { id: '13', name: 'Rachel Green', title: 'Director of Training', image: 'https://placehold.co/400x300' },
    //     { id: '14', name: 'Kevin Martinez', title: 'IT Security Manager', image: 'https://placehold.co/400x300' },
    //     { id: '15', name: 'Nicole Taylor', title: 'Quality Assurance Lead', image: 'https://placehold.co/400x300' },
    //     { id: '16', name: 'Alex Johnson', title: 'Business Analyst', image: 'https://placehold.co/400x300' },
    //     { id: '17', name: 'Emma Wilson', title: 'Project Manager', image: 'https://placehold.co/400x300' },
    //     { id: '18', name: 'Chris Davis', title: 'Software Developer', image: 'https://placehold.co/400x300' }
    // ];

    return (
        <>
            <ContentPageHeader src="/img/about/shared/bd-header.png" title="Newsroom" />
            <Container>

                <Row className="std-bottom-space">
                    <Col>
                        <ImageCarousel
                            headerText="One Stop for All Things News and Media"
                            images={teamImages}
                            showDots={true}
                            showArrows={true}
                            autoPlay={true}
                            autoPlayInterval={4000}
                            objectFit="contain"
                            loop={true}
                        />
                    </Col>
                </Row>

                <h4>View All Our Stories</h4>
                <Row>
                    <Col className='d-flex justify-content-center'>
                    <img src="/img/newsroom/comingsoonnews.png" style={{ width: '50%' }} alt="Coming soon" />
                    </Col>
                </Row>

                {/* <PaginationWrapper
                    rowsPerPage={4}
                    showPagination={true}
                    totalItems={sampleData.length}
                    itemLabel="stories"
                >
                    {Array.from({ length: Math.ceil(sampleData.length / 3) }, (_, rowIndex) => {
                        const startIndex = rowIndex * 3;
                        const rowData = sampleData.slice(startIndex, startIndex + 3);

                        return (
                            <Row key={`row-${rowIndex}`} className='photo-card-row'>
                                {rowData.map((item, colIndex) => (
                                    <Col
                                        key={item.id}
                                        xs={12}
                                        md={4}
                                        className={`d-flex justify-content-center ${colIndex === 0 ? 'justify-content-lg-end' :
                                                colIndex === 1 ? '' :
                                                    'justify-content-lg-start'
                                            }`}
                                    >
                                        <PhotoCard
                                            layout="top"
                                            name={item.name}
                                            title={item.title}
                                            setSelectedCard={() => { }}
                                            image={item.image}
                                            alignment={colIndex === 0 ? 'end' : colIndex === 1 ? 'center' : 'start'}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        );
                    })}
                </PaginationWrapper> */}

            </Container>
        </>
    );
};

export default Newsroom;