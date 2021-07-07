import React from "react";

export const Dashboard = props => {

    // Resets strikes when it's equal to 3
    if(props.strikes > 2){
        props.setStrikes(0);
        return props.strikes;
    }

    // Resets balls when it's equal to 4
    if(props.balls > 3){
        props.setBalls(0);
        return props.balls;
    }

    // Strikes are added when there is a foul until strikes equals 2
    const addStrikes = () => {
        while(props.strikes !== 2){
            props.setStrikes(props.strikes+1);
            return props.strikes;
        } 
    }

    return(
        <div>
            <button onClick={() => props.setStrikes(props.strikes+1)}>Strikes</button>
            <button onClick={() => props.setBalls(props.balls+1)}>Balls</button>
            <button onClick={() => props.setFouls(props.fouls+1, addStrikes())}>Fouls</button>
            <button onClick={() => props.setHits(props.hits+1, props.setStrikes(0), props.setFouls(0))}>Hits</button>
        </div>
    )
} 

