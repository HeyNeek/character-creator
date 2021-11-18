import React, {useState, useEffect} from 'react';
import RaceCard from './races';

export default function GeneralInfo({setName, name, setImage, image, setRace}){
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
            <p className="generalInfoFields">Name: </p> <input className="generalInfoFields" value = {name} onChange={(e) => setName(e.target.value)}/><br/>
            <p className="generalInfoFields">Image URL: </p><input className="generalInfoFields" value = {image} onChange={(e) => setImage(e.target.value)}/> <br/>
            <p className="generalInfoFields">Please Select a race: </p>
            
            {raceList.map((race) => <RaceCard race = {race} key = {race.id} setRace = {setRace}/>)}

        </form>
    )
}