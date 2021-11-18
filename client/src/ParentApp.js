import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import App from "./App";
import "./App.css"



function ParentApp() {
    const [showSearch, setShowSearch] = useState(true)
    const [currentUser, setCurrentUser] = useState(null)
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //   fetch("/posts")
    //     .then((r) => r.json())
    //     .then((posts)=> setPosts(posts));
    // }, []);
  

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



    return (
      <div>
        <Switch>
        <Route exact path="/signup" onChange={()=> setShowSearch(false)}>
          <Signup />
        </Route>
        <Route exact path="/login" onChange={()=> setShowSearch(false)}>
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/" onChange={()=> setShowSearch(true)}>
          <App currentUser={currentUser} setCurrentUser={setCurrentUser} showSearch={showSearch} />
        </Route>
      </Switch>
      </div>
    );
}

export default ParentApp;
