import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

import { useRef, useEffect } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

import { useUI } from "../../context/UIContent";

export default function NavBar() {
    const location = useLocation();
    const menuRef = useRef<HTMLUListElement>(null);
    const tl = useRef<GSAPTimeline | null>(null);
    const {
        isMenuOpen,
        setIsMenuOpen,
        isModalOpen,
    } = useUI();

    useGSAP(() => {

        if (!menuRef.current) return;

        gsap.set(menuRef.current, {
            autoAlpha: 0,
            y: -20,
        });

        tl.current = gsap.timeline({ paused: true });

        tl.current
            .to(menuRef.current, {
                autoAlpha: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
            })
            .from(
                ".nav-menu li",
                {
                    x: -20,
                    opacity: 0,
                    stagger: 0.08,
                    duration: 0.25,
                    ease: "power2.out",
                },
                "-=0.15"
            );
    }, []);

    useEffect(() => {
        if (!tl.current) return;

        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname, setIsMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);
    

    return (
        <nav className="nav-bar">
            <button
                disabled={isModalOpen}
                className={`burger ${isMenuOpen ? "open" : ""}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span />
                <span />
                <span />
            </button>

            <ul ref={menuRef} className="nav-menu">
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
}