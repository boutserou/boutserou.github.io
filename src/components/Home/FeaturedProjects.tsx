import "./FeaturedProjects.css";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

import { useState } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import type { Project } from "../../types/Project";

export default function FeaturedProjects() {

    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);
    
    return ( 
        <>
            <section className="home-projects">
                <h2>Featured Projects</h2>
                <div className="project-grid">
                    {projects
                        .filter(project => project.featured)
                        .map(project => (

                            <ProjectCard
                                key={project.id}
                                project={project}
                                onOpen={setSelectedProject}
                            />

                        ))}

                </div>
            </section>
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />

            )}
        </>
    );
}