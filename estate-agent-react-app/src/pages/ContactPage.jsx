import React from 'react';
import './contact.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have questions about a property? Our team is here to help you find your perfect home.</p>
      </div>

      <div className="contact-grid">
        {/* Left Side: Contact Information Cards */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div>
              <h3>Visit Us</h3>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📧</div>
            <div>
              <h3>Email Us</h3>
              <p>propify.support@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <div>
              <h3>Call Us</h3>
              <p>+94 77 090 0123</p>
            </div>
          </div>
        </div>

        {/* Right Side: Simple Message Form */}
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="How can we help you?" rows="4"></textarea>
            </div>
            <button type="button" className="btn-send">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;