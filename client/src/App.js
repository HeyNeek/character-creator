import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div>
      {/* {loginState ? <Home user = {user}/> : <Login setUser={setUser} setLoginState = {setLoginState} />} */}
      <Home user = {user}/>
    </div>
  );
}

export default App;
