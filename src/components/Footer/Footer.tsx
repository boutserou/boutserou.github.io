import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">Interested in working together?</div>
            <Link to="/contact">Contact me</Link>
            <ul>
                <li><Link to="mailto:boutserou@gmail.com">boutserou@gmail.com</Link></li>
                <li><Link to="tel:+306980599019">+306980599019</Link></li>
            </ul>
            <p>© 2026</p>
        </div>
    );
} 