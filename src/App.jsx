import React, { Component } from "react";

import Landing from "./components/Landing";
// import Navbar from "./components/Navbar";
import Credits from "./components/Credits";
import { render } from "@testing-library/react";

import "./components/styles/General.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        {/* Clicking on each tab reveals info from that tab, useReact.Fragment? Check Reactment's navbar, its a similar concept! Can fill background color for tab changing effect*/}
        {/* <Navbar /> */}
        {/* Credits */}
        {/* <Credits /> */}
      </div>
    );
  }
}
