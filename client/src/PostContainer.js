import React from 'react';
import PostCard from './PostCard';

function PostContainer({currentUser, posts, deletePost}) {
    
    const numberOfPosts= posts.length;

    return (
        <>
            <p className="post-count"> <strong> {numberOfPosts} posts </strong> </p>
            <div className="posts">                
                {posts.map((post) => (<PostCard deletePost={deletePost} key={post.id} currentUser={currentUser}post={post}/>))}
            </div>
        </>
    );
}

export default PostContainer;
