import React from 'react';
import PostCard from './PostCard';

function PostContainer({currentUser, posts}) {

    return (
        <div className="posts">
            {posts.map((post) => (<PostCard key={post.id} currentUser={currentUser}post={post}/>))}
        </div>
    );
}

export default PostContainer;
