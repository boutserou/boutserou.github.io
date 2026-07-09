import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">Interested in working together?</div>
            <a href="/contact">Contact me</a>
            <ul>
                <li><Link to="mailto:boutserou@gmail.com">boutserou@gmail.com</Link></li>
                <li><Link to="tel:+306980599019">+306980599019</Link></li>
            </ul>
        </div>
    );
}