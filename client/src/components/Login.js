import React, {useState} from 'react';

export default function Login({setUser, setCharacterList}){
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState([]);

    function handleSubmit(e){
        e.preventDefault();

        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, 
            password}),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              setCharacterList(user.player_characters)
              setUser(user)
            });
          } else {
            r.json().then((err) => {setErrors(err.error)
            console.log(err.error)
            });
          }
        });

    }
   
    return(
    <div id="loginPage">
      Log in
      <br/>
      {errors}

      {/* {errors.map((err) => (
          <p key={err}>{err}</p>
        ))} */}

        <form>
            Username:
            <input className="inputFields" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
             Password: 
            <input className="inputFields" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button id="loginButton" onClick={handleSubmit}>Login!</button>
        </form>
    </div>
    );

}