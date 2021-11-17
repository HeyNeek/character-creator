import React, {useState} from 'react';

export default function StatsCard(){
const [strength, setStrength] = useState(8)
const [Dexterity, setDexterity] = useState(8)
const [Constitution, setConstitution] = useState(8)
const [Inteligence, setInteligence] = useState(8)
const [Wisdom, setWisdom] = useState(8)
const [Charisma, setCharisma] = useState(8)
const [Points, setPoints] = useState(27)

function PointBuy(setStat, increment){

if(increment === "plus")
    {setStat(prev => ++prev)}
else
    {setStat(prev => --prev)}
} 

return(
    <div>
    <h1>Points left: {Points} </h1>
    <h2> Strength: 
        <button onClick ={() => PointBuy(setStrength, "plus")}> ↑</button> 
{strength} <button onClick ={() => PointBuy(setStrength, "minus")}> ↓</button></h2> 
    <h2> Dexterity: 
        <button> ↑</button> {Dexterity} <button> ↓</button></h2> 
    <h2> Constitution: 
        <button> ↑</button> {Constitution} <button> ↓</button></h2>
    <h2>Inteligence:  
        <button> ↑</button> {Inteligence} <button> ↓</button></h2>
    <h2>Wisdom:  
        <button> ↑</button> {Wisdom} <button> ↓</button></h2>
    <h2> Charisma:
        <button> ↑</button> {Charisma} <button> ↓</button></h2>
    </div>
)
}