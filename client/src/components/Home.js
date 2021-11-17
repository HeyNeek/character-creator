import React, {useState, useEffect} from 'react';
import Charactercard from './charactercard';

export default function Home({user}){

    let characterlist = user.player_characters.map((character) => <Charactercard character = {character}/>);
   
    return(
    <div>
        <h2 id="userGreeting">Greetings {user.username}!<img className = "userphoto" src={user.image_url}/></h2>
        <br/>
        {/* mapping here */}
        <h1 id="currentCharactersHome"> Your current characters </h1>

        {characterlist}
    </div>
    );

}