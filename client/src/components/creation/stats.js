import React, {useState} from 'react';

export default function StatsCard({strength, setStrength, Dexterity, setDexterity, Constitution, setConstitution, Inteligence, setInteligence, Wisdom, setWisdom, Charisma, setCharisma}){
// const [strength, setStrength] = useState(8)
// const [Dexterity, setDexterity] = useState(8)
// const [Constitution, setConstitution] = useState(8)
// const [Inteligence, setInteligence] = useState(8)
// const [Wisdom, setWisdom] = useState(8)
// const [Charisma, setCharisma] = useState(8)
const [Points, setPoints] = useState(24)

function PointBuy(e, setStat, stat, increment){
    e.preventDefault()

if(increment === "plus" && stat < 15 && Points > 0)
    {setStat(prev => ++prev)
    setPoints(prev => --prev)
    }
else if (increment === "minus" && stat > 8)
    {
    setStat(prev => --prev)
    setPoints(prev => ++prev)
    }
} 

return(
    <div id="stats">
    <h1>Points left: {Points} </h1>
    <h2> Strength:  
        <button className="statButtons" onClick ={(e) => PointBuy(e, setStrength, strength,  "plus")}> ↑ </button> 
{strength} <button className="statButtons" onClick ={(e) => PointBuy(e, setStrength, strength, "minus")}> ↓</button></h2> 
    <h2> Dexterity:  
    <button className="statButtons" onClick ={(e) => PointBuy(e, setDexterity, Dexterity, "plus")}> ↑ </button> 
{Dexterity} <button className="statButtons" onClick ={(e) => PointBuy(e, setDexterity, Dexterity, "minus")}> ↓</button></h2> 
    <h2> Constitution:  
    <button className="statButtons" onClick ={(e) => PointBuy(e, setConstitution, Constitution, "plus")}> ↑ </button> 
{Constitution} <button className="statButtons" onClick ={(e) => PointBuy(e, setConstitution, Constitution, "minus")}> ↓</button></h2>
    <h2>Inteligence:   
    <button className="statButtons" onClick ={(e) => PointBuy(e, setInteligence, Inteligence, "plus")}> ↑ </button> 
{Inteligence} <button className="statButtons" onClick ={(e) => PointBuy(e, setInteligence, Inteligence, "minus")}> ↓</button></h2>
    <h2>Wisdom:   
    <button className="statButtons" onClick ={(e) => PointBuy(e, setWisdom, Wisdom, "plus")}> ↑ </button> 
{Wisdom} <button className="statButtons" onClick ={(e) => PointBuy(e, setWisdom, Wisdom, "minus")}> ↓</button></h2>
    <h2> Charisma: 
    <button className="statButtons" onClick ={(e) => PointBuy(e,setCharisma, Charisma, "plus")}> ↑ </button> 
{Charisma} <button className="statButtons" onClick ={(e) => PointBuy(e, setCharisma, Charisma, "minus")}> ↓</button></h2>
    </div>
)
}