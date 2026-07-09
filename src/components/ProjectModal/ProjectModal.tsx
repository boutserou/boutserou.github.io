import "./ProjectModal.css";
import type { Project } from "../../types/Project";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useUI } from "../../context/UIContent";

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
        setIsMenuOpen(false);
        setIsModalOpen(true);

        document.body.style.overflowY = "hidden";
        document.documentElement.style.overflowY = "hidden";
        return () => {
            setIsModalOpen(false);
            document.body.style.overflowY = "";
            document.documentElement.style.overflowY = "";
        };
    }, []);

    const {
        setIsMenuOpen,
        setIsModalOpen,
    } = useUI();

    return createPortal(
        <div className="project-modal-overlay" onClick={onClose}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    ✕
                </button>

                <h2>{project.title}</h2>

                <p>{project.longDescription}</p>

                <div className="modal-grid">
                    <div className="modal-list-l">
                        <h3>Development Process</h3>

                        <ul>
                            {project.developmentProcess.map((step) => (
                                <li key={step}>{step}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="modal-list-r">
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
        </div>,
        document.body
    );
}