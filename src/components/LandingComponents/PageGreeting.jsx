import React, { Component } from "react";

import DownArrow from "./DownArrow";

import "../styles/PageGreeting.css";

export default class PageGreeting extends Component {
  render() {
    return (
      <div>
        <h1 id="greeting-text">Hey! I'm Sam,</h1>
        <h1 id="my-description">
          an aspiring CS major at Rutgers University- New Brunswick.
        </h1>
        <DownArrow />
      </div>
    );
  }
}
