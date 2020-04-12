import React, { Component } from "react";

import Resume from "../../assets/samuel-ping.3-26-20.pdf";
import ResumeIcon from "../../assets/images/icons/resume-black.png";
import GitHubIcon from "../../assets/images/icons/github-black.png";
import LinkedInIcon from "../../assets/images/icons/linkedin-black.png";
import EmailIcon from "../../assets/images/icons/email-black.png";

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

      // <ul id="icon-bar">
      //   <li className="icon-button">
      //     <a href={Resume} target="_blank" rel="noopener noreferrer">
      //       <img src={ResumeIcon} alt="Resume" />
      //     </a>
      //   </li>
      //   <li className="icon-button">
      //     <a
      //       href="https://github.com/samuel-ping"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       <img src={GitHubIcon} alt="GitHub" />
      //     </a>
      //   </li>
      //   <li className="icon-button">
      //     <a
      //       href="https://linkedin.com/in/samuelping"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       <img src={LinkedInIcon} alt="LinkedIn" />
      //     </a>
      //   </li>
      //   <li className="icon-button">
      //     <a
      //       href="mailto:samuel.y.ping@gmail.com?Subject=Hey%20there!"
      //       target="_top"
      //     >
      //       <img src={EmailIcon} alt="Email Me" />
      //     </a>
      //   </li>
      // </ul>
    );
  }
}
