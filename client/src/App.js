import React, { useState, useEffect } from "react";
import NavBar from './NavBar';
import PostContainer from './PostContainer';
import "./App.css"
import NewPost from "./NewPost";

function App({showSearch, setCurrentUser, currentUser}) {
  const [searchTerm, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState('false')

  function show(){
    setShowForm('true')
}

  function unshow(){
    setShowForm('false')
  }

  const addNewPost = (newPostObj) => {
    setPosts((all_posts) => [ ...all_posts,newPostObj]);
  };

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((posts)=> setPosts(posts));
  }, []);

  const filteredList = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
      <div id="background">
        <NavBar setPosts = {setPosts} show={show} setCurrentUser={setCurrentUser} currentUser={currentUser} showSearch={showSearch} setSearch= {setSearch} />
        {showForm === 'false' && (
        <PostContainer currentUser={currentUser} posts={filteredList} />
        )}
        {showForm === 'true' && (
          <NewPost posts={posts} addNewPost={addNewPost} unshow={unshow} />
        )}
      </div>
    );
}

export default App;
