import React, {useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';

function LandingPage({setUser, setCharacterList}){

    const [pageState, setPageState] = useState(null);

    return (
        <div>
            <h1 id='landingPageH1'>Welcome to DnD character creator!</h1>
            <h2 id='landingPageH2'>Login to see your personal collection of characters! | Otherwise, sign up to start creating!</h2>
            <div id='landingPageButtonContainer'><button className="landingPageButtons" onClick={() => setPageState(false)}>Login</button><button className="landingPageButtons" onClick={() => setPageState(true)}>Sign Up</button></div>
            
             {!pageState ? <Login setUser={setUser} setCharacterList = {setCharacterList} /> : <SignUp setUser={setUser} setCharacterList = {setCharacterList} />}
        </div>
    )
}

export default LandingPage;