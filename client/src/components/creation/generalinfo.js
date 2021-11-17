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
            Name:<input value = {name} onChange={(e) => setName(e.target.value)}/> <br/>
            Image url: <input value = {image} onChange={(e) => setImage(e.target.value)}/> <br/>
            Please Select a race:
            
            {raceList.map((race) => <RaceCard race = {race} key = {race.id} setRace = {setRace}/>)}

        </form>
    )
}