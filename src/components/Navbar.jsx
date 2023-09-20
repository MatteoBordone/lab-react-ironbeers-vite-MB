import { Link } from "react-router-dom";
import home from "../assets/home-icon.png";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <nav className={"Navbar " + theme} >
            <div className={theme}>
            <Link to="/"><img src={home} /></Link>
            </div>
            <button className="theme-btn" onClick={toggleTheme}>
                {theme === "light" ? "dark " : "light "}
            </button>
        </nav>
    );
}

export default Navbar;
