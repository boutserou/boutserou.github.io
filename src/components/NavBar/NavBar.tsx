import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}