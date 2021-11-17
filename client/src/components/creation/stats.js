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

if(increment === "plus" && Points > 0)
    {setStat(prev => ++prev)
    setPoints(prev => --prev)
    }
else if (increment === "minus" && Points < 27)
    {
    setStat(prev => --prev)
    setPoints(prev => ++prev)
    }
} 

return(
    <div>
    <h1>Points left: {Points} </h1>
    <h2> Strength: 
        <button onClick ={() => PointBuy(setStrength, "plus")}> ↑</button> 
{strength} <button onClick ={() => PointBuy(setStrength, "minus")}> ↓</button></h2> 
    <h2> Dexterity: 
    <button onClick ={() => PointBuy(setDexterity, "plus")}> ↑</button> 
{Dexterity} <button onClick ={() => PointBuy(setDexterity, "minus")}> ↓</button></h2> 
    <h2> Constitution: 
    <button onClick ={() => PointBuy(setConstitution, "plus")}> ↑</button> 
{Constitution} <button onClick ={() => PointBuy(setConstitution, "minus")}> ↓</button></h2>
    <h2>Inteligence:  
    <button onClick ={() => PointBuy(setInteligence, "plus")}> ↑</button> 
{Inteligence} <button onClick ={() => PointBuy(setInteligence, "minus")}> ↓</button></h2>
    <h2>Wisdom:  
    <button onClick ={() => PointBuy(setWisdom, "plus")}> ↑</button> 
{Wisdom} <button onClick ={() => PointBuy(setWisdom, "minus")}> ↓</button></h2>
    <h2> Charisma:
    <button onClick ={() => PointBuy(setCharisma, "plus")}> ↑</button> 
{Charisma} <button onClick ={() => PointBuy(setCharisma, "minus")}> ↓</button></h2>
    </div>
)
}