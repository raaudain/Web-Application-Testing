import React, {useState} from "react";
import { Dashboard } from "./Dashboard";

export const Display = () => {
    
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [hits, setHits] = useState(0);

    return(
        <div className="container">
            
            <div className="strikesCount">Strikes: {strikes}</div>
            <div className="ballsCount">Balls: {balls}</div>
            <div className="foulsCount">Fouls: {fouls}</div>
            <div className="hitsCount">Hits: {hits}</div>
            
            <Dashboard 
            balls = {balls}
            setBalls={setBalls}
            strikes={strikes}
            setStrikes={setStrikes}
            fouls={fouls}
            setFouls={setFouls}
            hits={hits}
            setHits={setHits}
            />
        </div>
    )
}