import React from 'react';

const Hero = () => (
  <header className="hero" id="home">
    <div className="hero-content">
      <p>Hi, I am</p>
      <h1> Asime Domitila </h1>
      <h2>Frontend Doveloper</h2>
      <p className="hero-desc">Passionate about building a better tomorrow for all.</p>
      <a href="#contact" className="btn">Hire Me</a>
      <a href="/assets/cv.pdf" className="btn" target="_blank" rel="noopener noreferrer" download style={{ marginLeft: '10px' }}>Download CV</a>
    </div>
    <div className="hero-image">
      <img src="/assets/images/profile.png" alt="profile" />
    </div>
    <div className="right">
      <div className="icons">
        <img className="icon" src="assets/icons/facebook.png" alt="Facebook" />
        <img className="icon" src="assets/icons/twitter.png" alt="Twitter" />
        <img className="icon" src="assets/icons/linkedin.png" alt="LinkedIn" />
        <img className="icon" src="assets/icons/instagram.png" alt="Instagram" />
      </div>
    </div>
  </header>
);

export default Hero;