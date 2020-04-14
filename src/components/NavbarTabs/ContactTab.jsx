import React, { Component } from "react";

import "./NavbarTab.css";

class ContactTab extends Component {
  state = {};
  render() {
    return (
      <div className="a-tab">
        <div className="text-area">
          <h1>Contact Me</h1>
          <h2>Phone Number:</h2>
          <p>+1 (609) 789-8897</p>
          <h2>Emails:</h2>
          <ul>
            <li>samuel.y.ping@gmail.com</li>
            <li>samuel.ping@rutgers.edu</li>
          </ul>
          <p>
            ... or just click the icon above/below next to the LinkedIn icon to
            directly send me an email!
          </p>
        </div>
      </div>
    );
  }
}

export default ContactTab;
