import "./ContactIntro.css";
import gmail from "../../assets/images/icons/gmail.png";
import linkedin from "../../assets/images/icons/linkedin.png";
import whatsapp from "../../assets/images/icons/whatsapp.png";
import location from "../../assets/images/icons/location.png";

import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

export default function ContactIntro() {

    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from((".social-icon"), {
            opacity: 0,
            y: 80,
            stagger: 0.12,
            ease: "power1.in",
            duration: 0.6,
        },);
    }, { scope: sectionRef });

    return (
        <div className="contact-intro" ref={sectionRef}>
            <h1 className="contact-title">Let's work together</h1>
            <p className="contact-description">
                I'm always open to new opportunities, creative collaborations,
                and meaningful projects. Whether you're looking for a frontend
                developer, have a project you'd like to discuss, or simply want
                to connect, feel free to reach out. I'd love to hear from you!
            </p>

            <div className="social-icons">
                <div className="social-icon">
                    <img src={gmail} alt="Gmail" />
                    <h2>Email</h2>
                    <a href="mailto:boutserou@gmail.com">boutserou@gmail.com</a>
                </div>
                <div className="social-icon">
                    <img src={whatsapp} alt="WhatsApp" />
                    <h2>Phone</h2>
                    <a href="tel:+306980599019">6980599019</a>
                </div>
                <div className="social-icon">
                    <img src={linkedin} alt="LinkedIn" />
                    <h2>LinkedIn</h2>
                    <a href="https://www.linkedin.com/in/boutserou/">
                        Ioanna Boutserou
                    </a>
                </div>
                <div className="social-icon">
                    <img src={location} alt="Location" />
                    <h2>Located</h2>
                    <a href="https://www.google.com/maps/search/Athens%2C+Greece">
                        Athens, Greece
                    </a>
                </div>
            </div>
        </div>
    );
}