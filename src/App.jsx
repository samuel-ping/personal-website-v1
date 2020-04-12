import React, { Component } from "react";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Credits from "./components/Credits";

import "./components/styles/General.css";

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
