import React, { Component } from "react";

import Resumebar from "./LandingComponents/Resumebar";

import "./styles/Credits.css";

export default class Credits extends Component {
  render() {
    return (
      <div id="credits-bar">
        <Resumebar />
        <p id="credits">
          &copy; Samuel Ping 2020 | Built from scratch using React.js, Node.js,
          HTML5 and CSS3.
        </p>
        <div id="icon-attribution">
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
            >
              {" "}
              Pixel perfect{" "}
            </a>{" "}
            and{" "}
            <a
              href="https://www.flaticon.com/authors/vitaly-gorbachev"
              title="Vitaly Gorbachev"
            >
              Vitaly Gorbachev
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div>
      </div>
    );
  }
}
