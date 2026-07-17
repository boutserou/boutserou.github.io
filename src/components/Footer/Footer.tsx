import "./Footer.css";
import { Link } from "react-router-dom";

import gmail from "../../assets/images/icons/gmail.png";
import linkedin from "../../assets/images/icons/linkedin.png";
import whatsapp from "../../assets/images/icons/whatsapp.png";
import location from "../../assets/images/icons/location.png";

export default function Footer() {
    return (
        <div className="footer">
            <h2 className="white-txt contact-title">Let's work together</h2>
            <p className="white-txt contact-description">
                I'm always open to new opportunities, creative collaborations,
                and meaningful projects. Whether you're looking for a frontend
                developer, have a project you'd like to discuss, or simply want
                to connect, feel free to reach out. I'd love to hear from you!
            </p>
            
            <div className="social-icons">
                <div className="social-icon">
                    <a className="white-txt" href="mailto:boutserou@gmail.com"><img src={gmail} alt="Gmail" /></a>
                </div>
                <div className="social-icon">
                    <a className="white-txt" href="tel:+306980599019"><img src={whatsapp} alt="WhatsApp" /></a>
                </div>
                <div className="social-icon">
                    <a className="white-txt" href="https://www.linkedin.com/in/boutserou/">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                </div>
                <div className="social-icon">
                    <a className="white-txt" href="https://www.google.com/maps/search/Athens%2C+Greece">
                        <img src={location} alt="Location" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <Link to="/" className="nav-logo">JOANNA BOUTSEROU</Link>
                <p>Interested in Working Together?</p>
                <p className="white-txt credit">© 2026 Joanna Boutserou. All rights reserved.</p>
            </div>
            
        </div>
        
    );
} 