import React from 'react';
import PostCard from './PostCard';

function PostContainer({posts}) {
    return (
       <div>
           {posts.map((post) => (<PostCard key={post.id} post={post}/>))}
       </div>
    );
}

export default PostContainer;
