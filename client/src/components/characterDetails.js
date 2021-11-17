import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import { useHistory } from 'react-router';

export default function CharacterDetails({refresh}) {
    const [character, setCharacter] = useState([])
    const [race, setRace] = useState([])
    const [user, setUser] = useState([])
    const [newImage, setNewImage] = useState("")
    const [updating, setUpdating] = useState(null)
    const {id} = useParams();
    const history = useHistory();

    useEffect(()=> {
        fetch(`/player_characters/${id}`)
        .then((r) => r.json())
        .then((data) => {
            setCharacter(data)
            setRace(data.race)
            setUser(data.user)
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
        <div>
            <h1>{character.name}</h1>
            <img src = {character.image_url}/> <button onClick={() => setUpdating(prev => !prev)}>
                {updating ? "Cancel" : "Change Image"}  </button><br/>  
            {updating ?<form onSubmit={(e) => updateCharacter(e)}> <input value = {newImage} onChange={(e)=>setNewImage(e.target.value)}/><button> submit</button></form> : null   
            }
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

            <button onClick={deleteCharacter}>🗑️ </button>
        </div>
    )
    
}