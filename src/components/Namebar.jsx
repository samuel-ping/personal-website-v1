import React, { Component } from "react";

import DownArrow from "./DownArrow";

import "./styles/Namebar.css";

export default class Namebar extends Component {
  render() {
    return (
      <div>
        <h1 id="my-name">I'm Sam.</h1>
        <DownArrow />
      </div>
    );
  }
}
