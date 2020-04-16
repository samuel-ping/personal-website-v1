import React, { Component } from "react";

import GitHubIcon from "../../../assets/images/icons/github.svg";

import "./SmallButton.css";

class SmallGitHubButton extends Component {
  render() {
    return (
      <div>
        <a
          href={this.props.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="small-button"
            src={GitHubIcon}
            alt="See this project's repository"
          />
        </a>
      </div>
    );
  }
}

export default SmallGitHubButton;
