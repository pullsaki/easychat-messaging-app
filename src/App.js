import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./store/auth-context";

import Chats from "./components/Chats";
import Login from "./components/Login";

const App = () => {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
