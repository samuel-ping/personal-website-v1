import React, { Component } from "react";

import ReactGA from "react-ga";
// import { Router } from "react-router-dom";
// import { createBrowserHistory } from "history";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Credits from "./components/Credits";

import "./components/general-styles/General.css";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
ReactGA.pageview("/about-me");
// var history = createBrowserHistory();

// console.log("4242");
export default class App extends Component {
  render() {
    // history.listen((location, action) => {
    //   console.log("do you see me?2222222");

    //   ReactGA.pageview(location.pathname + location.search);
    //   console.log(location.pathname);
    //   console.log("do you see me?");
    // });

    return (
      // <div>
      // <Router history={history}>
      <div>
        <Landing />
        <Navbar />
        <Credits />
      </div>
      // </Router>
      // </div>
    );
  }
}
