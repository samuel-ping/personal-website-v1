import React, { Component } from "react";

import ReactGA from "react-ga";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Credits from "./components/Credits";

import "./components/styles/General.css";

ReactGA.initialize("UA-163484661-1");
ReactGA.pageview("/about-me");

export default class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Navbar />
        <Credits />
      </div>
    );
  }
}
