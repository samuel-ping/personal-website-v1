import React, { Component, useEffect } from "react";

import ReactGA from "react-ga";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Credits from "./components/Credits";

import "./components/styles/General.css";

ReactGA.initialize("UA-163484661-1");
// ReactGA.pageview("/about-me");
var history = createBrowserHistory();

history.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
  console.log(location.pathname);
});

// history.listen((location) => {
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

export default class App extends Component {
  render() {
    return (
      // <div>
      <Router history={history}>
        <div>
          <Landing />
          <Navbar />
          <Credits />
        </div>
      </Router>
      // </div>
    );
  }
}
