import React, { Component } from "react";

import TitleCard from "./CardComponents/TitleCard";
import CardHeader from "./CardComponents/CardHeader";
import CardDescription from "./CardComponents/CardDescription";
import CardBullets from "./CardComponents/CardBullets";
import CardTechnologies from "./CardComponents/CardTechnologies";
import CardPicture from "./CardComponents/CardPicture";

import "./Card.css";

/* This Component takes the following props:
    titleData (title)
    OR
    header
    gitHubLink
    websiteLink
    description (paragraph1, paragraph2, bulletList ([]))
    technologies
    image
*/

class Card extends Component {
  render() {
    if (this.props.titleData == null) {
      return (
        <div id="card">
          <div id="card-left-side">
            <CardHeader
              header={this.props.tabData.header}
              githubLink={this.props.tabData.githubLink}
              websiteLink={this.props.tabData.websiteLink}
            />
            <CardDescription description={this.props.tabData.description} />
            <CardBullets bullets={this.props.tabData.description.bullets} />
            <CardTechnologies technologies={this.props.tabData.technologies} />
          </div>
          <div id="card-right-side">
            <CardPicture
              image={this.props.tabData.imageData.image}
              rotation={this.props.tabData.imageData.imageRotation}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div id="card">
          <TitleCard title={this.props.titleData.title} />
        </div>
      );
    }
  }
}

export default Card;
