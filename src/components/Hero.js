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
        <a 
          href="https://www.facebook.com/asime.domitilamuyang" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Facebook"
          aria-label="Facebook"
        >
          <img className="icon" src="/assets/icons/facebook.png" alt="Facebook" />
        </a>
        <a 
          href="https://x.com/AsimeDomitila" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="X (Twitter)"
          aria-label="X (Twitter)"
        >
          <img className="icon" src="/assets/icons/twitter.png" alt="X" />
        </a>
        <a 
          href="https://www.linkedin.com/in/asime-domitila-0419aa34b?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <img className="icon" src="/assets/icons/linkedin.png" alt="LinkedIn" />
        </a>
        <a 
          href="https://www.tiktok.com/@tiliazelle123?_r=1&_t=ZS-9AsMtgNvhob" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="TikTok"
          aria-label="TikTok"
        >
          <img className="icon" src="/assets/icons/tiktok.svg" alt="TikTok" />
        </a>
      </div>
    </div>
  </header>
);

export default Hero;