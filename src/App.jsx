import React, { Component } from "react";
import ReactGA from "react-ga";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Credits from "./components/Credits";

import "./components/styles/General.css";

export default class App extends Component {
  render() {
    ReactGA.initialize("UA-163484661-1");
    ReactGA.pageview("/");
    return (
      <div>
        <Landing />
        <Navbar />
        <Credits />
      </div>
    );
  }
}
