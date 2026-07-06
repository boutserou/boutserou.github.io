export interface TechCategory {
    title: string;
    technologies: string[];
}

export const techStack: TechCategory[] = [
    {
        title: "Frontend",
        technologies: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "GSAP",
            "Vite",
        ],
    },
    {
        title: "Backend",
        technologies: [
            "WordPress",
            "WooCommerce",
            "XML",
            "PHP",
            "MySQL",
            "SQLite",
            "Java",
            "Python",
        ],
    },
    {
        title: "Tools",
        technologies: [
            "Git",
            "GitHub",
            "VS Code",
            "cPanel",
            "XAMPP",
            "Laragon",
        ],
    },
    {
        title: "Creative",
        technologies: [
            "Adobe Premiere Pro",
            "Davinci Resolve",
            "Adobe Photoshop",
            "Canva",
            "Adobe After Effects",
            "Figma",
        ],
    },
];