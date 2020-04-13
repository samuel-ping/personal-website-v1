import React, { Component } from "react";

import { Link } from "react-scroll";

export default class DownArrow extends Component {
  render() {
    return (
      <section id="down-arrow">
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
      </section>
    );
  }
}
