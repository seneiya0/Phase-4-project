import React from 'react';
import PostCard from './PostCard';

function PostContainer({currentUser, posts, deletePost}) {


    return (
        <div className="posts">
            {posts.map((post) => (<PostCard deletePost={deletePost} key={post.id} currentUser={currentUser}post={post}/>))}
        </div>
    );
}

export default PostContainer;
