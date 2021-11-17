import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser} />;
  return (
    <div>
      <Home user = {user} setUser = {setUser}/>
    </div>
  );
}

export default App;
