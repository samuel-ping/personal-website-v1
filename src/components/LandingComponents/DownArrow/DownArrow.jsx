import React, { Component } from "react";

import { Link } from "react-scroll";

import "./DownArrow.css";

export default class DownArrow extends Component {
  render() {
    return (
      <div id="down-arrow">
        <Link
          activeClass="active"
          to="navbar"
          spy={true}
          smooth={true}
          duration={500}
        >
          <div>
            <span></span>
            <span></span>
          </div>
        </Link>
      </div>
    );
  }
}
