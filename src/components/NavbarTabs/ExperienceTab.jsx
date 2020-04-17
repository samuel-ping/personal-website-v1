import React, { Component } from "react";

import Card from "./NavbarTabComponents/Card";

import "./NavbarTab.css";

class ExperienceTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleData: {
        title: "Work Experience",
      },

      ossData: {
        header: "Rutgers Open System Solutions (OSS)",
        websiteLink: "https://oss.rutgers.edu/",
        description: {
          paragraph1: "",
          bullets: [
            "Updating RPMs for Rutgers staff and students in a completely Unix-based environment.",
            "Stood up Cacti Networking Monitor on local workstation.",
          ],
        },
        technologies: "RPMs, Unix-based Systems, Terminal commands",
        imageData: {},
      },
      codeNinjasData: {
        header: "Code Ninjas",
        websiteLink: "https://www.codeninjas.com/locations/nj-princeton",
        description: {
          paragraph1: "",
          bullets: [
            'Helped teach young students (lovingly called "ninjas") the basics of programming by making games with them.',
            "Communicated children's progress with their parents.",
          ],
        },
        technologies: "Scratch, JavaScript",
        imageData: {},
      },
      dupontData: {
        header: "DuPont",
        websiteLink: "https://www.dupont.com/",
        description: {
          paragraph1: "",
          bullets: [
            "Learned and independently created lab formulations.",
            "Interviewed possible candidates for a position as a scientist. Trained new scientist in safety and introduced him to building.",
            "Performed marketing research on sunscreens and compiled data into Excel sheet.",
          ],
        },
        technologies: "Lab stuff! Not really applicable for computer science.",
        imageData: {},
      },
    };
  }
  render() {
    return (
      <div className="a-tab">
        <Card titleData={this.state.titleData} />
        <Card tabData={this.state.ossData} />
        <Card tabData={this.state.codeNinjasData} />
        <Card tabData={this.state.dupontData} />
      </div>
    );
  }
}

export default ExperienceTab;
