import React, { Component } from "react";

import Resumebar from "./Resumebar";
import DownArrow from "./DownArrow";

export default class PageGreeting extends Component {
  render() {
    return (
      <div id="description-background">
        <h1 id="greeting-text">Hey! I'm Sam,</h1>
        <h1 id="my-description">
          an aspiring CS major at Rutgers University- New Brunswick.
        </h1>
        <Resumebar />
        <DownArrow />
      </div>
    );
  }
}
