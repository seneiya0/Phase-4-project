import React, { useState } from 'react';
import {FiTrash} from 'react-icons/fi'
import { Link } from "react-router-dom";

function PostCard({currentUser, post, deletePost}) {

    console.log()

    const[likes, setLikes] = useState(`${post.likes}`)
    const[liked, setLiked] = useState(true)

function handleLike(){
    setLiked(!liked)
    if (liked){
            if (currentUser.username !== post.user.username){
    fetch(`/posts/${post.id}/like`, {
        method: 'PATCH',
        body: JSON.stringify({
        completed: true
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(json => setLikes(json.likes))
    }else{
        setLikes(post.likes)
        alert("you cant like your own post!")
        setLiked(true)  
    } 

    }else {
            if (currentUser.username !== post.user.username){
    fetch(`/posts/${post.id}/unlike`, {
        method: 'PATCH',
        body: JSON.stringify({
        completed: true
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(json => setLikes(json.likes))
    }else{
        setLikes(post.likes)
        alert("you cant like your own post!")
        setLiked(true)
    }
    }

}

function handleDelete(){
    deletePost(post.id)
    fetch(`/posts/${post.id}`, {
        method: 'DELETE'})
}


const tags = post.tags.map((tag) => <span className="tags" key={tag.id}>#{tag.name}</span>)

const created_at = post.created_at.split('T')[0]

    return (
        <div className='post-card'>
            <h1 className="post-title" style={{width: '280px'}}>{post.title}</h1>
            
            { currentUser ? currentUser.username === post.user.username ? <Link to={`/my-profile`} exact style={{color:"black",textDecoration: "none"}}>
            <div id="user">
                    <img className="post-user-icon" src={post.user.image} alt="user icon"/><h4> {post.user.username} </h4>
                </div>
            </Link>
            : <Link to={`/users/${post.user.username}`} exact style={{color:"black",textDecoration: "none"}}> 
                <div id="user">
                    <img className="post-user-icon" src={post.user.image} alt="user icon"/><h4> {post.user.username} </h4>
                </div>
            </Link> : <Link to={`/users/${post.user.username}` } exact style={{color:"black",textDecoration: "none"}}> 
                <div id="user">
                    <img className="post-user-icon" src={post.user.image} alt="user icon"/><h4 > {post.user.username} </h4>
                </div>
            </Link>}
            
            <img style={{width: '225px'}} src={post.image}  />
            <p className='post-body' style={{width: "280px"}}>{post.body}</p>
            <p className="post-date">{created_at}</p>
            <div style={{color:"rgb(82, 21, 143)"}}>
                {tags}
            </div>
            {currentUser && (
            <div className="likes">
                <button className= { liked ?  "not-liked": "like-button" } onClick={handleLike}>❤</button> <p>{likes}</p>
                {currentUser.username === post.user.username && (
                    <button className="delete-button" onClick={handleDelete}> <FiTrash/> </button>
                )}
            </div>
            )}
        </div>
    );
}



export default PostCard;
