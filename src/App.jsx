import React, { Component } from "react";

import ReactGA from "react-ga";
// import { Router } from "react-router-dom";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Credits from "./components/Credits";

import "./components/general-styles/General.css";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
ReactGA.pageview("/");

export default class App extends Component {
  render() {
    console.log(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);

    return (
      <div>
        <Landing />
        <ScrollUpButton ContainerClassName="scroll-up-button" />
        <Navbar />
        <Credits />
      </div>
    );
  }
}
