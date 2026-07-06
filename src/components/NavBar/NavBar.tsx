import "./NavBar.css";
import { Link } from "react-router-dom";

import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(navRef.current, {
      x: -100,
      duration: 1.2,
      ease: "power1.out",
    })
    .from(".nav-bar li", {
      opacity: 0,
      stagger: 0.3,
      duration: 0.6,
      ease: "power1.inOut",
    }, "-=1");
  });

  return (
    <nav className="nav-bar" ref={navRef}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}