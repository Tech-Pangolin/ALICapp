import React from 'react';
import ContentPageHeader from '../../components/shared/ContentPageHeader';
import { Col, Container, Row, Table } from 'react-bootstrap';

const ChildReads: React.FC = () => {
    const [books, setBooks] = React.useState([
        { "title": "Amina's MaahMaah Jar", "author": "Neima Abdulahi", "level": "Elementary School" },
        { "title": "African & Caribbean Folktales, Myths & Legends", "author": "Wendy Shearer", "level": "Middle School" },
        { "title": "Alain's Brave Night", "author": "Ariel Mckinley", "level": "Elementary School" },
        { "title": "Based on the song by Bob Marley: Get Up, Stand Up", "author": "Cedella Marley", "level": "Elementary School" },
        { "title": "Based on the song by Bob Marley: One Love", "author": "Cedella Marley", "level": "Elementary School" },
        { "title": "Blood Debts", "author": "Terry Benton-Walker", "level": "High School" },
        { "title": "Blood In The Water", "author": "Tiffany D. Jackson", "level": "Middle School" },
        { "title": "Brown Girl Dreaming", "author": "Jacqueline Woodson", "level": "High School" },
        { "title": "Can't Get Enough", "author": "Kennedy Ryan", "level": "College" },
        { "title": "Carla and the Christmas Cornbread", "author": "Carla Hall", "level": "Elementary School" },
        { "title": "Genesis Begins Again", "author": "Alicia D. Williams", "level": "High School" },
        { "title": "Happy Here", "author": "Sharna Jackson", "level": "Middle School" },
        { "title": "I Believe I Can", "author": "Grace Byers", "level": "Elementary School" },
        { "title": "I Promise", "author": "Lebron James", "level": "Elementary School" },
        { "title": "J.D. And The Family Business", "author": "J. Dillard", "level": "Elementary School" },
        { "title": "Jackpot: All Bets are Off", "author": "Nic Stone", "level": "High School" },
        { "title": "Joyful Joyful", "author": "Dapo Adeola & Patrice Lawrence", "level": "Elementary School" },
        { "title": "Kevin's Big Feelings", "author": "Caleb Ellis Books", "level": "Elementary School" },
        { "title": "Kofi And The Rap Battle Summer", "author": "Jeffrey Boakye", "level": "Middle School" },
        { "title": "Little Legends; Exceptional Men in Black History", "author": "Vashti Harrison", "level": "Elementary School" },
        { "title": "Love is a Revolution", "author": "Renee Watson", "level": "College" },
        { "title": "Love Radio", "author": "Ebony LaDelle", "level": "High School" },
        { "title": "Miles Lewis Whiz Kid", "author": "Kelly Starling Lyons", "level": "Elementary School" },
        { "title": "More Than Peach", "author": "Bellen Woodard", "level": "Elementary School" },
        { "title": "Never Wraith", "author": "Shakir Rashaan", "level": "High School" },
        { "title": "Nubia The Awakening", "author": "Omar Epps & Clarence A. Haynes", "level": "Middle School" },
        { "title": "Only Black Girls in Town", "author": "Brandy Colbert", "level": "High School" },
        { "title": "Our Story Starts in Africa", "author": "Patrice Lawrence / Jeanetta Gonzales", "level": "Elementary School" },
        { "title": "Parable of the Sower", "author": "Octavia Butler", "level": "High School" },
        { "title": "Piecing Me Together", "author": "Renee Watson", "level": "High School" },
        { "title": "Promise Boys", "author": "Nick Brooks", "level": "Middle School" },
        { "title": "Sadiq And The Gamers", "author": "Siman Nuurali", "level": "Elementary School" },
        { "title": "Savannah's Savings Jar", "author": "Chelsea Addison", "level": "Elementary School" },
        { "title": "TCR: Decodable Books", "author": "Toddlers Can Read LLC / Spencer Russell", "level": "Preschool" },
        { "title": "The Adventures of Qai Qai", "author": "Serena Williams", "level": "Elementary School" },
        { "title": "The Getaway", "author": "Lamar Giles", "level": "Middle School" },
        { "title": "The Girl With The Louding Voice", "author": "Abi Dare", "level": "High School" },
        { "title": "The Last Day Of Summer", "author": "Lamar Giles", "level": "Middle School" },
        { "title": "The Wind On Her Tongue", "author": "Anita Kopacz", "level": "High School" },
        { "title": "Untethered", "author": "Angela Jackson-Brown", "level": "High School" },
        { "title": "Voices Of The Harlem Renaissance", "author": "Alain Locke", "level": "Middle School" },
        { "title": "We March", "author": "Shane W. Evans", "level": "Elementary School" },
        { "title": "When You Were Everything", "author": "Ashley Woodfolk", "level": "Middle School" },
        { "title": "Where Hands Go", "author": "Krystaelynne Sanders Diggs", "level": "Elementary School" }
    ])




    function sortByName(): void {
        books.sort((a, b) => a.title.localeCompare(b.title));
        setBooks([...books]);
    }

    function sortByAuthor(): void {
        books.sort((a, b) => a.author.localeCompare(b.author));
        setBooks([...books]);
    }

    function sortByLevel(): void {
        books.sort((a, b) => a.level.localeCompare(b.level));
        setBooks([...books]);
    }

    return (
        <>
            <ContentPageHeader src="/img/reads/readsheader.png" title="Essential Reads for Every Child" />
            <Container data-aos="fade-up">
                <h4>Making Reading Fundamental</h4>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead className="table-dark" style={{ backgroundColor: '#053043' }}>
                                <tr>
                                    <th style={{ backgroundColor: '#053043' }} ><div className="clickable" onClick={sortByName}>Title</div></th>
                                    <th style={{ backgroundColor: '#053043' }} ><div className="clickable" onClick={sortByAuthor}>Author</div></th>
                                    <th style={{ backgroundColor: '#053043' }} ><div className="clickable" onClick={sortByLevel}>Level</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book, index) => (
                                    <tr key={index}>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.level}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
           



        </>
    );
};

export default ChildReads;