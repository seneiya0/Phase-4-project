import React, { useState, useEffect } from "react";
import NavBar from './NavBar';
import PostContainer from './PostContainer';
import "./App.css"

function App({showSearch}) {
  const [searchTerm, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((posts)=> setPosts(posts));
  }, []);

  const filteredList = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
      <div>
        <NavBar showSearch={showSearch} setSearch= {setSearch} />
        <PostContainer posts={filteredList} />
      </div>
    );
}

export default App;
