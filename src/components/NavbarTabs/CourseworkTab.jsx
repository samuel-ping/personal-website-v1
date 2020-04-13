import React, { Component } from "react";

import "../styles/NavbarTab.css";

class CourseworkTab extends Component {
  state = {};
  render() {
    return (
      <div className="a-tab">
        <div className="text-area">
          <h1>Coursework</h1>
          <h2>Spring 2020</h2>
          <ul>
            <li>01:640:250 Introduction to Linear Algebra</li>
            <li>01:198:112 Data Structures</li>
            <li>33:620:301 Introduction to Management</li>
            <li>33:011:300 Business Forum</li>
            <li>07:700:292 Introduction to World Music</li>
          </ul>
          <h2>Fall 2019</h2>
          <ul>
            <li>01:198:111 Introduction to Computer Science</li>
            <li>01:220:103 Introduction to Macroeconomics</li>
            <li>01:355:101 Expository Writing</li>
            <li>
              01:640:152 Calculus II for the Mathematical and Physical Sciences
            </li>
            <li>33:620:302 Management Skills</li>
          </ul>
          <h2>Entering Rutgers</h2>
          <ul>
            <li>01:220:102 Introduction to Microeconomics</li>
            <li>
              01:640:151 Calculus I for the Mathematical and Physical Sciences
            </li>
            <li>01:960:285 Introductory Statistics for Business</li>
            <li>01:512:103 Development of the United States I</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CourseworkTab;
