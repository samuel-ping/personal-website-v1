import React, { Component } from "react";

import PageGreeting from "./LandingComponents/PageGreeting/PageGreeting";
import Iconbar from "./LandingComponents/Iconbar/Iconbar";
import DownArrow from "./LandingComponents/DownArrow/DownArrow";

import "./general-styles/Landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div id="portrait-background" />
        <div id="landing">
          <PageGreeting />
          <div id="color-background">
            <Iconbar />
            <DownArrow />
          </div>
        </div>
      </div>
    );
  }
}
