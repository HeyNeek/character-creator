import React from 'react';

export default function RaceCard({race, setRace}){
    
    function handleClick(){
        // console.log(race.id)
        setRace(race.id)
    }

    return(
        <div onClick ={handleClick}>
            <h1>{race.name} </h1>
        </div>
    )
}
