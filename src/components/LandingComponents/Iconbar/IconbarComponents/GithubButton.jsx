import React, { Component } from "react";

import ReactTooltip from "react-tooltip";

import GitHubIcon from "../../../../assets/images/icons/github.svg";

import "./IconButton.css";

class GithubButton extends Component {
  render() {
    return (
      <div className="icon-button">
        <a
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
      </div>
    );
  }
}

export default GithubButton;
