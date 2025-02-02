import beers from "../assets/beers.png";
import randomBeers from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function HomePage() {
    const { theme } = useContext(ThemeContext);
    
    return(
        <div className={theme}>
            <div>
                <img src={beers} />
                <Link to="/beers"><h2>All Beers</h2></Link>
                    <p>llorem ipsum ec etc etc</p>           
            </div>
            <div>
                <img src={randomBeers} />
                <Link to="/random-beer"><h2>Random Beer</h2></Link>
                <p>llorem ipsum ec etc etc</p>
            </div>
            <div>
                <img src={newBeer} />
                <Link to="/new-beer"><h2>New Beer</h2></Link> 
                <p>llorem ipsum ec etc etc</p>
            </div>
        </div>
    );
}

export default HomePage;
