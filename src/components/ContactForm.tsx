import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    fetch("https://us-central1-greywebsupportfxns.cloudfunctions.net/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error sending your message.");
      });
    // Here you could send the data to your backend / email service
  };

  return (
<div id="contact">
          <h6 className="mb-4 ">Send Us a message</h6>
          <Form className="row" onSubmit={handleSubmit}>
            {/* Name */}
            <Form.Group className="mb-3 col" controlId="formName">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3 col" controlId="formEmail">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Subject */}
            <Form.Group className="mb-3" controlId="formSubject">
              {/* <Form.Label>Subject</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Message */}
            <Form.Group className="mb-3" controlId="formMessage">
              {/* <Form.Label>Message</Form.Label> */}
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" className="orange-btn">
                Send Message
              </Button>
            </div>
          </Form>
      </div>
  );
};

export default ContactForm;
