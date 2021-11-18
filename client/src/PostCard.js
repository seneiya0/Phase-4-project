import React, { useState } from 'react';

function PostCard({currentUser, post}) {

    const[likes, setLikes] = useState(`${post.likes}`)


function handleLike(){
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
    }       
}



const tags = post.tags.map((tag) => <span className="tags" key={tag.id}>#{tag.name}</span>)

    return (
        <div className='post-card'>
            <h1 className="post-title" style={{width: '280px'}}>{post.title}</h1>
            <div id="user">
            <img className="post-user-icon" src={post.user.image} alt="user icon"/><h4> {post.user.username} </h4>
            </div>
            <img style={{width: '225px'}} src={post.image}  />
            <p className='post-body' style={{width: "280px"}}>{post.body}</p>
            <div>
                {tags}
            </div>
            {currentUser && (
            <div className="likes">
                <button className="like-button" onClick={handleLike}>❤</button> {likes}
            </div>
            )}
        </div>
    );
}

export default PostCard;
