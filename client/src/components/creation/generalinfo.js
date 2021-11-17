import React, {useState, useEffect} from 'react';
import RaceCard from './races';

export default function GeneralInfo(){
    const [raceList, setRaceList] = useState([])

    useEffect(() =>{
        fetch("/races").then((r) => {
            if (r.ok) {
              r.json().then((races) => {
                setRaceList(races)
                console.log(races)
              });
            }
    });
}, [])

    // const races = raceList.map((race) => <raceCard/>)

    return ( 

        <form>
            Name:<input/> <br/>
            Image url: <input/> <br/>
            Please Select a race:
            
            {raceList.map((race) => <RaceCard race = {race.name} key = {race.id}/>)}
            
            <button> Next</button>

        </form>
    )
}