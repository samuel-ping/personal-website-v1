import React, { Component } from "react";

import Resume from "../../assets/samuel-ping.3-26-20.pdf";
import Github from "../../assets/images/icons/github-icon.png";
import LinkedIn from "../../assets/images/icons/linkedin-icon.png";
import Email from "../../assets/images/icons/email-icon.png";

export default class Resumebar extends Component {
  render() {
    return (
      <ul id="icon-bar">
        {/* <li class="resume-button">
          <a href={Resume}></a>
        </li> */}
        <li class="icon-button">
          <a href="https://github.com/samuel-ping" target="_blank">
            <img src={Github} />
          </a>
        </li>
        <li class="icon-button">
          <a href="https://linkedin.com/in/samuelping" target="_blank">
            <img src={LinkedIn} />
          </a>
        </li>
        <li class="icon-button">
          <a
            href="mailto:samuel.y.ping@gmail.com?Subject=Hey%20there!"
            target="_top"
          >
            <img src={Email} />
          </a>
        </li>
      </ul>
    );
  }
}
