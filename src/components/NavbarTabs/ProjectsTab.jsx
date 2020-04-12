import React, { Component } from "react";

import "../styles/NavbarTab.css";

class ProjectsTab extends Component {
  state = {};
  render() {
    return (
      <div className="a-tab">
        <div className="text-area">
          <h1>Personal Projects</h1>
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
        </div>
      </div>
    );
  }
}

export default ProjectsTab;
