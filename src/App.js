import React from "react";

import Home from "./containers/Home";
import Details from "./containers/Details";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
 
      <Router>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route path="/ticket-details/:id" children={<Details />} />
        </Switch>
      </Router>
   
  );
}

export default App;
