import React, { Component } from "react";

import Resumebar from "./LandingComponents/Resumebar";

import "./styles/Credits.css";

export default class Credits extends Component {
  render() {
    return (
      <div id="credits-bar">
        <Resumebar />
        <p id="credits">
          &copy; Samuel Ping 2020 | Built from scratch using React.js, Node.js,
          HTML5 and CSS3.
        </p>
      </div>
    );
  }
}
