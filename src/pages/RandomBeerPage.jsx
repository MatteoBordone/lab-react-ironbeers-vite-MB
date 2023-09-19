import axios from "axios";
import { useState, useEffect } from "react";
import Beer from "../components/Beer";

function RandomBeersPage() {
    const [beer, setBeer] = useState();

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response)=>{
            console.log(response);
            setBeer(response.data);
        }).catch((err) => {
            console.log(err);
        });
    },[]);

    return (
        beer && <Beer beer={beer} />
    );
}

export default RandomBeersPage;
