import React, { Component } from "react";

import "../styles/NavbarTab.css";
import ReactGA from "react-ga";
ReactGA.initialize("UA-163484661-1");
ReactGA.pageview("/experience");
class ExperienceTab extends Component {
  state = {};
  render() {
    return (
      <div className="a-tab">
        <div className="text-area">
          <h1>Work Experience</h1>
          <h2>Systems Programmer at Rutgers Open System Solutions</h2>
          <ul>
            <li>Updating RPMs in a Unix-based environment.</li>
            <li>Stood up Cacti Networking Monitor on local workstation.</li>
          </ul>
          <h3>Technologies: Unix-based Systems, Terminal commands, RPMs</h3>
          <h2>Code Sensei at Code Ninjas Princeton</h2>
          <ul>
            <li>
              Helped teach young students (lovingly called "ninjas") the basics
              of programming.
            </li>
          </ul>
          <h3>Technologies: Scratch, JavaScript</h3>
        </div>
      </div>
    );
  }
}

export default ExperienceTab;
