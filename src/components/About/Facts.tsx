import "./About.css"
import games from "../../assets/images/icons/games.png";
import moon from "../../assets/images/icons/moon.png";
import drink from "../../assets/images/icons/cup-of-drink.png";
import folder from "../../assets/images/icons/folder.png";


export default function FunFacts() {
  return (
        <div className="funfacts">
            <h2>Outside the Code</h2>
            <div className="fact-cards">
                <div className="fact-card">
                    <img src={drink} alt="drink"/>
                    <h3>Drink of Choice</h3>
                    <p>Chocolate over Coffee!</p>
                </div>
                <div className="fact-card">
                    <img src={moon} alt="moon"/>
                    <h3>Most Productive</h3>
                    <p>Early mornings and late nights</p>
                </div>
                <div className="fact-card">
                    <img src={games} alt="game"/>
                    <h3>Gaming</h3>
                    <p>I love both console and pc gaming</p>
                </div>
                <div className="fact-card">
                    <img src={folder} alt="folder"/>
                    <h3>Organised in Chaos</h3>
                    <p>I like to keep my folders clean and organised</p>
                </div>
            </div>
        </div>
    );
}