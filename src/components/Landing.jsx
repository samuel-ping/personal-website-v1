import React, { Component } from "react";

import PageGreeting from "./PageGreeting";
import Namebar from "./Namebar";

import "./styles/Landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <PageGreeting />
        <Namebar />
      </div>
    );
  }
}
