import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

export default function Charactercard({character}){
   
    return(
    <div className="characterCard">
        <br/>
        <br/>
        {character.name} {character.race.name} 
        <br/>
        <img className = "userphoto" src={character.image_url}/>
        <br/>
        <NavLink id="showCharacter" to={`/character/${character.id}`}> See Character</NavLink>  
    </div>
    );

}