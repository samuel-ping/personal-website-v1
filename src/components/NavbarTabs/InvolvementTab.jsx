import React, { Component } from "react";

import "../styles/NavbarTab.css";

class InvolvementTab extends Component {
  state = {};
  render() {
    return (
      <div className="a-tab">
        <div className="text-area">
          <h1>School Involvement</h1>
          <h2>Undergraduate Alliance of Computer Scientists (USACS)</h2>
          <p>Wrote assignment descriptions</p>
        </div>
      </div>
    );
  }
}

export default InvolvementTab;
