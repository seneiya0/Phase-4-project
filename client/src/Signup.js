import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

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
    <div className="authForm">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>
          <label 
            htmlFor="username"
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
        <p><button type="submit">Sign Up</button></p>
        <p>-- or --</p>
        <p><Link to="/login">Log In</Link></p>
      </form>
    </div>
  )
}

export default Signup