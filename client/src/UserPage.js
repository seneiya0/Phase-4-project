import NavBar from "./NavBar"
import PostContainer from "./PostContainer"
import {useState} from 'react'

function UserPage({posts, show, unshow, showForm, deletePost, setCurrentUser, currentUser}){


    const currentPosts = window.location.pathname.split('/')[2];
    const filteredList = posts.filter((post) => post.user.username === currentPosts)
    const userImage = filteredList.map((user) => user.user.image)[0];

    const info = filteredList.map((user) => user.user.created_at)[0];
    
    const createdAt = info ? info.split('T')[0] : null


  return(
    <div>
    <NavBar show={show} unshow={unshow} showForm={showForm} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    <img style={{width: "100%", maxHeight: "600px", objectFit:"cover", borderBottom:"10px solid white", opacity: "0.8"}} src={userImage} alt="image"/>
    <img style={{display:"block", marginLeft:"auto", marginRight:"auto", position: "relative", marginTop:"-125px",width: "250px", height: "250px", borderRadius: "50%", border:"10px solid white", objectFit:"cover"}} src={userImage} alt="image"/>
    <h1 style={{display:"block", marginLeft:"auto", marginRight:"auto", textAlign: "center"}}>@{currentPosts}</h1>
    <div className="created-at">
      Account created {createdAt}
    </div>
    <PostContainer deletePost={deletePost} currentUser={currentUser} posts={filteredList}/>
    </div>
  )
}

export default UserPage