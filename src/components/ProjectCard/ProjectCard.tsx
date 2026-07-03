import "./ProjectCard.css";
import type { Project } from "../../types/Project";

interface ProjectCardProps {
    readonly project: Project;
    readonly onOpen: (project: Project) => void;
}

export default function ProjectCard({
    project,
    onOpen,
}: ProjectCardProps) {
    return (
        <article className="project-card">
            <img
                src={project.image}
                alt={project.title}
            />

            <div className="project-content">
                <div className="project-header">
                    <h3>{project.title}</h3>
                    <span>{project.year}</span>
                </div>
            
                <p>{project.shortDescription}</p>

                <p className="project-arrow">See Case Study ➜</p>

            </div>
            <button className="project-card-link" onClick={() => onOpen(project)}></button>
        </article>
    );
}