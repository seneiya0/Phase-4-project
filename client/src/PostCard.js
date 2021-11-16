import React from 'react';

function PostCard({post}) {
    return (
       <div>
           <h1>{post.title}</h1>
           <img src={post.image} alt="image" />
           <h3>{post.body}</h3>
           <button>❤️ {post.likes}</button>

       </div>
    );
}

export default PostCard;
