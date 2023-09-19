import { Link } from "react-router-dom";
import home from "../assets/home-icon.png";
import "../App.css";

function Navbar() {
    return (
        <div className="Navbar" >
         <Link to="/"><img src={home} /></Link>
        </div>
    );
}

export default Navbar;
