import React, { Component } from "react";

import Card from "./NavbarTabComponents/Card";

import "./NavbarTab.css";

class AboutTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleData: {
        title: "About Me",
      },

      tabData: {
        description: {
          paragraph1:
            "Hey! I'm Samuel Ping, and I'm a freshman at Rutgers University- New Brunswick studying computer science and business. I remember back in 3rd grade, I wanted to be an inventor when I grew up. I forgot about that ambition for a while, until I took my first introductory computer programming course in 8th grade which sparked my interest in computer science. Since then, I've been pursuing my passion for creating new things.",
          paragraph2:
            "Apart from programming, I love playing tennis, acting, and tinkering with computer hardware. I'm also a fan of all things green! Except boogers.",
        },
        // imageData: { image: "portraitOfMe", imageRotation: "rotate(90deg)" },
        imageData: {},
      },
    };
  }

  render() {
    return (
      <div className="a-tab">
        <Card titleData={this.state.titleData} />
        <Card tabData={this.state.tabData} />
      </div>
    );
  }
}

export default AboutTab;
