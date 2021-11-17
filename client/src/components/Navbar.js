import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({setUser}){

    function logoutHandler() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }

    return(
        <nav id="navbar">
            <NavLink className="navlink" to="/">Home </NavLink>
            <NavLink className="navlink" to="/create"> Character Creator </NavLink>
            <NavLink className="navlink" to="/gallery"> Character Gallery </NavLink>
            <button id="logoutButton" onClick={logoutHandler}>Logout</button>  
        </nav>
    )
}

export default Navbar;