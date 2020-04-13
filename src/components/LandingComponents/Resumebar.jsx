import React, { Component } from "react";

import Resume from "../../assets/samuel-ping.3-26-20.pdf";
import ResumeIcon from "../../assets/images/icons/resume.svg";
import GitHubIcon from "../../assets/images/icons/github.svg";
import LinkedInIcon from "../../assets/images/icons/linkedin.svg";
import EmailIcon from "../../assets/images/icons/email.svg";

export default class Resumebar extends Component {
  render() {
    return (
      <ul id="icon-bar">
        <li>
          <a
            className="icon-button"
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ResumeIcon} alt="Resume" />
          </a>
        </li>
        <li>
          <a
            className="icon-button"
            href="https://github.com/samuel-ping"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub" />
          </a>
        </li>
        <li>
          <a
            className="icon-button"
            href="https://linkedin.com/in/samuelping"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a
            className="icon-button"
            href="mailto:samuel.y.ping@gmail.com?Subject=Hey%20there!"
            target="_top"
          >
            <img src={EmailIcon} alt="Email Me" />
          </a>
        </li>
      </ul>
    );
  }
}
