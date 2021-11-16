import React from 'react';

export default function Home({user}){
   
    return(
    <div>
        <h1>Hi {user.username}!</h1>
    </div>
    );

}