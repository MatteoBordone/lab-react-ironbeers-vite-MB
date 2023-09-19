import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Beer from "../components/Beer";

function BeerDetailsPage() {

    const [beer, setBeer] = useState();

    let beerId = useParams().beerId;

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)
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

export default BeerDetailsPage;
