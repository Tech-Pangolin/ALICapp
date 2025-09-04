import { NavDropdown } from "react-bootstrap";
import type { MenuProps } from "../../types";
import { useState } from "react";

const ContactMenu = ({ variant = 'desktop' }: MenuProps) => {
  if (variant === 'mobile') {
    return (
      <NavDropdown title="Contact" id="mobile-contact-dropdown">
        <NavDropdown.Item href="#contact-form">Contact Form</NavDropdown.Item>
        <NavDropdown.Item href="#general-inquiry">General Inquiry</NavDropdown.Item>
        <NavDropdown.Item href="#support">Support</NavDropdown.Item>
      </NavDropdown>
    );
  }

  const devStyles = {
    // Container styles
    menuContainer: {
      padding: '40px 0',
      borderRadius: '8px',
      backgroundColor: '#f0f4f8'
    },

    // Left column styles
    leftColumn: {
      padding: '20px 0',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center'
    },

    // Gradient header styles
    gradientHeader: {
      background: 'linear-gradient(90deg, #2c3e50 0%, #f39c12 100%)',
      color: 'white',
      padding: '20px 30px',
      borderRadius: '8px',
      textAlign: 'center' as const,
      fontSize: '1.2rem',
      fontWeight: '700',
      textTransform: 'uppercase' as const,
      letterSpacing: '1px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },

    // Right column styles
    rightColumn: {
      backgroundColor: '#f1f3f4',
      padding: '30px',
      borderRadius: '8px',
      borderLeft: '1px solid #d1d5db'
    },

    // Form styles
    formGroup: {
      marginBottom: '25px'
    },

    formLabel: {
      fontSize: '0.85rem',
      fontWeight: '700',
      color: '#2c3e50',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5px',
      marginBottom: '8px',
      display: 'block'
    },

    formInput: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      backgroundColor: '#e8e7e7',
      fontSize: '0.9rem',
      color: '#2c3e50',
      transition: 'border-color 0.2s ease'
    },

    formTextarea: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      backgroundColor: '#e8e7e7',
      fontSize: '0.9rem',
      color: '#2c3e50',
      minHeight: '120px',
      resize: 'vertical' as const,
      transition: 'border-color 0.2s ease'
    },

    // Row layout for name and email
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px'
    }
  };

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
    <div className="contact-menu-container w-100" style={devStyles.menuContainer}>
      <form onSubmit={handleSubmit}>
        <div className="row g-0 w-100">
          {/* Left Column - Gradient Header */}
          <div className="col-lg-3">
            <div className="left-column" style={devStyles.leftColumn}>
              <button type="submit" className="gradient-header" style={devStyles.gradientHeader}>
                SEND US A MESSAGE
              </button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-lg-9">
            <div className="right-column" style={devStyles.rightColumn}>
              <form>
                {/* Name and Email Row */}
                <div className="form-row" style={devStyles.formRow}>
                  <div className="form-group" style={devStyles.formGroup}>
                    <label htmlFor="name" style={devStyles.formLabel}>NAME</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      style={devStyles.formInput}
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group" style={devStyles.formGroup}>
                    <label htmlFor="email" style={devStyles.formLabel}>EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      style={devStyles.formInput}
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="form-group" style={devStyles.formGroup}>
                  <label htmlFor="subject" style={devStyles.formLabel}>SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    style={devStyles.formInput}
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                {/* Message Field */}
                <div className="form-group" style={devStyles.formGroup}>
                  <label htmlFor="message" style={devStyles.formLabel}>TYPE MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    style={devStyles.formTextarea}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactMenu;