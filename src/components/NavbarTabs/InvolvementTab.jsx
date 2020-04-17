import React, { Component } from "react";

import Card from "./NavbarTabComponents/Card";

import "./NavbarTab.css";

class InvolvementTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleData: {
        title: "School Involvement",
      },

      usacsData: {
        header: "Undergraduate Student Alliance of Computer Scientists (USACS)",
        websiteLink: "https://usacs.rutgers.edu/",
        description: {
          paragraph1:
            "A computer science organization geared towards making the CS community at Rutgers a better place. I joined not only to support their initiatives, but also to make friends. (September 2019 - Present)",
          bullets: [
            "Helped write assignment descriptions for CS112 (Data Structures) at Rutgers to make things clearer for students.",
            "Attending weekly meetings, helping pitch ideas about ways to improve the CS community at Rutgers.",
          ],
        },
        imageData: {},
      },

      scarletCouncilData: {
        header: "Scarlet Council",
        websiteLink:
          "https://alumni.rutgers.edu/who-we-are/leadership-boards/scarlet-council/",
        description: {
          paragraph1:
            "An organization at Rutgers that connects students and alumni together. I joined this organization as a way to give back to the community. (January 2020 - Present)",
          bullets: [
            "Volunteering at multiple networking events, by tabling for Scarlet Council or signing people into events.",
            "Increase awareness of the Rutgers University Alumni Association.",
            "Provide students with access to Rutgers University's vast alumni network.",
            "Serve as liaisons to alumni on behalf of the current student body.",
          ],
        },
        imageData: {},
      },
      tennisClubData: {
        header: "Rutgers Club Tennis Travel Team",
        websiteLink:
          "https://rutgers.campuslabs.com/engage/organization/tennisclub",
        description: {
          paragraph1: "(September 2019 - Present)",
        },
        imageData: {},
      },
    };
  }
  render() {
    return (
      <div className="a-tab">
        <Card titleData={this.state.titleData} />
        <Card tabData={this.state.usacsData} />
        <Card tabData={this.state.scarletCouncilData} />
        <Card tabData={this.state.tennisClubData} />
      </div>
    );
  }
}

export default InvolvementTab;
