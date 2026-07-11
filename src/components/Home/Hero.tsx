import "./Hero.css";
import JoImage from "../../assets/images/jo.jpg";

import { gsap, useGSAP } from "../../lib/gsap";
import { Link } from "react-router-dom";


export default function Hero() {
    useGSAP(() => {
        gsap.from(".hero-section", {
        opacity: 0,
        y: -80,
        duration: 0.6,
        ease: "power1.in",
        });
        gsap.from(".about-section",{
            opacity: 0,
            y: 80,
            duration: 0.6,
            ease: "power1.out",
        })
    });

    return (
        <div className="rel">
            <section className="hero-section">
                <h1>Joanna Boutserou</h1>
                <h2>Software Developer</h2>
            </section>

            <section className="about-section">
                <div className="about-left">
                    <img
                        src={JoImage}
                        alt="Joanna"
                    />
                </div>
                <div className="about-right">
                    <h2>About me</h2>
                    <p>I am an Informatics Technician graduate with professional experience in Web Development. Passionate about software development and modern web technologies, I enjoy creating responsive, user-focused digital experiences while continuously expanding my skills through new frameworks, tools, and real-world projects.</p>
                    <div className="about-buttons">
                        <Link to="/about">Read More</Link>
                        <Link to="/contact">Get In Touch</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}