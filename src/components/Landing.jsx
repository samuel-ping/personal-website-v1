import React, { Component } from "react";

import PageGreeting from "./LandingComponents/PageGreeting";

import "./styles/Landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div id="portrait-background"></div>
        <div id="landing">
          <PageGreeting />
        </div>
      </div>
    );
  }
}
