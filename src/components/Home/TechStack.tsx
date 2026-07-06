import "./TechStack.css";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

import { techStack } from "../../data/techStack";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState(0);

    const contentRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    const changeTab = (index: number) => {
        if (index === activeTab) return;
        if (!timelineRef.current) return;
        gsap.to(timelineRef.current, {
            clipPath: "inset(0 0 0 100%)",
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => setActiveTab(index),
        });
    };

    useGSAP(() => {
        const q = gsap.utils.selector(contentRef);
        const tl = gsap.timeline();
        tl.from(timelineRef.current, {
            clipPath: "inset(0 100% 0 0)",
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
        });
        tl.from(q(".tech-node.top"), {
            y: -20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
        }, 0);
        tl.from(q(".tech-node.bottom"), {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
        }, 0);
    }, {
        scope: contentRef,
        dependencies: [activeTab],
    });

    return (
        <section className="tech-stack">
            <div className="tech-flex">
                <h2>Technologies</h2>
                <div className="tech-tabs">
                    {techStack.map((category, index) => (
                        <button
                            key={category.title}
                            className={activeTab === index ? "active" : ""}
                            onClick={() => changeTab(index)}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
            </div>

            <div className="tech-content" ref={contentRef} >
                <div className="timeline" key={activeTab} ref={timelineRef} >
                    {techStack[activeTab].technologies.map((tech, index) => (
                        <div key={tech} className={`tech-node ${index % 2 === 0 ? "top" : "bottom"}`}>
                            <span className="tech-label"> {tech} </span>
                            <div className="circle" />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}