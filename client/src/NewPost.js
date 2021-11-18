import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from './NavBar';

function NewPost({addNewPost}){

  const [image, setImage] = useState("");
  const history = useHistory();
  const [body, setBody] = useState("");
  const [currentUser, setCurrentUser] = useState("")
  const  [error, setError] = useState('')

  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
          })
        }
      })
  }, [])

  const newPost = {
    user_id: currentUser.id,
    title,
    image,
    body,
    likes: 0
  };

  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    fetch("/posts", configObj)
    .then(res => {
      if (res.ok) {
          res.json().then(post => {
          addNewPost(post);
          history.push("/")
          })
      } else {
          res.json().then(errors => {
          setError(errors.errors)
          })
      }
      })
  };

  return (
<div>
    <NavBar currentUser={currentUser}/>
    <div className="post-thing">
      <h3 className="post-h">Create a new post:</h3>
      <div style={{color: "red"}}>{error}</div>
      <form className="post-form"onSubmit={handleSubmit}>
        <input 
          className="title-input"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="image-input"
          type="text"
          placeholder="image url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
          <textarea
            className="body-input"
            placeholder="speak your mind :) "
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        <div className="counter">
          <span>{ 200 - body.length }</span> 
          <button disabled={!title || body.length < 10 || body.length > 200 } className="post-button" type="submit">Post</button>
        </div>
      </form>
    </div>
  </div>
  );

}

export default NewPost