import React from 'react';
import SearchBar from './SearchBar';
import { NavLink } from "react-router-dom";
import logo from "./assets/white.png";
import './NavBar.css';

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "white",
    textDecoration: "none",
    color: "purple",
  };

function NavBar({showSearch, setSearch}) {

    return (
        <div id="navbar">
            <NavLink to="/" exact> 
            <a href=""><img className="logo" src={logo} alt="logo"/></a>
            </NavLink>

            {showSearch ? <SearchBar setSearch={setSearch}/> : null}

            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyle={{
                background: "darkblue",
                }}
            > Login </NavLink>

            <NavLink
                to="/signup"
                exact
                style={linkStyles}
                activeStyle={{
                background: "darkblue",
                }}
            > Signup </NavLink>
        </div>
    );
}

export default NavBar;