import React from "react";

export const Dashboard = props => {

  
    if(props.strikes>3 || props.hits>0){
        props.setStrikes(0)
    }
    
    if(props.balls>4 || props.hits>0){
        props.setBalls(0);
    }
   
   const addFoul = () =>{
        if(props.strikes < 2)
            return props.strikes+1;  
        else{
            return props.strikes, console.log(props.strikes);
        }
    }
    

    return(
        <div>
        
            <button className="strikeBtn" 
            onClick={() => props.setStrikes(props.strikes+1)}>Strikes</button>
            
            <button className="ballBtn"
            onClick={() => props.setBalls(props.balls+1)}>Balls</button>
            
            <button className="foulBtn"
            onClick={() =>  
                props.setFouls(addFoul())}
            >Foul</button>

            <button className="hitBtn"
            onClick={() => props.setHits(props.hits+1)}>Hit</button>

        </div>
    )
}