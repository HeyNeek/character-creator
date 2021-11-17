import React, {useState, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Create from './components/Create';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {console.log(user)
          setUser(user)
        });
        
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser} />;
  return (
    <div>
      <Navbar setUser = {setUser}/>
      <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/">
            <Home user = {user}/>
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
