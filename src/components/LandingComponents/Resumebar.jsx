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
        <li className="icon-button">
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <img src={ResumeIcon} alt="Resume" />
          </a>
        </li>
        <li className="icon-button">
          <a
            href="https://github.com/samuel-ping"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub" />
          </a>
        </li>
        <li className="icon-button">
          <a
            href="https://linkedin.com/in/samuelping"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </li>
        <li className="icon-button">
          <a
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
