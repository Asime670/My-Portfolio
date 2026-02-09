import React from 'react';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-section about">
        <h2>About Me</h2>
        <p>I am a Frontend Developer with hands-on experience building responsive and user-friendly web applications using React.js and Next.js. Passionate about turning ideas into clean, functional digital solutions. Highly motivated, adaptable, and always open to learning new technologies and improving technical skills.</p>
      </div>
      <div className="footer-section links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section services">
        <h2>Services</h2>
        <ul>
          <li><a href="#">Frontend Developer</a></li>
          <li><a href="#">Project Manager</a></li>
        </ul>
      </div>

    </div>
    <div className="footer-bottom">
      <p>© 2025 <span> Asime Domitila</span>. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;