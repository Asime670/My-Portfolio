import React from 'react';

const Projects = () => {
    const projects = [
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
        }
    ];

    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
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
