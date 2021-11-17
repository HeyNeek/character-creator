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
        <span>Hi {user.username}!</span> <img class = "userphoto" src={user.image_url}/>
        <button onClick={logoutHandler}>Logout</button>

        {/* mapping here */}
        <h1> Your current characters </h1>

      {characterlist}
    </div>
    );

}