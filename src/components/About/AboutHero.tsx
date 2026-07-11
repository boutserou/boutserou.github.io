import "./About.css"
import JoImage from "../../assets/images/jo2.webp";

export default function AboutHero() {
  return (
        <div className="about-hero">
            <h1>About me</h1>
            <div className="whoiam">
                <div className="whoiam-left">
                    <h2>Who I am</h2>
                    <p>I'm Joanna, an Informatics Technician graduate and Web developer based in Athens, Greece.</p>
                    <p>I've always had a strong interest in web applications and the technologies behind them. Over time, that curiosity grew into a passion for coding and creating digital experiences.</p>
                    <p>Whether it's building a website, experimenting with a new framework, or refining an interface, I enjoy the process of turning ideas into polished results. There's always something new to learn, and that's one of the things I enjoy most about development.</p>
                </div>
                <img src={JoImage} alt="Joanna"/>
            </div>
        </div>
    );
}