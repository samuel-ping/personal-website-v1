import React, { Component } from "react";

import GitHubButton from "./NavbarTabComponents/SmallGitHubButton";
import WebsiteButton from "./NavbarTabComponents/SmallWebsiteLinkButton";

import "./NavbarTab.css";

class ProjectsTab extends Component {
  render() {
    return (
      <div className="a-tab">
        <div className="text-area">
          <h1>Personal Projects</h1>
          <div className="project-name-and-buttons">
            <h2>Personal Website</h2>
            <GitHubButton githubLink="https://github.com/samuel-ping/personal-website" />
            <WebsiteButton websiteLink="https://samuelping.me" />
          </div>
          <p>
            This is my second ever website I ever made! I build this to explore
            how React works and get a basic understanding of it.
          </p>
          <h3>Technologies used: React.js</h3>

          <div className="project-name-and-buttons">
            <h2>Food Moods</h2>
            <GitHubButton githubLink="https://github.com/samuel-ping/food-mood" />
            <WebsiteButton websiteLink="https://myfoodmood.herokuapp.com" />
          </div>
          <p>
            A web app build for Capital One's Software Engineering Summit
            challenge. The challenge was to make a web app that helps people
            choose a restaurant using Yelp's Fusion API. My web app, Food Moods,
            uses Amazon's Rekognition algorithms to detect your emotions, then
            with Yelp's Fusion API, suggests a restaurant based off of your
            emotion!
          </p>
          <h3>Technologies used: HMTL, CSS, JavaScript, Node.js, Express.js</h3>
          <div className="project-name-and-buttons">
            <h2>Rutgers Bus Finder</h2>
            <GitHubButton githubLink="https://github.com/samuel-ping/Rutgers-Bus-Finder" />
          </div>
          <p>
            This project was build during HackRU Fall 2019. It takes in any two
            bus stops at Rutgers, and spits out all the buses that are currently
            running between those two stops.
          </p>
          <h3>Technologies used: Java</h3>
        </div>
      </div>
    );
  }
}

export default ProjectsTab;
