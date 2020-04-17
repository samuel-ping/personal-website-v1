import React, { Component } from "react";

import Card from "./NavbarTabComponents/Card";

import "./NavbarTab.css";

class ContactTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleData: {
        title: "Contact Me",
      },
      contactData: {
        header: "Emails",
        description: {
          bullets: ["samuel.y.ping@gmail.com", "samuel.ping@rutgers.edu"],
        },
        imageData: {},
      },
    };
  }
  render() {
    return (
      <div className="a-tab">
        <Card titleData={this.state.titleData} />
        <Card tabData={this.state.contactData} />
      </div>
    );
  }
}

export default ContactTab;
