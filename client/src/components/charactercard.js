import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

export default function Charactercard({character}){

 
   
    return(
    <div>
        {character.name} {character.race.name} 
        <img className = "userphoto" src={character.image_url}/>
        <NavLink to={`/character/${character.id}`}> See Character</NavLink>
        
    </div>
    );

}