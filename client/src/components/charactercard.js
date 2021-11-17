import React, {useState} from 'react';

export default function Charactercard({character}){

 
   
    return(
    <div>
        {character.name} {character.race.name} 
        <img class = "userphoto" src={character.image_url}/>
        
    </div>
    );

}