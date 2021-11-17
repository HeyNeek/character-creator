import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import { useHistory } from 'react-router';
import Charactercard from './charactercard';

export default function CharacterDetails() {
    const [character, setCharacter] = useState([])
    const [race, setRace] = useState([])
    const [user, setUser] = useState([])
    const [updating, setUpdating] = useState(null)
    const {id} = useParams();

    useEffect(()=> {
        fetch(`/player_characters/${id}`)
        .then((r) => r.json())
        .then((data) => {
            setCharacter(data)
            setRace(data.race)
            setUser(data.user)
        })
}, [])

function updateCharacter(){

}

    return(
        <div>
            <h1>{character.name}</h1>
            <img src = {character.image_url}/> <button> Change Image </button><br/>  
            Player : {user.username} 
            <img className = "userphoto" src = {user.image_url}/> 
            Race: {race.name}

            <h1>Stats:</h1>

            <h3>Strength: {character.strength}</h3>
            <h3>Dexterity: {character.dex}</h3>
            <h3>Constitution: {character.con}</h3>
            <h3>Inteligence: {character.intel}</h3>
            <h3>Wisdom: {character.wisdom} </h3>
            <h3>Charisma: {character.charisma}</h3>
        </div>
    )
    
}