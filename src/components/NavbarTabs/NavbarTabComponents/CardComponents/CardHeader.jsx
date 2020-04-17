import React, { Component } from "react";

import GitHubButton from "./CardHeaderComponents/SmallGitHubButton";
import WebsiteButton from "./CardHeaderComponents/SmallWebsiteLinkButton";

class CardHeader extends Component {
  render() {
    if (this.props.header == null) {
      return null;
    } else if (
      this.props.githubLink == null &&
      this.props.websiteLink == null
    ) {
      return (
        <div className="header-container">
          <h2 className="card-header">{this.props.header}</h2>
        </div>
      );
    } else if (
      this.props.githubLink != null &&
      this.props.websiteLink != null
    ) {
      return (
        <div className="header-container">
          <h2 className="card-header">{this.props.header}</h2>
          <GitHubButton githubLink={this.props.githubLink} />
          <WebsiteButton websiteLink={this.props.websiteLink} />
        </div>
      );
    } else if (this.props.websiteLink !== null) {
      return (
        <div className="header-container">
          <h2 className="card-header">{this.props.header}</h2>
          <WebsiteButton websiteLink={this.props.websiteLink} />
        </div>
      );
    } else if (this.props.githubLink !== null) {
      return (
        <div className="header-container">
          <h2 className="card-header">{this.props.header}</h2>
          <GitHubButton githubLink={this.props.githubLink} />
        </div>
      );
    } else {
      return (
        <div>
          <h2>This tab doesn't exist!</h2>
        </div>
      );
    }
  }
}

export default CardHeader;
