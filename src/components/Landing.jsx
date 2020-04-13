import React, { Component } from "react";

import PageGreeting from "./LandingComponents/PageGreeting";
import Resumebar from "./LandingComponents/Resumebar";
import DownArrow from "./LandingComponents/DownArrow";

import "./styles/Landing.css";

export default class Landing extends Component {
  render() {
    return (
      // <div id="transparent-green-background">
      <div>
        <div id="portrait-background" />
        <div id="landing">
          <PageGreeting />
          <div id="color-background">
            <Resumebar />
            <DownArrow />
          </div>
        </div>
      </div>
    );
  }
}
