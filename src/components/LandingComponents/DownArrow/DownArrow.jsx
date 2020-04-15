import React, { Component } from "react";

import { Link } from "react-scroll";

// import Arrow from "./DownArrowComponents/Arrow";

import "./DownArrow.css";

export default class DownArrow extends Component {
  render() {
    return (
      <div id="down-arrow">
        {/* <div> */}
        <Link
          activeClass="active"
          to="navbar"
          spy={true}
          smooth={true}
          duration={500}
        >
          <div id="stack-arrows">
            <span></span>
            <span></span>
            {/* <Arrow />
            <Arrow /> */}
          </div>
        </Link>
      </div>
    );
  }
}
