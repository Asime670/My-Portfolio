import React from 'react';

const Contact = () => (
  <section className="contact-section">
    <div className="contact-container">
      <div className="contact-info">
        <h2>Let's Connect</h2>
        <p><strong>Location:</strong> Bambili, Bamenda</p>
        <p><strong>Email:</strong> asimedomitila167@gmail.com</p>
        <p><strong>Phone:</strong> (237) 670 19 98 59</p>
        <div className="social-icons">
          <span>f</span>
          <span>t</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
      </div>
      <div className="contact-form">
        <h2>Get in <span>Touch</span></h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;