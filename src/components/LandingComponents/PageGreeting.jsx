import React, { Component } from "react";

export default class PageGreeting extends Component {
  render() {
    return (
      <div className="description-background">
        <h1 id="greeting-text">Hey! I'm Sam,</h1>
        <h1 id="my-description">
          an aspiring CS major at{" "}
          <div className="very-cool-red-hover-effect">
            Rutgers University- New Brunswick
          </div>
          .
        </h1>
      </div>
    );
  }
}
