import React, {useState} from 'react';

export default function SignUp({setUser, setCharacterList}){
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState([]);

    function handleSubmit(e){
        e.preventDefault();

        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => {
                setCharacterList(user.player_characters)
                setUser(user)
              });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });

    }
   
    return(
    <div id="signUpPage">
        <form>
            Username:
            <input className="inputFieldsSignUp" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
             Password: 
            <input className="inputFieldsSignUp" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button id="signUpButton" onClick={handleSubmit}>Sign Up!</button>
        </form>
    </div>
    );

}