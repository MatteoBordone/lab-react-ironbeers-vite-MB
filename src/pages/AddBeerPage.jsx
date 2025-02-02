import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function AddBeerPage() {
    const [message,setMessage] = useState(null);
    const { theme } = useContext(ThemeContext);

    function save(event) {
        event.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
            name: document.formo.name.value,
            tagline: document.formo.tagline.value,
            description: document.formo.description.value,
            first_brewed: document.formo.first_brewed.value,
            brewers_tips: document.formo.brewers_tips.value,
            attenuation_level: document.formo.attenuation_level.value,
            contributed_by: document.formo.contributed_by.value
        })
        .then((response) => {
            console.log(response);
            if(response.status == 200)
                setMessage("Salvataggio ok");
            else
                setMessage(response.message);
        }).catch((error) => {
            setMessage(error.message);
        });
    }

    return (
        <div className={theme}>
        <form name="formo" onSubmit={save}>
            <div>Name</div>
            <div><input name="name" type="text" /></div>
            <div>Tagline</div>
            <div><input name="tagline" type="text" /></div>
            <div>Description</div>
            <div><textarea name="description" /></div>
            <div>First Brewed</div>
            <div><input name="first_brewed" type="text" /></div>
            <div>Brewer's Tips</div>
            <div><input name="brewers_tips" type="text" /></div>
            <div>Attenuation Level</div>
            <div><input name="attenuation_level" type="number" /></div>
            <div>Contributed By</div>
            <div><input name="contributed_by" type="text" /></div>
            <div><button type="submit">Save</button></div>
            <div>{message}</div>
        </form>
        </div>
    );
}

export default AddBeerPage;
