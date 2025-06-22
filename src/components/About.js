import React from 'react';

const About = () => (
  <section className="about">
    <div className="about-image">
     <img src="/assets/images/profile2.png" alt="profile2" />
    </div>
    <div className="about-content">
      <h2>About Me</h2>
      <p>I am a tech lover, i'm love web development and product designing and realy passionate about making our community a better place.</p>
      <div className="skills">
        <label>Frontend Developer</label>
        <div className="progress"><div style={{ width: '90%' }}></div></div>
        <label>Website Design</label>
        <div className="progress"><div style={{ width: '80%' }}></div></div>
        <label>Product Design</label>
        <div className="progress"><div style={{ width: '85%' }}></div></div>
        
      </div>
    </div>
  </section>
);

export default About;