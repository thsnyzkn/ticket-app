import React from "react";

import Home from "./views/Home";
import Details from "./views/Details";
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
