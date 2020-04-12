import React, { Component } from "react";

import "../styles/NavbarTab.css";

class ContactTab extends Component {
  state = {};
  render() {
    return (
      <div className="a-tab">
        <div className="text-area">
          <h1>Contact Me</h1>
          <h2>Emails:</h2>
          <ul>
            <li>samuel.y.ping@gmail.com</li>
            <li>samuel.ping@rutgers.edu</li>
          </ul>
          <h2>
            ... or just click the icon above next to the LinkedIn icon to
            directly send me an email!
          </h2>
        </div>
      </div>
    );
  }
}

export default ContactTab;
