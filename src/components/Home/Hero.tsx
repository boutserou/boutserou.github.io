import "./Hero.css";
import JoImage from "../../assets/images/jo.jpg";

import { gsap, useGSAP } from "../../lib/gsap";


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
                    <p>I am an Informatics Technician Graduate with experience in Web Development. I am highly interested in Software Development, and have general knowledge in all sorts of applications and frameworks.</p>
                    <div className="about-buttons">
                        <a href="/">Read More</a>
                        <a href="/contact">Get In Touch</a>
                    </div>
                </div>
            </section>
        </div>
    );
}