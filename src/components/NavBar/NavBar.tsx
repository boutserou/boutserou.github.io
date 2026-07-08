import "./NavBar.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    useGSAP(() => {
        if (!isOpen) return;
        const tl = gsap.timeline();
        tl.from(".nav-menu", {
            y: -20,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
        });
        tl.from(".nav-menu li", {
            x: -20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.3,
            ease: "power2.out",
        }, "-=0.15");
    }, [isOpen]);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="nav-bar">
            <button
                className={`burger ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation">
                <span />
                <span />
                <span />
            </button>

            {isOpen && (
                <ul className="nav-menu">
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
            )}

        </nav>
    );
}