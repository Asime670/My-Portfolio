import React from 'react';

const Hero = ({ onOpenCV }) => (
  <header className="hero" id="home">
    <div className="hero-content">
      <p>Hi, I am</p>
      <h1> Asime Domitila </h1>
      <h2>Frontend Developer</h2>
      <p className="hero-desc">Passionate about building a better tomorrow for all.</p>
      <a href="#contact" className="btn">Hire Me</a>
      <button 
        className="btn" 
        onClick={onOpenCV} 
        style={{ marginLeft: '10px', cursor: 'pointer', border: 'none' }}
      >
        View / Print CV
      </button>
    </div>
    <div className="hero-image">
      <img src="/assets/images/profile.png" alt="profile" />
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