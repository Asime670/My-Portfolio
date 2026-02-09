import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Construct the message for WhatsApp
    const whatsappMessage = `*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;

    // WhatsApp API URL check
    const whatsappUrl = `https://wa.me/237670199859?text=${whatsappMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact-section" id="contact">
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;