import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details";
import "bootstrap/dist/css/bootstrap.min.css";


ReactDom.render(
  <>
    <Router>
      <Switch>
        <Route path="/Details/:idRobot">
          <Details />

        </Route>
        
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);
