import React from 'react';
import PostCard from './PostCard';

function PostContainer({posts}) {
    return (
        <div className="posts">
            {posts.map((post) => (<PostCard key={post.id} post={post}/>))}
        </div>
    );
}

export default PostContainer;
