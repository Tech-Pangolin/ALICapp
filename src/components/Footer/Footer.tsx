import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Youtube } from 'react-bootstrap-icons';
import ContactForm from '../ContactForm';

const Footer: React.FC = () => {
    return (
        <footer id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="footer-logo">
                        <img src="/img/atlifelogo.png" alt="ALIC Logo" className='img-fluid' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-2">
                        <h5>Connect with Us</h5>
                        <div className="social-icons mb-5">
                            <a href="https://www.instagram.com/atlantalife" target="_blank" rel="noopener noreferrer" className="me-3">
                                <Instagram size={25} color={"#0B3144"} />
                            </a>
                            <a href="https://twitter.com/atlantalifeins" target="_blank" rel="noopener noreferrer" className="me-3">
                                <Twitter size={25} color={"#0B3144"} />
                            </a>
                            <a href="https://www.facebook.com/atlantalifeins/" target="_blank" rel="noopener noreferrer" className="me-3">
                                <Facebook size={25} color={"#0B3144"} />
                            </a>
                            <a href="https://www.linkedin.com/company/atlanta-life-insurance-company/" target="_blank" rel="noopener noreferrer" className="me-3">
                                <Linkedin size={25} color={"#0B3144"} />
                            </a>
                            <a href="https://www.youtube.com/@atlantalifeinsurance1624" target="_blank" rel="noopener noreferrer">
                                <Youtube size={25} color={"#0B3144"} />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-2 contactus">
                        <h5>Contact Us</h5>
                        <h6>Address</h6>
                        <p>600 Peachtree St NE,<br />
                            Suite 2350,<br />
                            Atlanta, GA 30308</p>
                        <h6>Hours of Operation</h6>
                        <p>Monday-Friday<br />
                            9am-5pm<br />
                            *Holidays may affect hours</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <h6 style={{ marginTop: "25px" }}>Contact Business Development</h6>
                        <p>Businessdevelopment@Atlantalife.com</p>

                        <h6 className="mt-3">
                            Contact our Office
                        </h6>
                        <p>
                            Info@atlantalife.com<br/>

                            (888) 407-3209
                        </p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h6></h6>
                        <ContactForm />
                    </div>
                </div>
              
            </div>


        </footer>
    );
};

export default Footer;