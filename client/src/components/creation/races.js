import React from 'react';

export default function RaceCard({race, setRace}){
    
    function handleClick(e){
        e.preventDefault()
        setRace(race.id)
    }

    return(
        <>
            <button onClick ={handleClick} className="raceSelection">{race.name} </button>
        </>
    )
}
