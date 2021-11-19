import React from 'react';
import SearchBar from './SearchBar';
import { NavLink } from "react-router-dom";
import logo from "./assets/white.png";
import './NavBar.css';

const linkStyles = {
    display: "inline-block",
    width: "fit-content",
    padding: "10px",
    margin: "6px",
    background: "white",
    textDecoration: "none",
    color: "30, 0, 71",
    borderRadius: "20px",
    textAlign: "center",
    border: "transparent",
    height: "fit-content"
    };


function NavBar({setCurrentUser,currentUser, showSearch, setSearch,show, unshow}) {

        function logout (){
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                window.location.reload();
                setCurrentUser(" ");
            }
        })
    }

    return (
<header>
        <div id="navbar">
            <NavLink to="/" exact> 
            <a href="/"><img onClick={() => unshow} className="logo" src={logo} alt="logo"/></a>

            </NavLink>
            
            {showSearch ? <SearchBar setSearch={setSearch}/> : null}               

            {currentUser && (
            <div className="logged-in-nav">
                <div className="greeting">
                <p>logged in as <strong>{currentUser.username}</strong></p>
                </div>
                <a href="/my-profile "><img className="user-icon" src={currentUser.image} alt=" " ></img> </a>
                <NavLink
                className="login-button"
                to="/new-post"
                exact
                style={linkStyles}
                > + post </NavLink>
                {/* <button className="logout-button" onClick={logout}> logout </button>  */}
                <NavLink
                className="login-button"
                onClick={logout}
                to="/"
                exact
                style={linkStyles}
                > logout </NavLink>
            </div>
            )}

        {currentUser === null && (
        <div className="buttons">
            <NavLink
                className="login-button"
                to="/login"
                exact
                style={linkStyles}
            > Login </NavLink>

            <NavLink 
                className="signup-button"
                to="/signup"
                exact
                style={linkStyles}
            > Signup </NavLink> 
            </div>)}
        </div>
    </header>

    );
}

export default NavBar;