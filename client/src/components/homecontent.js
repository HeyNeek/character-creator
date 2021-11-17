import React, {useState} from 'react';
import Charactercard from './charactercard';
import CharacterDetails from './characterDetails';

export default function HomeContent({user, characterList}){
  

  // const characterlist = user.player_characters.map((character) => <Charactercard character = {character} key = {character.id}/>);
   
const characterlist = characterList.map((character) => <Charactercard character = {character} />);

    return(
    <div>
        <h1 id="currentCharactersHome"> Your current characters </h1>

         {characterlist}
    </div>
    );

}