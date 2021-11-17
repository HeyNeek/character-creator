import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <nav id="navbar">
            <NavLink className="navlink" to="/">Home </NavLink>
            <NavLink className="navlink" to="/create"> Character Creator </NavLink>
            <NavLink className="navlink" to="/gallery"> Character Gallery </NavLink>
        </nav>
    )
}

export default Navbar;