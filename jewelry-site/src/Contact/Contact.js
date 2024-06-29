import './Contact.css';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  return (
    <section id="contact">
      <div className="contact-heading">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-top-row">
            <div className="info-address">
              <div className="contact-icon">
                <LocationOnIcon></LocationOnIcon>
              </div>
              <h3>Our Address</h3>
              <p>123, XYZ Street, ABC City, 12345</p>
            </div>
          </div>
          <div className="info-bottom-row">
            <div className="info-email">
              <div className="contact-icon">
                <EmailIcon></EmailIcon>
              </div>
              <h3>Email Us</h3>
              <div className="emails">
                <p>info@example.com</p>
                <p>contact@example.com</p>
              </div>
            </div>
            <div className="info-phone">
              <div className="contact-icon">
                <PhoneIcon></PhoneIcon>
              </div>                
              <h3>Call Us</h3>
              <div className="phones">
                <p>123456789</p>
                <p>987654321</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form action="ENDPOINT-HERE" method="POST" className="formcarry-form">
            <div className="name-email">
              <input type="text" id="name" name="fullName" placeholder="Your Name" required />
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="subject">
              <input type="text" placeholder="Subject" required />
            </div>

            <div className="message">
              <textarea name="message" id="message" placeholder="Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
