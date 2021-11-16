import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import App from "./App";
import "./App.css"

function ParentApp() {
    const [showSearch, setShowSearch] = useState(true)
    return (
      <div>
        <Switch>
        <Route exact path="/signup" onChange={setShowSearch(false)}>
          <Signup />
        </Route>
        <Route exact path="/login" onChange={setShowSearch(false)}>
          <Login />
        </Route>
        <Route exact path="/" onChange={setShowSearch(true)}>
          <App showSearch={showSearch} />
        </Route>
      </Switch>
      </div>
    );
}

export default ParentApp;
