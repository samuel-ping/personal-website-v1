import React, { Component } from "react";

import Resume from "../../assets/samuel-ping.3-26-20.pdf";
import ResumeIcon from "../../assets/images/icons/resume-icon.png";
import GitHubIcon from "../../assets/images/icons/github-icon.png";
import LinkedInIcon from "../../assets/images/icons/linkedin-icon.png";
import EmailIcon from "../../assets/images/icons/email-icon.png";

export default class Resumebar extends Component {
  render() {
    return (
      <ul id="icon-bar">
        <li class="icon-button">
          <a href={Resume} target="_blank">
            <img src={ResumeIcon} />
          </a>
        </li>
        <li class="icon-button">
          <a href="https://github.com/samuel-ping" target="_blank">
            <img src={GitHubIcon} />
          </a>
        </li>
        <li class="icon-button">
          <a href="https://linkedin.com/in/samuelping" target="_blank">
            <img src={LinkedInIcon} />
          </a>
        </li>
        <li class="icon-button">
          <a
            href="mailto:samuel.y.ping@gmail.com?Subject=Hey%20there!"
            target="_top"
          >
            <img src={EmailIcon} />
          </a>
        </li>
      </ul>
    );
  }
}
