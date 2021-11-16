import React, { useState } from 'react';

function PostCard({post}) {

    const[likes, setLikes] = useState(`${post.likes}`)

function handleLike(){
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
}

const tags = post.tags.map((tag) => <span className="tags" key={tag.id}> #{tag.name} </span>)

    return (
        <div className='post-card'>
            <h1>{post.title}</h1>
            <h3> {post.user.username} </h3>
            <img style={{width: '200px'}} src={post.image}  />
            <p className='post-body'>{post.body}</p>
            <div>
                {tags}
            </div>
            <button className="like-button" onClick={handleLike}>❤️</button> {likes}
        </div>
    );
}

export default PostCard;
