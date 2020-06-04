import React, { Component } from "react";
import SearcherMedia from "./Components/FinderImages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/"}>
            <SearcherMedia />
          </Route>
          <Route path={"/videos"}>
            <SearcherMedia />
          </Route>
        </Switch>
      </Router>
    );
  }
}
