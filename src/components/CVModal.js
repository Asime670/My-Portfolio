import React from 'react';
import { personalInfo, projectsData } from '../data/portfolioData';

const CVModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="cv-modal-overlay" onClick={onClose}>
            <div className="cv-modal-container" onClick={(e) => e.stopPropagation()}>
                {/* Modal Toolbar - Hidden during print */}
                <div className="cv-modal-header no-print">
                    <div className="cv-modal-title">Dynamic Curriculum Vitae</div>
                    <div className="cv-modal-actions">
                        <button className="cv-print-btn" onClick={handlePrint}>
                            🖨️ Print / Save as PDF
                        </button>
                        <button className="cv-close-btn" onClick={onClose}>
                            ✖ Close
                        </button>
                    </div>
                </div>

                {/* Printable CV Document Content */}
                <div className="cv-document" id="cv-document">
                    <header className="cv-header">
                        <h1>{personalInfo.name}</h1>
                        <h2>{personalInfo.title}</h2>
                        <div className="cv-contact-info">
                            <span>📍 {personalInfo.location}</span> | 
                            <span> 📧 {personalInfo.email}</span> | 
                            <span> 📞 {personalInfo.phone}</span>
                        </div>
                    </header>

                    <hr className="cv-divider" />

                    <section className="cv-section">
                        <h3>Professional Summary</h3>
                        <p>{personalInfo.summary}</p>
                    </section>

                    <section className="cv-section">
                        <h3>Technical Skills</h3>
                        <ul className="cv-skills-list">
                            {personalInfo.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="cv-section">
                        <h3>Projects & Portfolio Highlights</h3>
                        <p className="cv-section-note">
                            <em>(Dynamically updated from live portfolio)</em>
                        </p>
                        <div className="cv-projects-list">
                            {projectsData.map((project, index) => (
                                <div className="cv-project-item" key={index}>
                                    <div className="cv-project-header">
                                        <h4>{project.title}</h4>
                                        <span className="cv-project-category">{project.category}</span>
                                    </div>
                                    <p className="cv-project-desc">{project.description}</p>
                                    {project.highlights && (
                                        <p className="cv-project-highlights">
                                            <strong>Key Features:</strong> {project.highlights}
                                        </p>
                                    )}
                                    {project.hasLink && (
                                        <p className="cv-project-link">
                                            <strong>Live Link:</strong>{' '}
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                {project.link}
                                            </a>
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CVModal;
