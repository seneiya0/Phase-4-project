import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import background from '../src/assets/login.mp4'
import './Login.css';

function Signup({ setCurrentUser }) {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')
  const  [error, setError] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        image
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history.push('/')
          })
        } else {
          res.json().then(errors => {
            setError(errors.errors)
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
        <h1>Sign Up</h1>
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
          />
        </p>
        <p>
          <label 
            htmlFor="image"
            style={{marginRight:"35px"}}
          >
            Image
          </label>
          <input
            type="text"
            name=""
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </p>
        
        <div style={{color: "red"}}>{error}</div>
        <p><button className="post-button" type="submit">Sign Up</button></p>
        <p>-- or --</p>
        <button href="/login" className="post-button"><Link to="/login">Log In</Link></button>
      </form>
    </div>
    </>
  )
}

export default Signup