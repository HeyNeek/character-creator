import React, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  const [loginState, setLoginState] = useState(false);

  return (
    <div>
      {loginState ? <Home/> : <Login setUser={setUser} setLoginState = {setLoginState} />}
    </div>
  );
}

export default App;
