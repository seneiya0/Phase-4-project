import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import background from '../src/assets/login.mp4'
import './Login.css';

function Login({ setCurrentUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const  [error, setError] = useState('')

    const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
        .then(res => {
        if (res.ok) {
            res.json().then(user => {
            setCurrentUser(user)
            history.push("/")

            })
        } else {
            res.json().then(errors => {
            setError(errors.error)
            })
        }
        })
    }

    return (
      <>
        <video
        src={background}
        loop
        muted
        id="background-video"
        autoPlay={true}
      />
        <div className="authForm">

            <form onSubmit={handleSubmit} className="login-form">
                <h1 style={{marginBottom:"40px", marginTop:"45px"}}>Log In</h1>
                <div style={{color: "red"}}>{error}</div>
            <p>
            <label 
            htmlFor="username"
            style={{marginRight:"5px"}}
            >
            Username
            </label>
            <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}

            />
        </p>
        <p>
            <label 
            htmlFor="password"
            style={{marginRight:"5px"}}
            >
            Password
            </label>
            <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{marginBottom:"8px"}}
            />
        </p>
        <p><button className="post-button" type="submit" >Log In</button></p>

        <p style={{marginTop:"70px"}}> Don't have an account ? </p>
        <button href="/signup" className="post-button"><Link to="/signup">Sign Up</Link></button>
        </form>

    </div>
    </>
    )
}

export default Login
