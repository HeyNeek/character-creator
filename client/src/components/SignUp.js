import React, {useState} from 'react';

export default function SignUp({setUser, setCharacterList}){
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConfirmation, setPasswordConfirmation] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e){
        e.preventDefault();

        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, 
              password,
              password_confirmation: passwordConfirmation,
            image_url: imageUrl}),
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
       Sign up!
       {errors}
        <form>
            Username:
            <input className="inputFieldsSignUp" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
             Password: 
            <input className="inputFieldsSignUp" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          Confirm Password:
            <input
            className="inputFieldsSignUp"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
            Profile image:
            <input
            className="inputFieldsSignUp"
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
            <button id="signUpButton" onClick={handleSubmit}>Sign Up!</button>
        </form>
    </div>
    );

}