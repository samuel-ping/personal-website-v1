import React, { Component } from "react";

import Resumebar from "./LandingComponents/Resumebar";
import Creditsbar from "./CreditsComponents/Creditsbar";

import "./styles/Credits.css";

export default class Credits extends Component {
  render() {
    return (
      <div id="credits-bar">
        <Resumebar />
        <Creditsbar />
      </div>
    );
  }
}
