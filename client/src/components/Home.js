import React from 'react';

export default function Home({user, setUser}){

    function logoutHandler() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
   
    return(
    <div>
        <h1>Hi {user.username}!</h1>
        <button onClick={logoutHandler}>Logout</button>
    </div>
    );

}