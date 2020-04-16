import React, { Component } from "react";

import "./NavbarTab.css";

class InvolvementTab extends Component {
  render() {
    return (
      <div className="a-tab">
        <div className="text-area">
          <h1>School Involvement</h1>
          <h2>Undergraduate Alliance of Computer Scientists (USACS)</h2>
          <h3>
            A computer science organization geared towards making the CS
            community at Rutgers a better place. (September 2019 - Present)
          </h3>
          <ul>
            <li>
              Helped write assignment descriptions for CS112 (Data Structures)
              at Rutgers to make things clearer for students.
            </li>
            <li>
              Attending weekly meetings, helping pitch ideas about ways to
              improve the CS community at Rutgers.
            </li>
          </ul>
          <h2>Scarlet Council</h2>
          <h3>
            An organization at Rutgers that connects students and alumni
            together. (January 2020 - Present)
          </h3>
          <ul>
            <li>
              Volunteering at multiple networking events, by tabling for Scarlet
              Council or signing people into events.
            </li>
          </ul>
          <h2>Rutgers Tennis Club Travel Team</h2>
          <h3>(September 2019 - Present)</h3>
        </div>
      </div>
    );
  }
}

export default InvolvementTab;
