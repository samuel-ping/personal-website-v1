import React, { Component } from "react";
import ReactGA from "react-ga";

import "../styles/NavbarTab.css";

ReactGA.initialize("UA-163484661-1");
ReactGA.pageview("/about-me");

class AboutTab extends Component {
  state = {};
  render() {
    return (
      <div className="a-tab">
        <div className="text-area">
          <h1>About Me</h1>
          <p>
            Hey! I'm Samuel Ping, and I'm a freshman at Rutgers University- New
            Brunswick studying computer science. I remember back in 3rd grade, I
            wanted to be an inventor when I grew up. I forgot about that
            ambition for a while, until I took my first introductory computer
            programming course in 8th grade which sparked my interest in
            computer science. Since then, I've been pursuing my passion for
            creating new things.
          </p>
          <p>
            Apart from programming, I love playing tennis, acting, and tinkering
            with computer hardware. I'm also a fan of all things green! Except
            boogers.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutTab;
