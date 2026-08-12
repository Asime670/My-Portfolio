import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Automated-MCQ',
            description: 'An automated multiple-choice question system for online testing, exam management, and instant score evaluation.',
            link: 'https://automatedmcqsystemasimedomitila.vercel.app/',
            hasLink: true
        },
        {
            title: 'Streaming Platform',
            description: 'A real-time live streaming platform designed for seamless video broadcasting and interactive user experiences.',
            link: 'https://livestreamingplatform.vercel.app/',
            hasLink: true
        },
        {
            title: 'Cookpal',
            description: 'A comprehensive recipe application showcasing various cuisines and cooking techniques.',
            link: 'http://cookpal-app.vercel.app/',
            hasLink: true
        },
        {
            title: 'Weather Website',
            description: 'A real-time weather forecasting application providing accurate weather data for cities worldwide.',
            link: '#',
            hasLink: false
        },
        {
            title: 'HairHub',
            description: 'A luxury hair platform dedicated to helping you find premium quality hair products and styles. Elevating your hair experience with curated, high-end collections.',
            link: '#',
            hasLink: false
        }
    ];

    const handleCardClick = (link, hasLink, e) => {
        if (!hasLink || link === '#') return;
        // Avoid double triggering if clicking direct link button
        if (e.target.tagName.toLowerCase() === 'a') return;
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div 
                        className={`project-card ${project.hasLink ? 'clickable' : ''}`} 
                        key={index}
                        onClick={(e) => handleCardClick(project.link, project.hasLink, e)}
                    >
                        {project.pending && <span className="pending-badge">Pending</span>}
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.hasLink ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                View Project
                            </a>
                        ) : (
                            <span className="no-link">In Progress</span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
