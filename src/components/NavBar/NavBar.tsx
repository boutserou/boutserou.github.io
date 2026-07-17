import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

import { useRef, useEffect } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

import { useUI } from "../../context/UIContent";

export default function NavBar() {
    const location = useLocation();
    const mobileMenuRef = useRef<HTMLUListElement>(null);
    const tl = useRef<GSAPTimeline | null>(null);
    const {
        isMenuOpen,
        setIsMenuOpen,
        isModalOpen,
    } = useUI();

    useGSAP(() => {

        if (!mobileMenuRef.current) return;

        gsap.set(mobileMenuRef.current, {
            autoAlpha: 0,
            y: -20,
        });

        tl.current = gsap.timeline({ paused: true });

        tl.current
            .to(mobileMenuRef.current, {
                autoAlpha: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
            })
            .from(
                ".mobile-nav li",
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

        if (window.innerWidth > 768) return;

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

            {/* Desktop */}
            <div className="desktop-nav">
                <Link to="/" className="nav-logo">JOANNA BOUTSEROU</Link>
                <ul>
                    <li><Link to="/projects">SKILLS</Link></li>
                    <li><Link to="/projects">PROJECTS</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><Link to="/contact">GET IN TOUCH</Link></li>
                </ul>
            </div>
            

            {/* Mobile */}

            <button
                disabled={isModalOpen}
                className={`burger ${isMenuOpen ? "open" : ""}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span />
                <span />
                <span />
            </button>

            <ul
                ref={mobileMenuRef}
                className="mobile-nav"
            >
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>

        </nav>
    );
}