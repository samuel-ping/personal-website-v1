import React, { Component } from "react";

import "./NavbarTab.css";

class ProjectsTab extends Component {
  render() {
    return (
      <div className="a-tab">
        <div className="text-area">
          <h1>Personal Projects</h1>
          <h2>Personal Website</h2>
          <p>
            This is my second ever website I ever made! I build this to get a
            basic understanding of how React.js works.
          </p>
          <h3>Technologies used: React.js</h3>
          <h2 href="https://myfoodmood.herokuapp.com">Food Moods</h2>
          <p>
            A web app build for Capital One's Software Engineering Summit
            challenge. The challenge was to make a web app that helps people
            choose a restaurant using Yelp's Fusion API. My web app, Food Moods,
            uses Amazon's Rekognition algorithms to detect your emotions, then
            with Yelp's Fusion API, suggests a restaurant based off of your
            emotion!
          </p>
          <h3>Technologies used: HMTL, CSS, JavaScript, Node.js, Express.js</h3>
          <h2>Rutgers Bus Finder</h2>
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
