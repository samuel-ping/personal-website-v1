import React, { Component } from "react";

class Creditsbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <p id="credits">
        &copy; Samuel Ping 2020 | Built from scratch using React.js, Node.js,
        HTML5 and CSS3.
      </p>
    );
  }
}

export default Creditsbar;
