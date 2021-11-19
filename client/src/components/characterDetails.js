import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import { useHistory } from 'react-router';

export default function CharacterDetails({refresh, user}) {
    const [character, setCharacter] = useState([])
    const [race, setRace] = useState([])
    const [userInfo, setUserInfo] = useState([])
    const [newImage, setNewImage] = useState("")
    const [updating, setUpdating] = useState(null)
    const [sameUser, setSameUser] = useState(false)
    const {id} = useParams();
    const history = useHistory();

    useEffect(()=> {
        fetch(`/player_characters/${id}`)
        .then((r) => r.json())
        .then((data) => {
            setCharacter(data)
            setRace(data.race)
            setUserInfo(data.user)
            if(user.id === data.user.id) setSameUser(true)
        })
}, [])



function updateCharacter(e){
    e.preventDefault()
    fetch(`/player_characters/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({image_url: newImage}),
    })
    .then((r)=> r.json())
    .then((data) => {console.log(data)
        setCharacter(data)
        // setRace(data.race)
        // setUser(data.user)
        refresh()
    })
}

// function handleDelete() {
//     fetch(`https://grannycb2.herokuapp.com/recipes/${recipe.id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((resp) => resp.json())
//       .then(() => {
//         deleteRecipe(recipe.id);
//         history.push(`/`);
//       });
//   }
// /player_characters/${id}
function deleteCharacter(){
    fetch(`/player_characters/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        refresh();
        history.push(`/`);
      });
}

    return(
        <>
        <br/>
        <br/>
        <div id="characterDetailContainer">
            <h1>{character.name}</h1>
            <img id="characterDetailImage" src = {character.image_url}/>
            <br/> 
            {sameUser ? <button className="updateButtons" onClick={() => setUpdating(prev => !prev)}>
            {updating ? "Cancel" : "Change Image"}  </button> : null}
            <br/> 

            {updating ?<form onSubmit={(e) => updateCharacter(e)}> <input id="updateField" value = {newImage} onChange={(e)=>setNewImage(e.target.value)}/><br/><button className="updateButtons">Submit</button></form> : null }
            <h2>Player : {userInfo.username} </h2>
            <h2>Race: {race.name}</h2>

            <h1>Stats:</h1>

            <h3>Strength: {character.strength}</h3>
            <h3>Dexterity: {character.dex}</h3>
            <h3>Constitution: {character.con}</h3>
            <h3>Inteligence: {character.intel}</h3>
            <h3>Wisdom: {character.wisdom} </h3>
            <h3>Charisma: {character.charisma}</h3>

            {sameUser ? <button id="deleteButton" onClick={deleteCharacter}>🗑️ </button> : null}
            
        </div>
        </>
    )
    
}