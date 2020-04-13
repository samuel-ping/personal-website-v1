import React, { Component } from "react";

import ReactGA from "react-ga";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Credits from "./components/Credits";

import "./components/styles/General.css";

const history = createBrowserHistory();

ReactGA.initialize("UA-163484661-1");
// ReactGA.pageview("/about-me");

history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Landing />
          <Navbar />
          <Credits />
        </Router>
      </div>
    );
  }
}
