import React, { Component } from "react";

import Landing from "./components/Landing";
import MyNavbar from "./components/MyNavbar";
// import Credits from "./components/Credits";

import "./components/styles/General.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        {/* Clicking on each tab reveals info from that tab, use React.Fragment? Check Reactment's navbar, its a similar concept! Can fill background color for tab changing effect*/}
        <MyNavbar />
        {/* <Credits /> */}
      </div>
    );
  }
}
