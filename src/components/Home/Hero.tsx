import "./Hero.css";
import JoImage from "../../assets/images/jo.jpg";

export default function Hero() {
    return (
        <div className="rel">
            <section className="hero-section">
                <h1>Joanna Boutserou</h1>
                <h2>Frontend Developer</h2>
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