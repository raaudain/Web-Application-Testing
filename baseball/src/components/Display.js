import React, { useState } from "react";
import { Dashboard } from "./Dashboard";

export default function Display() {

    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [hits, setHits] = useState(0);

    return(
        <div>
            <div>Strikes: {strikes}</div>
            <div>Balls: {balls}</div>
            <div>Fouls: {fouls}</div>
            <div>Hits: {hits}</div>

            <Dashboard 
                strikes={strikes}
                setStrikes={setStrikes}
                balls={balls}
                setBalls={setBalls}
                fouls={fouls}
                setFouls={setFouls}
                hits={hits}
                setHits={setHits}
            />
        </div>
    )
}