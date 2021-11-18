import React, {useState}from 'react';
import GeneralInfo from './creation/generalinfo';
import StatsCard from './creation/stats';

function Create({user, addCharacter}){
    const [name, setName] = useState(null)
    const [image, setImage] = useState(null)
    const [race, setRace] = useState(null)
    const [strength, setStrength] = useState(8)
    const [Dexterity, setDexterity] = useState(8)
    const [Constitution, setConstitution] = useState(8)
    const [Inteligence, setInteligence] = useState(8)
    const [Wisdom, setWisdom] = useState(8)
    const [Charisma, setCharisma] = useState(8)
    const [errors, setErrors] = useState([]);

 function handleSubmit(e){
    e.preventDefault();

     const newCharacter = {
         user_id: user.id,
         name: name,
         image_url: image,
         race_id: race,
         strength: strength,
         dex: Dexterity,
         con: Constitution,
         intel: Inteligence,
         wisdom: Wisdom,
         charisma: Charisma
     }

     fetch("/player_characters", {
        method: "Post",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(newCharacter),
     }).then((r) => {if (r.ok) {
         r.json().then((character) => {
            addCharacter(character)
         })
     } else {
         r.json().then((err) => console.log("You dun goofed"))
     }
    
    })
 }


    return(
        <div>
            <h1 id="characterCreationFormH1">Create</h1>
            <form id="characterCreationForm" onSubmit = {handleSubmit}>
                <GeneralInfo setName = {setName} name = {name} image = {image} setImage = {setImage} race = {race} setRace = {setRace}/>
                <StatsCard setStrength = {setStrength} strength = {strength} setDexterity = {setDexterity} Dexterity = {Dexterity } setConstitution = {setConstitution} Constitution = {Constitution} setInteligence = {setInteligence} Inteligence = {Inteligence} setWisdom ={setWisdom} Wisdom = {Wisdom} setCharisma = {setCharisma} Charisma = {Charisma}/>
                <button id="characterCreationFormButton"> Submit </button>
            </form>
        </div>
    )
}

export default Create;