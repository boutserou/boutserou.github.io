import "./ProjectModal.css";
import type { Project } from "../../types/Project";

import { useEffect } from "react";

interface ProjectModalProps {
    readonly project: Project;
    readonly onClose: () => void;
}


export default function ProjectModal(
    {
        project,
        onClose,
    }: ProjectModalProps) 
    {

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        document.documentElement.style.overflowY = "hidden";

        return () => {
            document.body.style.overflowY = "";
            document.documentElement.style.overflowY = "";
        };
    }, []);


    return (
        <div className="project-modal-overlay" onClick={onClose}>
            

            <div className="project-modal" onClick={(e) => e.stopPropagation()}>

                <button
                    className="close-button"
                    onClick={onClose}
                >
                    ✕
                </button>

                <h2>{project.title}</h2>

                <p>{project.longDescription}</p>

                <div className="modal-grid">
                    <div className="modal-list">
                        <h3>Development Process</h3>

                        <ul>
                            {project.developmentProcess.map((step) => (
                                <li key={step}>{step}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="modal-list">
                        <h3>Technologies Used:</h3>
                        
                        <ul>
                            {project.technologies.map((technology) => (
                                <li key={technology}>
                                    {technology}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <img
                    src={project.image}
                    alt={project.title}
                />

                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Website
                </a>

            </div>

        </div>
    );
}