import React from "react";

export const Dashboard = props => {

    if(props.strikes > 3){
        props.setStrikes(0);
        return props.strikes;
    }

    if(props.balls > 4){
        props.setBalls(0);
        return props.balls;
    }

    if(props.hits){
        props.setStrikes(0);
        props.setBalls(0);
        //return props.strikes;
    }

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
            <button onClick={() => props.setHits(props.hits+1)}>Hits</button>
        </div>
    )
} 

