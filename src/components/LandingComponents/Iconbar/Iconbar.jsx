import React, { Component } from "react";

import ReactTooltip from "react-tooltip";

import Resume from "../../../assets/samuel-ping.3-26-20.pdf";
import ResumeIcon from "../../../assets/images/icons/resume.svg";
// import GithubButton from "./IconbarComponents/GithubButton";
import GitHubIcon from "../../../assets/images/icons/github.svg";
import LinkedInIcon from "../../../assets/images/icons/linkedin.svg";
import EmailIcon from "../../../assets/images/icons/email.svg";

import "./Iconbar.css";

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
            data-tip="Resume"
          >
            <img src={ResumeIcon} alt="Resume" className="color-svg-white" />
          </a>
          <ReactTooltip
            className="tooltip-theme"
            type="light"
            place="bottom"
            effect="solid"
          />
        </li>
        <li>
          {/* <GithubButton /> */}
          <a
            className="icon-button"
            href="https://github.com/samuel-ping"
            target="_blank"
            rel="noopener noreferrer"
            data-tip="Github"
          >
            <img src={GitHubIcon} alt="GitHub" className="color-svg-white" />
          </a>
          <ReactTooltip
            className="tooltip-theme"
            type="light"
            place="bottom"
            effect="solid"
          />
        </li>
        <li>
          <a
            className="icon-button"
            href="https://linkedin.com/in/samuelping"
            target="_blank"
            rel="noopener noreferrer"
            data-tip="LinkedIn"
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn"
              className="color-svg-white"
            />
          </a>
          <ReactTooltip
            className="tooltip-theme"
            type="light"
            place="bottom"
            effect="solid"
          />
        </li>
        <li>
          <a
            className="icon-button"
            href="mailto:samuel.y.ping@gmail.com?Subject=Hey%20there!"
            target="_top"
            data-tip="Email Me"
          >
            <img src={EmailIcon} alt="Email Me" className="color-svg-white" />
          </a>
          <ReactTooltip
            className="tooltip-theme"
            type="light"
            place="bottom"
            effect="solid"
          />
        </li>
      </ul>
    );
  }
}
