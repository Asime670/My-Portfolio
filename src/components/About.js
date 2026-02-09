import React from 'react';

const About = () => (
  <section className="about" id="about">
    <div className="about-image">
      <img src="/assets/images/profile2.png" alt="profile2" />
    </div>
    <div className="about-content">
      <h2>About Me</h2>
      <p>I am a Frontend Developer with hands-on experience building responsive and user-friendly web applications using React.js and Next.js. Passionate about turning ideas into clean, functional digital solutions. Highly motivated, adaptable, and always open to learning new technologies and improving technical skills.</p>
      <div className="skills">
        <label>Frontend Developer</label>
        <div className="progress"><div style={{ width: '90%' }}></div></div>
        <label>Project Manager</label>
        <div className="progress"><div style={{ width: '80%' }}></div></div>

      </div>
    </div>
  </section>
);

export default About;