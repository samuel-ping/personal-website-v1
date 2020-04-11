import React, { Component } from "react";

import PageGreeting from "./components/PageGreeting";
import Namebar from "./components/Namebar";
// import Navbar from "./components/Navbar";
import Credits from "./components/Credits";
import { render } from "@testing-library/react";

import "./components/styles/General.css";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* "Hey!" */}
        <PageGreeting />
        {/* "I'm Sam." and underneath is an arrow pointing down, and this bar stays sticky at top of screen */}
        <Namebar />
        {/* Clicking on each tab reveals info from that tab, useReact.Fragment? Check Reactment's navbar, its a similar concept! Can fill background color for tab changing effect*/}
        {/* <Navbar /> */}
        {/* Credits */}
        {/* <Credits /> */}
      </div>
    );
  }
}
