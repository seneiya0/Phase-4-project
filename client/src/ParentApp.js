import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import App from "./App";
import "./App.css"
import MyProfile from "./MyProfile";
import NewPost from "./NewPost";

function ParentApp() {
    const [showSearch, setShowSearch] = useState(true)
    const [currentUser, setCurrentUser] = useState(null)
    const [posts, setPosts] = useState([]);
    const addNewPost = (newPostObj) => {
      setPosts((all_posts) => [ ...all_posts,newPostObj]);
    };

    useEffect(() => {
      fetch('/me', {
        credentials: 'include'
      })
        .then(res => {
          if (res.ok) {
            res.json().then((user) => {
              setCurrentUser(user)
            })
          }
        })
    }, [])

    useEffect(() => {
      fetch("/posts")
        .then((r) => r.json())
        .then((posts)=> setPosts(posts));
    }, []);

    function deletePost(id){
      const updatedPosts = posts.filter((post) => post.id !== id )
      setPosts(updatedPosts)
    }

    return (
      <div>
        <Switch>
        <Route exact path="/signup" onChange={()=> setShowSearch(false)}>
          <Signup setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/login" onChange={()=> setShowSearch(false)}>
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/my-profile" >
          <MyProfile deletePost={deletePost} posts={posts} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/new-post" onChange={()=> setShowSearch(false)}>
          <NewPost currentUser={currentUser} setCurrentUser={setCurrentUser} addNewPost={addNewPost}/>
        </Route> 
        <Route exact path="/" onChange={()=> setShowSearch(true)}>
          <App deletePost={deletePost} posts={posts} setPosts={setPosts} currentUser={currentUser} setCurrentUser={setCurrentUser} showSearch={showSearch} />
        </Route>
      </Switch>
      </div>
    );
}

export default ParentApp;
