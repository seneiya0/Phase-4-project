import React, { useState } from "react";
import NavBar from './NavBar';
import PostContainer from './PostContainer';
import "./App.css"
import NewPost from "./NewPost";
import background from './assets/login.mp4';

function App({showSearch, setCurrentUser, currentUser, posts, setPosts, addNewPost, deletePost}) {
  const [searchTerm, setSearch] = useState("");
  const [showForm, setShowForm] = useState('false')

  function show(){
    setShowForm('true')
}

  function unshow(){
    setShowForm('false')
  }

  const filteredList = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
      <div id="background">
        <NavBar setPosts = {setPosts} show={show} setCurrentUser={setCurrentUser} unshow={unshow} currentUser={currentUser} showSearch={showSearch} setSearch= {setSearch} />
        {showForm === 'false' && (
        <PostContainer deletePost={deletePost} currentUser={currentUser} posts={filteredList} />
        )}
        {showForm === 'true' && (
          <NewPost posts={posts} addNewPost={addNewPost} unshow={unshow} />
        )}
      </div>
    );
}

export default App;
