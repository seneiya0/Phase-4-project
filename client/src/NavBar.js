import React from 'react';
import SearchBar from './SearchBar';
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function NavBar({showSearch, setSearch}) {

    return (
        <div>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                background: "darkblue",
                }}
            > Home </NavLink>

            {showSearch ? null : <SearchBar setSearch={setSearch}/>}

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