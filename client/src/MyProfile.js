import NavBar from "./NavBar"
import PostContainer from "./PostContainer"
import {useState, useEffect} from 'react'

function MyProfile({posts, show, unshow, showForm, deletePost, currentUser, setCurrentUser}){

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

  const filteredList = posts.filter((post) => post.user.username === currentUser.username)

  const info = filteredList.map((user) => user.user.created_at)[0];
    
  const createdAt = info ? info.split('T')[0] : null


  return(
    <div>
    <NavBar show={show} unshow={unshow} showForm={showForm} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    {currentUser ? <><img style={{width: "100%", maxHeight: "600px", objectFit:"cover", borderBottom:"10px solid white", opacity: "0.8"}} src={currentUser.image} alt="image"/>
    <img style={{display:"block", marginLeft:"auto", marginRight:"auto", position: "relative", marginTop:"-125px",width: "250px", height: "250px", borderRadius: "50%", border:"10px solid white", objectFit:"cover"}} src={currentUser.image} alt="image"/>
    <h1 style={{display:"block", marginLeft:"auto", marginRight:"auto", textAlign: "center"}}>@{currentUser.username}</h1></>: null} 
    <div className="created-at">
      Account created {createdAt}
    </div>
    <PostContainer deletePost={deletePost} currentUser={currentUser} posts={filteredList}/>
    </div>
  )
}

export default MyProfile