import React, { Component } from "react";

import PageGreeting from "./components/PageGreeting";
import MyNameBar from "./components/MyNameBar";
import NavBar from "./components/NavBar";
import Credits from "./components/Credits";
import { render } from "@testing-library/react";

export default class App extends Component {
  render() {
    return (
      <>
        {/* "Hey!" */}
        <PageGreeting />
        {/* "I'm Sam." and underneath is an arrow pointing down, and this bar stays sticky at top of screen */}
        {/* <MyNameBar /> */}
        {/* Clicking on each tab reveals info from that tab, useReact.Fragment? Check Reactment's navbar, its a similar concept... maybe*/}
        {/* <NavBar /> */}
        {/* Credits */}
        {/* <Credits /> */}
      </>
    );
  }
}
