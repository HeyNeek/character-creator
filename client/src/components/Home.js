import React, {useState, useEffect} from 'react';
import Charactercard from './charactercard';

export default function Home({user, setUser}){

    function logoutHandler() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
      
      const characterlist = user.player_characters.map((character) => <Charactercard character = {character}/>)
   
    return(
    <div>
        <h2 id="userGreeting">Hi {user.username}!<img className = "userphoto" src={user.image_url}/></h2>
        <br/>
        <div id="buttonContainer">
            <button id="logoutButton" onClick={logoutHandler}>Logout</button>
        </div>

        {/* mapping here */}
        <h1 id="currentCharactersHome"> Your current characters </h1>

      {characterlist}
    </div>
    );

}