import { useState,useEffect } from "react";
import axios from "axios";
import {Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    const [query, setQuery] = useState(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        var url = "https://ih-beers-api2.herokuapp.com/beers";
        if(query && query.length > 0)
            url= "https://ih-beers-api2.herokuapp.com/beers/search?q="+ query;

        axios.get(url)
        .then((response)=>{
            console.log(response);
            setBeers(response.data);
        }).catch((err) => {
            console.log(err);
        });
    },[query]);

    function filter(text) {
        setQuery(text);
    }
    
    return (
        <div className={theme}>
        Search <input type="text" onChange={() => filter(event.target.value)} />
        {beers.length>0 && beers.map(beer =>
            <div key={beer._id}  className="card">
                <div className={theme}>
                    <div className="col">
                        <img src={beer.image_url} style={{width:"100px"}} />
                    </div>
                    <div className="col">
                        <Link to={"/beers/"+beer._id}>
                            <h2>{beer.name}</h2>
                        </Link>
                        <div className="text-secondary">{beer.tagline}</div>
                        <span className={theme}>Created by {beer.contributed_by}</span>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
}

export default AllBeersPage;
