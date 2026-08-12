import React from 'react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
    const projects = projectsData;

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
