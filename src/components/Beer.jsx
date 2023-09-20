import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

export default function Beer({beer}) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <img src={beer.image_url} style={{width:"100px", alignSelf:"center"}} />
            <div className="row align-items-start">
                <div className="col">
                    <h2>{beer.name}</h2>
                    <div className="text-secondary">{beer.tagline}</div>
                </div>
                <div className="col" style={{textAlign: "right"}}>
                    <div className="text-secondary">{beer.attenuation_level}</div>
                    <div className={theme}>{beer.first_brewed}</div>
                </div>
            </div>
            <p>{beer.description}</p>
            <div className="text-secondary">{beer.contributed_by}</div>
        </div>
    )
}