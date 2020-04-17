import React, { Component } from "react";

import Card from "./NavbarTabComponents/Card";

import "./NavbarTab.css";

class CourseworkTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleData: {
        title: "Coursework",
      },
      spring2020Data: {
        header: "Spring 2020",
        description: {
          paragraph1: "",
          bullets: [
            "01:198:112 Data Structures",
            "01:640:250 Introduction to Linear Algebra",
            "33:620:301 Introduction to Management",
            "33:011:300 Business Forum",
            "07:700:292 Introduction to World Music",
          ],
        },
        imageData: {},
      },

      fall2019Data: {
        header: "Fall 2019",
        description: {
          paragraph1: "",
          bullets: [
            "01:198:111 Introduction to Computer Science",
            "01:640:152 Calculus II for the Mathematical and Physical Sciences",
            "01:220:103 Introduction to Macroeconomics",
            "33:620:302 Management Skills",
            "01:355:101 Expository Writing",
          ],
        },
        imageData: {},
      },
      enteringRutgersData: {
        header: "Entering Rutgers",
        description: {
          paragraph1: "",
          bullets: [
            "01:640:151 Calculus I for the Mathematical and Physical Sciences",
            "01:960:285 Introductory Statistics for Business",
            "01:220:102 Introduction to Microeconomics",
            "01:512:103 Development of the United States I",
          ],
        },
        imageData: {},
      },
    };
  }
  render() {
    return (
      <div className="a-tab">
        <Card titleData={this.state.titleData} />
        <Card tabData={this.state.spring2020Data} />
        <Card tabData={this.state.fall2019Data} />
        <Card tabData={this.state.enteringRutgersData} />
      </div>
    );
  }
}

export default CourseworkTab;
