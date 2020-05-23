import React, { Component } from "react";

import Iconbar from "./LandingComponents/Iconbar/Iconbar";
import Creditsbar from "./CreditsComponents/Creditsbar";

import "./general-styles/Credits.css";

export default class Credits extends Component {
  render() {
    return (
      <div id="credits-bar">
        <Iconbar />
      </div>
    );
  }
}
