import React, { Component } from "react";

import Card from "./NavbarTabComponents/Card";

import "./NavbarTab.css";

class ProjectsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleData: {
        title: "Personal Projects",
      },

      personalWebsiteData: {
        header: "Personal Website",
        githubLink: "https://github.com/samuel-ping/personal-website",
        websiteLink: "https://samuelping.me",
        description: {
          paragraph1:
            "This is my second ever website I ever made! I build this to explore how React works and get a basic understanding of it. And to get a personal website, of course.",
        },
        technologies: "React.js",
        imageData: {
          image: "personalWebsitePreview",
          imageRotation: "0",
        },
      },
      foodMoodData: {
        header: "Food Mood",
        githubLink: "https://github.com/samuel-ping/food-mood",
        websiteLink: "https://myfoodmood.herokuapp.com",
        description: {
          paragraph1:
            "A web app build for Capital One's Software Engineering Summit challenge. The challenge was to make a web app that helps people choose a restaurant using Yelp's Fusion API. My web app, Food Moods, uses Amazon's Rekognition algorithms to detect your emotions, then with Yelp's Fusion API, suggests a restaurant based off of your emotion!",
        },
        technologies: "HMTL, CSS, JavaScript, Node.js, Express.js",
        imageData: {
          image: "foodMoodPreview",
          imageRotation: "0",
        },
      },
      busFinderData: {
        header: "Rutgers Bus Finder",
        githubLink: "https://github.com/samuel-ping/Rutgers-Bus-Finder",
        description: {
          paragraph1:
            "This project was built during HackRU Fall 2019. It takes in any two bus stops at Rutgers, and spits out all the buses that are currently running between those two stops.",
        },
        technologies: "Java",
        imageData: {},
      },
    };
  }
  render() {
    return (
      <div className="a-tab">
        <Card titleData={this.state.titleData} />
        <Card tabData={this.state.personalWebsiteData} />
        <Card tabData={this.state.foodMoodData} />
        <Card tabData={this.state.busFinderData} />
      </div>
    );
  }
}

export default ProjectsTab;
