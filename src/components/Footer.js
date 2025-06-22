import React from 'react';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-section about">
        <h2>About Me</h2>
        <p>I'm a passionate designer and developer creating stunning digital experiences.</p>
      </div>
      <div className="footer-section links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section services">
        <h2>Services</h2>
        <ul>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">Product Design</a></li>
         
       
        </ul>
      </div>
      <div className="footer-section newsletter">
        <h2>Newsletter</h2>
        <p>Subscribe to my newsletter for the latest updates and news.</p>
        <form>
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 <span> Asime Domitila</span>. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;